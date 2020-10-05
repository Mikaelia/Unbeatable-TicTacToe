import React from "react";
import { mount } from "enzyme";
import App from "./App.js";

describe("TicTacToe", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  describe("Initial board state is correct", () => {
    it("renders 9 cells", () => {
      expect(wrapper.find('[data-testid="board-cell"]')).toHaveLength(9);
    });

    it("renders cells without markers", () => {
      expect(wrapper.find('[data-testid="o-indicator"]')).toHaveLength(0);
      expect(wrapper.find('[data-testid="x-indicator"]')).toHaveLength(0);
    });
  });
  describe("A move can be played", () => {
    it("marks the correct cell on human click", () => {
      const firstCell = wrapper.find('[data-testid="board-cell"]').at(0);
      firstCell.simulate("click");
      expect(firstCell.html().includes("x-indicator")).toBe(true);
    });

    it("causes computer to mark cell following human click", () => {
      wrapper.find('[data-testid="board-cell"]').at(0).simulate("click");
      // styled-components causes doubling of attr;
      expect(wrapper.find('[data-testid="o-indicator"]').length).toEqual(2);
    });

    it("prevents overriding already selected cell with new marker", () => {
      wrapper.find('[data-testid="board-cell"]').at(0).simulate("click");
      // Grab cell selected by the computer
      const computerCell = wrapper.find('[data-testid="o-indicator"]').at(0);
      computerCell.simulate("click");
      expect(computerCell.html().includes("x-indicator")).toBe(false);
    });
  });

  describe("Reset functionality works", () => {
    it("clears board after clicking reset button", () => {
      wrapper.find('[data-testid="board-cell"]').at(0).simulate("click");
      expect(wrapper.find('[data-testid="o-indicator"]').length).toEqual(2);
      expect(wrapper.find('[data-testid="x-indicator"]').length).toEqual(2);
      wrapper.find('[data-testid="reset-button"]').at(1).simulate("click");
      expect(wrapper.find('[data-testid="x-indicator"]').length).toEqual(0);
      expect(wrapper.find('[data-testid="x-indicator"]').length).toEqual(0);
    });
  });
});

// - Test that a winner can be found in a row
// - Test that a winner can be found in a column
// - Test that a winner can be found in a diagonal
// - Test that a draw can be found
