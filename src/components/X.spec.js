import React from "react";
import { shallow } from "enzyme";
import X from "./X";
import Theme from "./Theme";

describe("<X/>", () => {
  const wrapper = () =>
    shallow(
      <Theme>
        <X />
      </Theme>
    ).find(X);

  it("renders", () => {
    expect(wrapper()).toHaveLength(1);
  });
});
