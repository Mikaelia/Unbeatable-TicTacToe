import React from "react";
import { shallow } from "enzyme";
import O from "./O";
import Theme from "./Theme";

describe("<O/>", () => {
  const wrapper = () =>
    shallow(
      <Theme>
        <O />
      </Theme>
    ).find(O);

  it("renders", () => {
    expect(wrapper()).toHaveLength(1);
  });
});
