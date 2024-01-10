import { render, screen, fireEvent } from "@testing-library/react";
import BasicSwitch from "./Switch";

describe("BasicSwitch", () => {
  const mockHandleChange = jest.fn();

  test("renders the BasicSwitch component correctly", () => {
    render(<BasicSwitch />);
  });

  test("switch should be unchecked by default", () => {
    render(<BasicSwitch />);
    const switchElement = screen.getByRole("checkbox");
    expect(switchElement).not.toBeChecked();
  });

  test("switch should be checked when clicked", () => {
    render(<BasicSwitch handleChange={mockHandleChange} />);
    const switchElement = screen.getByRole("checkbox");
    fireEvent.click(switchElement);
    expect(switchElement).toBeChecked();
    expect(mockHandleChange).toHaveBeenCalledTimes(1);
  });
});
