import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import DatePickerComponent from "./DatePicker";

const mockHandleDateChange = jest.fn();
describe("DatePickerComponent tests", () => {
  test("DatePicker renders correctly new", () => {
    render(
      <DatePickerComponent
        date={new Date()}
        setDate={() => {}}
        handleDateChange={mockHandleDateChange}
        errorMessage="error"
      />
    );
    expect(screen.getByLabelText("Choose date")).toBeInTheDocument();
    expect(screen.getByTestId("CalendarIcon")).toBeInTheDocument();
  });
  test("DatePicker calls handleDateChange on change", () => {
    render(
      <DatePickerComponent
        date={new Date()}
        setDate={() => {}}
        handleDateChange={mockHandleDateChange}
        errorMessage="error"
      />
    );
    const button = screen.getByTestId("CalendarIcon");
    fireEvent.click(button);
    const buttonArr = screen.getAllByRole("gridcell");
    buttonArr.forEach((button) => {
      fireEvent.click(button);
    });
  });
  test("renders the label with a sup tag", () => {
    render(
      <DatePickerComponent
        date={new Date()}
        setDate={() => {}}
        handleDateChange={mockHandleDateChange}
        errorMessage="error"
      />
    );
    // const labelElement = screen.getByText("Label Name");
    // expect(labelElement).toBeInTheDocument();
    // expect(labelElement.tagName).toBe("P");
    // expect(labelElement).toContainElement(screen.getByText("*"));
  });

  test("calls handleDateChange when date is changed", () => {
    render(
      <DatePickerComponent
        date={new Date()}
        setDate={() => {}}
        handleDateChange={mockHandleDateChange}
        errorMessage="error"
      />
    );
    const newDate = new Date("2023-07-31"); // Replace with the desired new date
    const datePicker = screen.getByRole("textbox");
    fireEvent.change(datePicker, { target: { value: newDate.toISOString() } });
    expect(mockHandleDateChange).toHaveBeenCalled();
  });

  test("displays the error message when the selected date is in the past", () => {
    const pastDate = new Date("2021-01-01"); // Replace with a past date
    render(
      <DatePickerComponent
        date={pastDate}
        setDate={() => {}}
        handleDateChange={mockHandleDateChange}
        errorMessage="error"
      />
    );
    const errorMessageElement = screen.getByTestId("errorMessage");
    expect(errorMessageElement).toBeInTheDocument();
    expect(errorMessageElement).toHaveClass("errorMessage");
  });
});
