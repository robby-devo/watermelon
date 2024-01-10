import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Dropdown from "./dropdown";

describe("Dropdown", () => {
    const options = [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
    ];

    test("renders correctly", () => {
        render(
            <Dropdown
                label="Select an option"
                options={options}
                defaultLabel="Select"
                minWidth="200px"
                isDropdownOutlineRequired={true}
                onChange={() => { }}
                overlayWidth="300px"
                id="dropdown"
                errorMessage=""
            />
        );

        const label = screen.getByText("Select an option");
        expect(label).toBeDefined();
    });

    test("renders isCountryList correctly", () => {
        render(
            <Dropdown
                label="Select an option"
                options={options}
                defaultLabel="Select"
                minWidth="200px"
                isDropdownOutlineRequired={true}
                onChange={() => { }}
                overlayWidth="300px"
                id="dropdown"
                errorMessage=""
                isCountryList={true}
            />
        );

        const label = screen.getByText("Select an option");
        expect(label).toBeDefined();
    });

    test("displays selected option", () => {
        render(
            <Dropdown
                label="Select an option"
                options={options}
                defaultLabel="Select"
                minWidth="200px"
                selectedValue={options[1]}
                isDropdownOutlineRequired={true}
                onChange={() => { }}
                overlayWidth="300px"
                id="dropdown"
                errorMessage=""
            />
        );

        const selectedOption = screen.getByText("Option 2");
        expect(selectedOption).toBeDefined();
    });

    test("calls onChange function when an option is selected", async () => {
        const onChange = jest.fn();

        render(
            <Dropdown
                label="Select an option"
                options={options}
                defaultLabel="Select"
                minWidth="200px"
                selectedValue={options[0]}
                isDropdownOutlineRequired={false}
                onChange={onChange}
                overlayWidth="300px"
                id="dropdown"
                errorMessage=""
            />
        );

        let dropdown = screen.getByText("Option 1");
        fireEvent.keyDown(dropdown, { key: 'Enter' });

        // select option
        let option = screen.getByText("Option 2");
        fireEvent.click(option);
        expect(onChange).toHaveBeenCalled();

        dropdown = screen.getByText("Option 2");
        fireEvent.keyDown(dropdown, { key: 'Enter' });

        option = screen.getByText("Option 3");
        expect(option).toBeTruthy();

    });

    test("displays error message when errorMessage prop is provided", () => {
        render(
            <Dropdown
                label="Select an option"
                options={options}
                defaultLabel="Select"
                minWidth="200px"
                selectedValue={options[0]}
                isDropdownOutlineRequired={true}
                onChange={() => { }}
                overlayWidth="300px"
                id="dropdown"
                errorMessage="Invalid option"
            />
        );

        const errorMessage = screen.getByText("Invalid option");
        expect(errorMessage).toBeDefined();
    });
});
