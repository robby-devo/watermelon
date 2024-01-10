import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  const mockLabel = "Test Button";

  const mockHandleClick = jest.fn();

  test("renders button correctly", () => {
    render(<Button label={mockLabel} handleClick={mockHandleClick} />);

    const buttonElement = screen.getByRole("button", { name: mockLabel });

    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(mockLabel);
  });

  test("handles button click", () => {
    render(<Button label={mockLabel} handleClick={mockHandleClick} />);

    const buttonElement = screen.getByRole("button", { name: mockLabel });
    fireEvent.click(buttonElement);

    expect(mockHandleClick).toHaveBeenCalled();
  });

  test("disables button when disabled prop is true", () => {
    render(<Button label={mockLabel} handleClick={mockHandleClick} disabled />);

    const buttonElement = screen.getByRole("button", { name: mockLabel });

    expect(buttonElement).toBeDisabled();
  });

  test("disables button when disableSecondary prop is true", () => {
    render(
      <Button
        label={mockLabel}
        handleClick={mockHandleClick}
        disableSecondary
        disabled
      />
    );

    const buttonElement = screen.getByRole("button", { name: mockLabel });

    expect(buttonElement).toHaveClass("disableSecondary");
  });

  test("applies large button style when large prop is true", () => {
    render(<Button label={mockLabel} handleClick={mockHandleClick} large />);

    const buttonElement = screen.getByRole("button", { name: mockLabel });

    expect(buttonElement).toHaveClass("largeBtn");
  });

  test("applies secondary button style when secondary prop is true", () => {
    render(
      <Button label={mockLabel} handleClick={mockHandleClick} secondary />
    );

    const buttonElement = screen.getByRole("button", { name: mockLabel });

    expect(buttonElement).toHaveClass("secondary");
  });

  test("applies link button style when link prop is true", () => {
    render(<Button label={mockLabel} handleClick={mockHandleClick} link />);

    const buttonElement = screen.getByRole("button", { name: mockLabel });

    expect(buttonElement).toHaveClass("link");
  });

  test("applies common button style when no additional props are provided", () => {
    render(<Button label={mockLabel} handleClick={mockHandleClick} />);

    const buttonElement = screen.getByRole("button", { name: mockLabel });

    expect(buttonElement).toHaveClass("commonBtn");
    expect(buttonElement).not.toHaveClass("largeBtn");
    expect(buttonElement).not.toHaveClass("secondary");
    expect(buttonElement).not.toHaveClass("disabled");
    expect(buttonElement).not.toHaveClass("disableSecondary");
    expect(buttonElement).not.toHaveClass("link");
  });
});
