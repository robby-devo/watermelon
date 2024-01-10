import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import ProductCardWithCart from "./ProductCardWithCart";

describe("ProductCardWithCart", () => {
  const mockItem = {
    productName: "Test Product",
    productImage: "test_image.png",
    outOfstockStatus: false,
    offerPercentage: 10,
    supllierType: "online",
    delivered: false,
    TBC: "Test TBC",
    countryFlag: "test_flag.png",
    countryName: "Test Country",
    offerPrice: 50,
    actualPrice: 100,
    supplierName: "Test Supplier",
    quantity: 5,
  };

  test("renders product card with correct values", () => {
    render(<ProductCardWithCart {...mockItem} />);
    expect(screen.getByText("Test Product")).toBeInTheDocument();
    expect(screen.getByAltText("productImage")).toHaveAttribute(
      "src",
      "test_image.png"
    );
    expect(screen.getByText("Test Country")).toBeInTheDocument();
    expect(screen.getByText("50")).toBeInTheDocument();
    expect(screen.getByText("100")).toBeInTheDocument();
    expect(screen.getByText("Test Supplier")).toBeInTheDocument();
  });

  test("toggle favorite when the heart icon is clicked", () => {
    render(<ProductCardWithCart {...mockItem} />);

    const favoriteIcon = screen.getByTestId("favourite-icon");
    fireEvent.click(favoriteIcon);
    expect(screen.getByAltText("heart-filled")).toBeInTheDocument();
    fireEvent.click(favoriteIcon);
    expect(screen.getByAltText("heart")).toBeInTheDocument();
  });

  test("shows out of stock button when outOfstockStatus is true", () => {
    render(<ProductCardWithCart {...mockItem} outOfstockStatus={true} />);

    expect(screen.getByText("Out of Stock")).toBeInTheDocument();
  });
  test("product image not found", () => {
    render(<ProductCardWithCart {...mockItem} productImage={undefined} />);
    expect(screen.getByAltText("productImage")).toHaveAttribute(
      "src",
      "placeholder.svg"
    );
  });
  test("no offer price is present", () => {
    render(<ProductCardWithCart {...mockItem} offerPrice={undefined} />);
    expect(screen.getByTestId("actual-price")).toHaveTextContent("100");
  });
  test("should call handleDropdownChange with the correct value on Dropdown change", () => {
    render(
      <ProductCardWithCart
        productName="Test Product"
        productImage="test.png"
        offerPercentage={10}
        supllierType="online"
        delivered={false}
        countryFlag="flag.png"
        countryName="Test Country"
        offerPrice={20}
        actualPrice={25}
        supplierName="Test Supplier"
        quantity={5}
      />
    );

    const dropdown = screen.getByTestId("dropdown-bundle-options");
    fireEvent.click(dropdown);
    // eslint-disable-next-line testing-library/no-node-access
    const input = dropdown.querySelector("input");
    expect(dropdown).toBeInTheDocument();
    if (input) {
      console.log(input, "dropdowndss");
      fireEvent.change(input, { target: { value: "4" } });
    }
    expect(input).toHaveValue("4");
  });
});
