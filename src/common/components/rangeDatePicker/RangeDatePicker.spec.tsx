import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import RangeDatePicker from "./RangeDatePicker";
import DatePickerComponent from "../datePicker/DatePicker";

describe("RangeDatePicker Component", () => {
  const mockHandleStartDateChange = jest.fn();
  const mockHandleEndDateChange = jest.fn();
  it("should render start label and end label", () => {
    render(
      <RangeDatePicker
        startlabel="Start Date"
        endlabel="End Date"
        startDate={new Date()}
        endDate={new Date()}
        setStartDate={() => {}}
        setEndDate={() => {}}
        handleStartDateChange={() => {}}
        handleEndDateChange={() => {}}
      />
    );

    expect(screen.getByTestId("startLabel")).toBeInTheDocument();
    expect(screen.getByTestId("endLabel")).toBeInTheDocument();
  });

  it("should show error message when end date is earlier than start date", () => {
    render(
      <RangeDatePicker
        startlabel="Start Date"
        endlabel="End Date"
        startDate={new Date()}
        endDate={new Date()}
        setStartDate={() => {}}
        setEndDate={() => {}}
        handleStartDateChange={() => {}}
        handleEndDateChange={() => {}}
        errorMessage="End date cannot be earlier than start date"
        isInvalidDateRange={true}
      />
    );
    const errorElement = screen.getByTestId("errorMessageRange");
    expect(errorElement).toBeInTheDocument();
    expect(screen.getByTestId("endLabel")).toHaveClass("error");
    expect(screen.getByTestId("startLabel")).not.toHaveClass("label");
  });

  it("should not show error message when end date is equal to or later than start date", () => {
    render(
      <RangeDatePicker
        startlabel="Start Date"
        endlabel="End Date"
        startDate={new Date()}
        endDate={new Date()}
        setStartDate={() => {}}
        setEndDate={() => {}}
        handleStartDateChange={() => {}}
        handleEndDateChange={() => {}}
        errorMessage="End date cannot be earlier than start date"
        isInvalidDateRange={false}
      />
    );

    expect(screen.queryByTestId("errorMessageRange")).not.toBeInTheDocument();
    expect(screen.getByTestId("endLabel")).toHaveClass("label");
    expect(screen.getByTestId("startLabel")).toHaveClass("label");
  });

  it("should update start date when DatePickerComponent is changed", () => {
    // const startDate = new Date("2023-07-20");
    // const setStartDate = jest.fn();
    // render(
    //   <RangeDatePicker
    //     startlabel="Start Date"
    //     endlabel="End Date"
    //     startDate={startDate}
    //     endDate={new Date()}
    //     setStartDate={setStartDate}
    //     setEndDate={() => {}}
    //     handleStartDateChange={() => {}}
    //     handleEndDateChange={() => {}}
    //   />
    // );
    render(
      <DatePickerComponent
        date={new Date()}
        setDate={() => {}}
        handleDateChange={mockHandleStartDateChange}
        errorMessage="error"
      />
    );
    const newDate = new Date("2023-07-31");
    const datePicker = screen.getByRole("textbox");
    fireEvent.change(datePicker, { target: { value: newDate } });
    expect(mockHandleStartDateChange).toHaveBeenCalledTimes(1);
    expect(mockHandleEndDateChange).toHaveBeenCalledTimes(0);
  });
});
