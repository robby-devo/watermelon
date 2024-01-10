import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import UserSwitch from "./UserSwitch";

describe("UserSwitch", () => {
  it("should render the UserSwitch component with default selected tab", () => {
    render(<UserSwitch />);

    const buyerTab = screen.getByText("Buyer");
    const supplierTab = screen.getByText("Supplier");

    expect(buyerTab).toBeInTheDocument();
    expect(supplierTab).toBeInTheDocument();
    expect(buyerTab).toHaveClass("Joy-selected");
    expect(supplierTab).not.toHaveClass("Joy-selected");
  });

  it("should switch to Supplier tab when clicked", () => {
    render(<UserSwitch />);

    const supplierTab = screen.getByText("Supplier");

    fireEvent.click(supplierTab);

    expect(supplierTab).toHaveClass("Joy-selected");
  });

  it("should switch to Buyer tab when clicked", () => {
    render(<UserSwitch />);

    const supplierTab = screen.getByText("Supplier");
    const buyerTab = screen.getByText("Buyer");

    fireEvent.click(supplierTab);
    fireEvent.click(buyerTab);
    expect(buyerTab).toHaveClass("Joy-selected");
  });
});
