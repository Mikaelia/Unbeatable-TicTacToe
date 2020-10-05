import React from "react";
import { mount } from "enzyme";
import App from "./App.js";

describe("TicTacToe", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<App />);
  });

  it("renders", () => {
    const subject = wrapper;
    expect(subject).toHaveLength(1);
  });
});
