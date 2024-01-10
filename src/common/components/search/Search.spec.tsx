import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search Component", () => {
  const mockOptions = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  it("should render the input with the provided placeholder", () => {
    const placeholder = "Enter your search";
    render(<Search placeholder={placeholder} />);
    const inputElement = screen.getByPlaceholderText(placeholder);
    expect(inputElement).toBeInTheDocument();
  });

  it("should render the dropdown when showDropdown prop is true", () => {
    render(<Search showDropdown={true} placeholder="placeholder" />);
    const dropdownContainer = screen.getByTestId("searchDropdown");
    expect(dropdownContainer).toBeInTheDocument();
  });

  it("should not render the dropdown when showDropdown prop is false", () => {
    render(<Search showDropdown={false} placeholder="placeholder" />);
    const dropdownContainer = screen.queryByTestId("searchDropdown");
    expect(dropdownContainer).toBeNull();
  });

  it("should call handleCategoryDropdownChange when dropdown value changes", () => {
    const handleCategoryDropdownChange = jest.fn();
    render(
      <Search
        placeholder="placeholder"
        showDropdown={true}
        searchDropdownOptions={mockOptions}
        handleCategoryDropdownChange={handleCategoryDropdownChange}
      />
    );

    const dropdownElement = screen.getByTestId("searchDropdown");
    // eslint-disable-next-line testing-library/no-node-access
    const input = dropdownElement.querySelector("input");
    fireEvent.change(input!, {
      target: { value: "option2" },
    });
    expect(handleCategoryDropdownChange).toHaveBeenCalledWith({
      label: "Option 2",
      value: "option2",
    });
  });
});
