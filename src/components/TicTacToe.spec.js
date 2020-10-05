import React from "react";
import { mount } from "enzyme";
import Cell from "./Cell";
import TicTacToe from "./TicTacToe";
import Theme from "../Theme";
import O from "./O";
import X from "./X";

describe("<TicTacToe />", () => {
  const wrapper = () =>
    mount(
      <Theme>
        <TicTacToe />
      </Theme>
    ).find(TicTacToe);

  it("renders", () => {
    expect(wrapper()).toHaveLength(1);
  });

  describe("Cell rendering", () => {
    it("initially renders 9 cells", () => {
      expect(wrapper().find(Cell)).toHaveLength(9);
    });
    it("initially renders all cells as blank", () => {
      wrapper()
        .find(Cell)
        .forEach((cellWrapper) => {
          const cellContent = cellWrapper.find('div[data-testid="board-cell"]');
          expect(cellContent.children()).toHaveLength(0);
        });
    });
  });

  describe("Player turns", () => {
    const wrapper = mount(
      <Theme>
        <TicTacToe />
      </Theme>
    );
    const firstCell = wrapper.find('[data-testid="board-cell"]').at(0);

    it("marks the correct cell on human click", () => {
      firstCell.simulate("click");
      expect(wrapper.find(X)).toHaveLength(1);
    });

    it("causes computer to mark cell following human click", () => {
      firstCell.simulate("click");
      expect(wrapper.find(O)).toHaveLength(1);
    });

    it("prevents overriding already selected cell with new marker", () => {
      firstCell.simulate("click");
      // Grab cell selected by the computer
      const computerCell = wrapper.find({ position: "1,1" });

      computerCell.simulate("click");
      expect(computerCell.find(X)).toHaveLength(0);
    });
  });

  describe("Reset functionality works", () => {
    const wrapper = mount(
      <Theme>
        <TicTacToe />
      </Theme>
    );
    it("clears board after clicking reset button", () => {
      wrapper.find(Cell).at(0).simulate("click");
      expect(wrapper.find(O).length).toEqual(1);
      expect(wrapper.find(X).length).toEqual(1);
      wrapper.find('[data-testid="reset-button"]').at(1).simulate("click");
      expect(wrapper.find(O).length).toEqual(0);
      expect(wrapper.find(X).length).toEqual(0);
    });
  });

  describe("Win message rendering", () => {
    const simulateMove = (x, y, wrapper) => {
      wrapper
        .find({ position: `${x},${y}` })
        .first()
        .simulate("click");
      wrapper.update();
    };

    it("renders computer wins on diagonal computer victory", () => {
      const subject = wrapper();
      simulateMove(0, 0, subject);
      simulateMove(1, 0, subject);
      simulateMove(0, 1, subject);

      expect(subject.find("GameMessage").text()).toBe("Computer Wins!");
    });

    it("renders computer wins on horizontal computer victory", () => {
      const subject = wrapper();
      simulateMove(0, 1, subject);
      simulateMove(0, 2, subject);
      simulateMove(1, 2, subject);

      expect(subject.find("GameMessage").text()).toBe("Computer Wins!");
    });

    it("renders computer wins on vertical computer victory", () => {
      const subject = wrapper();
      simulateMove(1, 0, subject);
      simulateMove(2, 1, subject);
      simulateMove(1, 2, subject);

      expect(subject.find("GameMessage").text()).toBe("Computer Wins!");
    });

    it("renders tie on tie", () => {
      const subject = wrapper();
      simulateMove(0, 0, subject);
      simulateMove(0, 1, subject);
      simulateMove(2, 0, subject);
      simulateMove(1, 2, subject);
      simulateMove(2, 2, subject);

      expect(subject.find("GameMessage").text()).toBe("Tie!");
    });
  });
});
