import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import Signin from "../components/signin/Signin";
import user from "@testing-library/user-event";

describe("Test SignIn", () => {
  test("should works without crashing", () => {
    const { debug } = render(<Signin />);
    //debug();
  });

  test("should contains Email, Password and a submit button", () => {
    const { debug, getByLabelText, getByTestId } = render(<Signin />);
    const inputEmail = getByLabelText(/Email/i);
    debug(inputEmail);
    expect(inputEmail).toBeTruthy();
    expect(inputEmail).toHaveAttribute("type", "text");

    const inputPassword = getByLabelText(/Password/i);
    //debug(inputPassword);
    expect(inputPassword).toBeTruthy();
    expect(inputPassword).toHaveAttribute("type", "password");
    expect(getByTestId("submit")).toBeTruthy();
    // expect(getByText(/Login/i)).toBeTruthy()
  });

  test("should fire events", () => {
    const { getByLabelText, getByTestId } = render(<Signin />);

    const inputEmail = getByLabelText(/Email/i);
    const EmailValue = "amal";
    //user.type(inputEmail, EmailValue);
    act(() => {
      fireEvent.input(inputEmail, { target: { value: EmailValue } });
    });
    //jest matcher
    expect(inputEmail.value).toContain(EmailValue);
    //jest-dom matcher
    //expect(inputEmail).toHaveValue(EmailValue)
    const submitButton = getByTestId("submit");
    act(() => {
      fireEvent.click(submitButton);
    });

    //user.click(submitButton);
  });
});
