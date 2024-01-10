import { render, screen, fireEvent } from "@testing-library/react";
import RadioButton from "./RadioButton";

describe("RadioButton", () => {
  test("renders the RadioButton component correctly", () => {
    render(<RadioButton />);
  });

  test("radio button should be unchecked by default", () => {
    render(<RadioButton />);
    const radioButton = screen.getByRole("radio");
    expect(radioButton).not.toBeChecked();
  });

  test("radio button should be checked when clicked", () => {
    render(<RadioButton />);
    const radioButton = screen.getByRole("radio");
    fireEvent.click(radioButton);
    expect(radioButton).toBeChecked();
  });

  test("radio button should have primary pink color when checked", () => {
    render(<RadioButton checked />);
    const radioButton = screen.getByRole("radio");
    expect(radioButton).toHaveStyle("color: var(--primaryPink)");
  });

  test("radio button should have tertiary grey color when unchecked", () => {
    render(<RadioButton />);
    const radioButton = screen.getByRole("radio");
    expect(radioButton).toHaveStyle("color: var(--tertiaryGrey7)");
  });

  test("radio button should have tertiary grey color when disabled", () => {
    render(<RadioButton disabled />);
    const radioButton = screen.getByRole("radio");
    expect(radioButton).toHaveStyle("color: var(--tertiaryGrey7)");
  });

  test("calls handleChange function when clicked", () => {
    const mockHandleChange = jest.fn();
    render(
      <RadioButton
        checked={false}
        setChecked={jest.fn()}
        handleChange={mockHandleChange}
      />
    );
    const radioButton = screen.getByRole("radio");
    fireEvent.click(radioButton);
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });
});
