import React from "react";
import { Settings } from "./Settings";
import "@testing-library/jest-dom";
import { fireEvent, getByText, getByRole, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Account } from "./Account";
import { ProfileAccountIcon } from "./ProfileAccountIcon";
//bring over data-attribute changes from Settings & Account

describe("profile account section test", () => {
  beforeEach(() => render(<Account />));
  it("check that the account container exists", () => {
    expect(screen.getByTestId("AccountContainer-Test")).toBeInTheDocument();
  });
  it("check the year joined section contains the text 'Member since 2022'", () => {
    expect(screen.getByTestId('YearJoined-Test')).toHaveTextContent('Member since 2022');
  });
  it("check the member initials section contains the text 'SP'", () => {
    expect(screen.getByTestId('UserInitials-Test')).toHaveTextContent('SP');
  });
});



describe("settings tests", () => {
  beforeEach(() => render(<Settings />));
  it("check the settings component has rendered", () => {
    expect(
      screen.getByTestId("SettingsTitleContainer-Test")
    ).toBeInTheDocument();
  });
  it("dropdown expands when clicked", async () => {
    let dropdown = screen.getByTestId("SettingsTitleContainer-Test");
    expect(screen.queryByTestId("DropDownContentContainer-Test")).toBeFalsy();
    userEvent.click(dropdown);
    expect(await screen.findByText("Log Out")).toBeVisible();
  });
});

describe("My work", () => {
  test("works", () => {
    expect(2).toEqual(2);
  });
});
