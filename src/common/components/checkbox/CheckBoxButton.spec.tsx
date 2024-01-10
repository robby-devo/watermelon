import { render, screen, fireEvent } from "@testing-library/react";
import CheckboxButton from "./CheckboxButton";

describe("CheckboxButton", () => {
  test("renders the CheckboxButton component correctly", () => {
    render(<CheckboxButton />);
  });

  test("checkbox should not be checked", () => {
    render(<CheckboxButton />);
    const checkbox = screen.getByTestId("checkbox");
    expect(checkbox).not.toBeChecked();
  });

  test("checkbox should be checked when clicked", () => {
    render(<CheckboxButton />);
    const checkboxInput = screen.getByRole("checkbox");
    fireEvent.click(checkboxInput);
    expect(checkboxInput).toBeChecked();
  });

  test("renders selected checkbox", () => {
    render(<CheckboxButton partiallySelected />);
    const checkboxInput = screen.getByRole("checkbox");
    expect(checkboxInput).toBeInTheDocument();
  });

  test("renders checkbox with label", () => {
    const mockLabel = "Test Label";
    render(<CheckboxButton label={mockLabel} />);
    const labelElement = screen.getByText(mockLabel);
    expect(labelElement).toBeInTheDocument();
  });

  test("renders error message when provided", () => {
    const mockErrorMessage = "Test Error Message";
    render(<CheckboxButton errorMessage={mockErrorMessage} />);
    const errorMessageElement = screen.getByText(mockErrorMessage);
    expect(errorMessageElement).toBeInTheDocument();
  });
});
