import React from "react";
import { render } from "@testing-library/react";
import Signup from "../components/signup/Signup";
import user from "@testing-library/user-event";
import MutationObserver from "mutation-observer";
global.MutationObserver = MutationObserver;

describe("Test SignUp", () => {
  test("should works without crashing", () => {
    const { debug } = render(<Signup />);
    debug();
  });

  test("should contains nom,prenom,dateN,tel,adresse,email,password and a  submit button", () => {
    const { debug, getByLabelText, getByTestId } = render(<Signup />);
    const inputNom = getByLabelText(/name/i);
    expect(inputNom).toBeTruthy();
    expect(inputNom).toHaveAttribute("type", "text");

    const inputPrenom = getByLabelText(/Prenom/i);
    expect(inputPrenom).toBeTruthy();
    expect(inputPrenom).toHaveAttribute("type", "text");

    const inputDate = getByLabelText(/Date/i);
    debug(inputDate);
    expect(inputDate).toBeTruthy();
    expect(inputDate).toHaveAttribute("type", "date");

    const inputTel = getByLabelText(/Tel/i);
    expect(inputTel).toBeTruthy();
    expect(inputTel).toHaveAttribute("type", "text");

    const inputAdresse = getByLabelText(/Adresse/i);
    expect(inputAdresse).toBeTruthy();
    expect(inputAdresse).toHaveAttribute("type", "text");

    const inputEmail = getByLabelText(/Email/i);
    expect(inputEmail).toBeTruthy();
    expect(inputEmail).toHaveAttribute("type", "email");

    const inputPassword = getByLabelText(/Password/i);
    debug(inputPassword);
    expect(inputPassword).toBeTruthy();
    expect(inputPassword).toHaveAttribute("type", "password");
    const inputConfirm = getByLabelText(/Confirm/i);
    expect(inputConfirm).toBeTruthy();
    expect(inputConfirm).toHaveAttribute("type", "password");

    expect(getByTestId("submit")).toBeTruthy();
  });

  test("should fire events", () => {
    const { getByLabelText, getByTestId } = render(<Signup />);

    const inputName = getByLabelText(/name/i);
    const NameValue = "mmmmm";
    user.type(inputName, NameValue);
    //jest-dom matcher
    expect(inputName).toHaveValue(NameValue);

    const inputPrenom = getByLabelText(/Prenom/i);
    const PrenomValue = "nnn";
    user.type(inputPrenom, PrenomValue);
    expect(inputPrenom).toHaveValue(PrenomValue);

    const inputDate = getByLabelText(/Date/i);
    const DateValue = "2020-04-08";
    user.type(inputDate, DateValue);
    expect(inputDate).toHaveValue(DateValue);

    const inputTel = getByLabelText(/Tel/i);
    const TelValue = "12345678";
    user.type(inputTel, TelValue);
    expect(inputTel).toHaveValue(TelValue);

    const inputAdresse = getByLabelText(/Adresse/i);
    const AdresseValue = "aaaaaa";
    user.type(inputAdresse, AdresseValue);
    expect(inputAdresse).toHaveValue(AdresseValue);

    const inputEmail = getByLabelText(/Email/i);
    const EmailValue = "nnnnn";
    user.type(inputEmail, EmailValue);
    expect(inputEmail).toHaveValue(EmailValue);

    const submitButton = getByTestId("submit");
    user.click(submitButton);
  });
});
