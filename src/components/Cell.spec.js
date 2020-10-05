import React from "react";
import { shallow } from "enzyme";
import Cell from "./Cell";
import Theme from "../Theme";

describe("<Cell />", () => {
  const noOp = () => {};

  const wrapper = (overrides = {}) =>
    shallow(
      <Theme>
        <Cell {...{ onClick: noOp, ...overrides }}>
          <span>Hello world</span>
        </Cell>
      </Theme>
    ).find(Cell);

  it("renders", () => {
    const subject = wrapper();
    expect(subject).toHaveLength(1);
  });

  describe("onClick", () => {
    it("calls onClick", () => {
      const mockOnClick = jest.fn();
      const subject = wrapper({ onClick: mockOnClick });

      subject.simulate("click");

      expect(subject.prop("onClick")).toHaveBeenCalledTimes(1);
    });
  });

  describe("children", () => {
    it("renders children", () => {
      const subject = wrapper();

      expect(subject.children().first().text()).toBe("Hello world");
    });
  });
});
