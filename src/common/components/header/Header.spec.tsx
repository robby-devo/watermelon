import { render, fireEvent, screen } from "@testing-library/react";
import Header from "./Header";

describe("Header Component", () => {
  const mockCartValue = 3;

  test("should render the cart value", () => {
    render(<Header cartValue={mockCartValue} />);
    const cartValue = screen.getByTestId("cartValue");
    expect(cartValue).toBeInTheDocument();
    expect(cartValue).toHaveTextContent(mockCartValue as any);
  });

  test("should render the input with the provided placeholder", () => {
    render(<Header cartValue={mockCartValue} />);
    const searchInput = screen.getByPlaceholderText(
      "Search for your supply soulmate!"
    );
    expect(searchInput).toBeInTheDocument();
  });

  test("should show the wishlist icon on hover", () => {
    render(<Header cartValue={mockCartValue} />);
    const wishlistIcon = screen.getByAltText("wishlist-icon");

    fireEvent.mouseOver(wishlistIcon);

    const wishlistHoverIcon = screen.getByAltText("wishlist-icon-hover");
    expect(wishlistHoverIcon).toBeInTheDocument();
  });

  test("should show the cart icon on hover", () => {
    render(<Header cartValue={mockCartValue} />);
    const cartIcon = screen.getByAltText("cart-icon");
    fireEvent.mouseOver(cartIcon);
    const cartHoverIcon = screen.getByAltText("cart-icon-hover");
    expect(cartHoverIcon).toBeInTheDocument();
  });

  test("should not show the wishlist icon when not hovered", () => {
    render(<Header cartValue={mockCartValue} />);
    const wishlistIcon = screen.getByAltText("wishlist-icon");

    fireEvent.mouseLeave(wishlistIcon);

    const wishlistHoverIcon = screen.queryByAltText("wishlist-icon-hover");
    expect(wishlistHoverIcon).toBeNull();
  });

  test("should not show the cart icon when not hovered", () => {
    render(<Header cartValue={mockCartValue} />);
    const cartIcon = screen.getByAltText("cart-icon");

    fireEvent.mouseLeave(cartIcon);

    const cartHoverIcon = screen.queryByAltText("cart-icon-hover");
    expect(cartHoverIcon).toBeNull();
  });
  test("country dropdown handle change", () => {
    render(<Header cartValue={mockCartValue} />);
    let dropdown = screen.getByText("Al-Baraha");
    fireEvent.keyDown(dropdown, { key: "Enter" });

    let option = screen.getByText("India");
    fireEvent.click(option);
    expect(dropdown).toHaveTextContent("India");
    fireEvent.keyDown(dropdown, { key: "Enter" });
    option = screen.getByText("USA");
    fireEvent.click(option);
    fireEvent.keyDown(dropdown, { key: "Enter" });
    expect(dropdown).toHaveTextContent("USA");
  });
  test("categories dropdown handle change", () => {
    render(<Header cartValue={mockCartValue} />);
    let dropdown = screen.getByText("All Categories");
    fireEvent.keyDown(dropdown, { key: "Enter" });

    let option = screen.getByText("Fruits");
    fireEvent.click(option);
    expect(dropdown).toHaveTextContent("Fruits");
    fireEvent.keyDown(dropdown, { key: "Enter" });
    option = screen.getByText("Vegetables");
    fireEvent.click(option);
    fireEvent.keyDown(dropdown, { key: "Enter" });
    expect(dropdown).toHaveTextContent("Vegetables");
  });
});
