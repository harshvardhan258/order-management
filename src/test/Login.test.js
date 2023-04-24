import React from "react";
import { render, fireEvent, act } from "@testing-library/react";
import "@testing-library/jest-dom";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../components/Login";
import { isValidEmail } from "../utils/validation";
import { login } from "../actions/login";

jest.mock("react-redux");
jest.mock("react-router-dom");
jest.mock("../utils/validation");
jest.mock("../actions/login");

describe("Login component", () => {
  let dispatchMock, navigateMock, emailInput, passwordInput, submitButton;

  beforeEach(() => {
    dispatchMock = jest.fn();
    useDispatch.mockReturnValue(dispatchMock);
    navigateMock = jest.fn();
    useNavigate.mockReturnValue(navigateMock);
    isValidEmail.mockReturnValue(true);

    const { getByLabelText, getByTestId } = render(<Login />);
    emailInput = getByLabelText("Email:");
    passwordInput = getByLabelText("Password:");
    submitButton = getByTestId("submit");
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders without crashing", () => {
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  it("sets email and password correctly on input change", () => {
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });

    expect(emailInput).toHaveValue("test@example.com");
    expect(passwordInput).toHaveValue("password");
  });

  it("displays error message when email is not provided", () => {
    const { getByText } = render(<Login />);
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitButton);

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
    expect(getByText("Email is required.")).toBeInTheDocument();
  });

  it("displays error message when email is invalid", () => {
    const { getByText } = render(<Login />);
    isValidEmail.mockReturnValue(false);

    fireEvent.change(emailInput, { target: { value: "invalid-email" } });
    fireEvent.change(passwordInput, { target: { value: "password" } });
    fireEvent.click(submitButton);

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
    expect(getByText("Invalid email address.")).toBeInTheDocument();
  });

  it("displays error message when password is not provided", () => {
    const { getByText } = render(<Login />);
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.submit(submitButton);

    expect(dispatchMock).not.toHaveBeenCalled();
    expect(navigateMock).not.toHaveBeenCalled();
    expect(getByText("Password is required.")).toBeInTheDocument();
  });

  it("dispatches login action on form submit", async () => {
    const email = "test@example.com";
    const password = "password";
    login.mockResolvedValue({ success: true });

    fireEvent.change(emailInput, { target: { value: email } });
    fireEvent.change(passwordInput, { target: { value: password } });
    await act(async () => {
      fireEvent.submit(submitButton);
    });

    expect(login).toHaveBeenCalledWith(email, password, expect.any(Function));
    expect(navigateMock).toHaveBeenCalledWith("/orders");
  });
});
