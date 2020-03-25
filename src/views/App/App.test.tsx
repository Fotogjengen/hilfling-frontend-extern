import App from "./App";
import React from "react";
import { shallow } from "enzyme";
describe("App does load", () => {
  it("Testing if testing is working", () => {
    const component = shallow(<App></App>);
    expect(component.find("div")).toBeDefined();
  });
});
