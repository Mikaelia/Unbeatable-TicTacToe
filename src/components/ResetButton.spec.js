import React from "react";
import { shallow } from "enzyme";
import ResetButton from "./ResetButton";
import Theme from "./Theme";

describe("<ResetButton />", () => {
  const noOp = () => {};

  const wrapper = (overrides = {}) =>
    shallow(
      <Theme>
        <ResetButton {...{ onClick: noOp, ...overrides }}></ResetButton>
      </Theme>
    ).find(ResetButton);

  it("renders", () => {
    expect(wrapper()).toHaveLength(1);
  });

  describe("onClick", () => {
    it("calls onClick", () => {
      const mockOnClick = jest.fn();
      const subject = wrapper({ onClick: mockOnClick });

      subject.simulate("click");

      expect(subject.prop("onClick")).toHaveBeenCalledTimes(1);
    });
  });
});
