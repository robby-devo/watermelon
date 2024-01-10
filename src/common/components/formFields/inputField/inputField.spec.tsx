import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import InputField from "./inputField";

describe("InputField", () => {
  test("renders correctly", () => {
    render(
      <InputField
        label="Username"
        placeholder="Enter your username"
        register={() => { }}
        onChange={() => { }}
        type="text"
        errorMessage=""
        id="username"
        icon={<div></div>}
        width="200px"
        height="40px"
      />
    );

    const input = screen.getByText("Username");
    expect(input).toBeDefined();
  });

  test("renders password field correctly and password toggle works", () => {
    render(
      <InputField
        label="Password"
        placeholder="Enter your Password"
        register={() => { }}
        onChange={() => { }}
        type="password"
        errorMessage=""
        id="password"
        icon={null}
        width="200px"
        height="40px"
      />
    );

    const input = screen.getByText("Password");
    expect(input).toBeDefined();
  });

  test("renders textarea correctly", () => {
    render(
      <InputField
        label="Username"
        placeholder="Enter your username"
        register={() => { }}
        onChange={() => { }}
        type="text"
        errorMessage=""
        id="username"
        width="200px"
        height="40px"
        isTextarea={true}
      />
    );

    const input = screen.getByText("Username");
    expect(input).toBeDefined();
  });

  test("password toggle works correctly", () => {
    render(
      <InputField
        label="Password"
        placeholder="Enter your Password"
        register={() => { }}
        onChange={() => { }}
        type="password"
        errorMessage=""
        id="password"
        icon={null}
        width="200px"
        height="40px"
      />
    );

    const eyeIcon = screen.getByTestId("eyeIcon");
    fireEvent.click(eyeIcon);

    const input = screen.getByTestId("password");
    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(eyeIcon);
    expect(input).toHaveAttribute("type", "text");
  });

  test("calls onChange function when input value changes", () => {
    const onChange = jest.fn();

    render(
      <InputField
        label="Username"
        placeholder="Enter your username"
        register={() => { }}
        onChange={onChange}
        type="text"
        errorMessage=""
        id="username"
        icon={null}
        width="200px"
        height="40px"
      />
    );

    const input = screen.getByTestId("username");
    fireEvent.change(input, { target: { value: "JohnDoe" } });

    expect(onChange).toHaveBeenCalled();
  });

  test("displays error message when errorMessage prop is provided", () => {
    render(
      <InputField
        label="Username"
        placeholder="Enter your username"
        register={() => { }}
        onChange={() => { }}
        type="text"
        errorMessage="Invalid username"
        id="username"
        icon={null}
        width="200px"
        height="40px"
      />
    );

    const errorMessage = screen.getByText("Invalid username");
    expect(errorMessage).toBeDefined();
  });
});
