import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import SideNav from "./SideNav";

describe("SideNav", () => {
  it("renders the component with the buyer navigation links when userType is 'buyer'", () => {
    render(<SideNav userType="buyer" />);

    const avatarImg = screen.getByTestId("avatar");
    expect(avatarImg).toBeInTheDocument();

    const username = screen.getByText("Aadila Hussain");
    expect(username).toBeInTheDocument();

    const dashboardLink = screen.getByTestId("nav-link-dashboard");
    expect(dashboardLink).toBeInTheDocument();
    fireEvent.click(dashboardLink);
    expect(dashboardLink.classList).toContain("selected");

    const marketplaceLink = screen.getByTestId("nav-link-marketplace");
    expect(marketplaceLink).toBeInTheDocument();
    fireEvent.click(marketplaceLink);
    expect(marketplaceLink.classList).toContain("selected");
  });

  it("renders the component with the supplier navigation links when userType is 'supplier'", () => {
    render(<SideNav userType="supplier" />);

    const avatarImg = screen.getByTestId("avatar");
    expect(avatarImg).toBeInTheDocument();

    const username = screen.getByText("Aadila Hussain");
    expect(username).toBeInTheDocument();

    const dashboardLink = screen.getByTestId("nav-link-dashboard");
    expect(dashboardLink).toBeInTheDocument();
    fireEvent.click(dashboardLink);
    expect(dashboardLink.classList).toContain("selected");

    const ordersLink = screen.getByTestId("nav-link-orders");
    expect(ordersLink).toBeInTheDocument();
    fireEvent.click(ordersLink);
    expect(ordersLink.classList).toContain("selected");
  });

  it("displays a tooltip when the 'More' link is clicked", () => {
    render(<SideNav userType="buyer" />);

    const moreLink = screen.getByTestId("more-btn");
    fireEvent.click(moreLink);
    const tooltip = screen.queryByText("View profile");
    expect(tooltip).toBeInTheDocument();

    const viewProfileLink = screen.getByTestId("more-link-view-profile");
    expect(viewProfileLink).toBeInTheDocument();
    fireEvent.click(viewProfileLink);
  });
});
