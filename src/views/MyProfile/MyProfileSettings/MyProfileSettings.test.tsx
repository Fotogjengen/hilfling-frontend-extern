import React from "react";
import MyProfileSetting from "./MyProfileSettings";
import { setupMaster } from "clusoter";
import { render, cleanup } from "@testing-library/react";
describe("It loads correctly", () => {
  //   beforeEach(() => ());
  afterEach(cleanup);

  it("renders", () => {
    const dom = render(<MyProfileSetting></MyProfileSetting>);
    const container = MyProfileSetting();
    expect("");
  });
  describe("Loads renders correctly", () => {
    it("It shows correct form if user is fetched", () => {});

    it("It sends updated response to backend", () => {});
  });
  describe("It fails to load", () => {
    it("Shows error message", () => {});
  });
});
