import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect"; // Import jest-dom for additional matchers
import Drawer from "./Drawer";

describe("Drawer Component", () => {
  test("should render the modal with children when open prop is true", () => {
    render(
      <Drawer open={true} title="Test Modal" width={400}>
        <div>Modal Content</div>
      </Drawer>
    );
    const modalContent = screen.getByText("Modal Content");
    expect(modalContent).toBeInTheDocument();
  });

  test("should not render the modal with children when open prop is false", () => {
    render(
      <Drawer
        open={false}
        title="Test Modal"
        width={400}
        sx={[]}
        position="right"
      >
        {}
      </Drawer>
    );
    const modalContent = screen.queryByText("Modal Content");
    expect(modalContent).not.toBeInTheDocument();
  });
  test("should  render the modal with children when open prop is false", () => {
    render(
      <Drawer
        open={false}
        title="Test Modal"
        width={400}
        sx={[]}
        position="left"
      >
        {}
      </Drawer>
    );
    const modalContent = screen.queryByText("Modal Content");
    expect(modalContent).not.toBeInTheDocument();
  });
  test("should  render the modal with children when open prop is true", () => {
    render(
      <Drawer
        open={true}
        title="Test Modal"
        width={400}
        sx={[]}
        position="right"
      >
        <div>Modal Content</div>
      </Drawer>
    );
    const modalContent = screen.queryByText("Modal Content");
    expect(modalContent).toBeInTheDocument();
  });
});
