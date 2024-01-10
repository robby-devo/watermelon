import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductCardCta from "./ProductCardCta";

describe("ProductCardCta", () => {
  test("should show showAddItemValue and setValue when Add button is clicked", () => {
    render(<ProductCardCta value={0} setValue={() => {}} />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    expect(screen.getByTestId("item-value-container")).toBeVisible();
  });
  test("should hide showAddItemValue and setValue when Add button is clicked", () => {
    const value = 1;
    render(<ProductCardCta value={value} setValue={() => {}} />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    expect(addButton).toHaveTextContent("Add");
  });

  test("should increase and decrease the value when +/- buttons are clicked", () => {
    const setValueMock = jest.fn();
    render(<ProductCardCta value={0} setValue={setValueMock} />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    const minusButton = screen.getByTestId("minus-button");
    const plusButton = screen.getByTestId("plus-button");
    fireEvent.click(plusButton);
    expect(setValueMock).toHaveBeenCalledWith(1);
    fireEvent.click(plusButton);
    expect(setValueMock).toHaveBeenCalledWith(1);
    fireEvent.click(minusButton);
    expect(setValueMock).toHaveBeenCalledWith(1);
    fireEvent.click(addButton);
  });
  test("should call onChange when input value is changed", () => {
    const setValueMock = jest.fn();
    render(<ProductCardCta value={0} setValue={setValueMock} />);
    const addButton = screen.getByTestId("add-button");
    fireEvent.click(addButton);
    const input = screen.getByTestId("item-value");
    fireEvent.change(input, { target: { value: 2 } });
    expect(setValueMock).toHaveBeenCalledWith(2);
  });
});
