import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import PaginationComponent from "./Pagination";

describe("renders pagination component", () => {
  it("renders pagination component", () => {
    render(
      <PaginationComponent count={10} page={1} handlePagination={() => {}} />
    );
    expect(screen.getByTestId("pagination")).toBeInTheDocument();
  });
  it("check if pagination component has 10 pages", () => {
    render(
      <PaginationComponent count={10} page={1} handlePagination={() => {}} />
    );
    expect(screen.getByTestId("pagination")).toHaveTextContent("10");
  });
  it("check if pagination component has 1 page", () => {
    render(
      <PaginationComponent count={1} page={1} handlePagination={() => {}} />
    );
    expect(screen.getByTestId("pagination")).toHaveTextContent("1");
  });
  it("check if pagination component has page greater than 0", () => {
    render(
      <PaginationComponent count={0} page={1} handlePagination={() => {}} />
    );
    expect(screen.getByTestId("pagination")).not.toHaveTextContent("0");
  });
  it("click on next and previous button", () => {
    render(
      <PaginationComponent count={10} page={1} handlePagination={() => {}} />
    );
    const nextButton = screen.getByTestId("next-button");
    const previousButton = screen.getByTestId("previous-button");
    expect(nextButton).toBeInTheDocument();
    expect(previousButton).toBeInTheDocument();
    fireEvent.click(nextButton);
    fireEvent.click(previousButton);
  });
  it("click on first and last button", () => {
    render(
      <PaginationComponent
        count={10}
        page={1}
        handlePagination={() => {}}
        showFirstButton={true}
        showLastButton={true}
      />
    );
    const firstButton = screen.getByTestId("first-button");
    const lastButton = screen.getByTestId("last-button");
    expect(firstButton).toBeInTheDocument();
    expect(lastButton).toBeInTheDocument();
    fireEvent.click(firstButton);
    fireEvent.click(lastButton);
  });
});
