import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import MobileNumberField from './mobileNumberField';

// Mock constants.itemListTemp
jest.mock('../../../constants/constants', () => ({
    constants: {
        itemListTemp: [
            { label: 'country-1', value: 'country-1' },
            { label: 'country-2', value: 'country-2' },
            { label: 'country-3', value: 'country-3' },
            { label: 'country-4', value: 'country-4' },
        ],
    },
}));

describe('MobileNumberField', () => {
    it('renders without errors', () => {
        render(<MobileNumberField />);
        expect(screen.getByTestId('phone')).toBeInTheDocument();
    });

    it('displays the label', () => {
        render(<MobileNumberField label="Mobile Number" />);
        expect(screen.getByText('Mobile Number')).toBeInTheDocument();
    });

    it('changes the selected country', () => {
        render(<MobileNumberField />);
        const dropdown = screen.getByText('country-1');
        fireEvent.keyDown(dropdown, { key: 'Enter' });
        const option2 = screen.getByText('country-2');
        expect(option2).toBeTruthy();
    });

    it('changes the mobile number', () => {
        render(<MobileNumberField />);
        let phoneNumberInput: any = screen.getByTestId('phone');
        fireEvent.change(phoneNumberInput, { target: { value: '123456789' } });
        phoneNumberInput = screen.getByTestId('phone');
        expect(phoneNumberInput.value).toBe('123456789');
    });

    it('calls onMobileNumberChange when the mobile number is changed', () => {
        const onMobileNumberChangeMock = jest.fn();
        render(
            <MobileNumberField onMobileNumberChange={onMobileNumberChangeMock} />
        );
        const phoneNumberInput = screen.getByTestId('phone');
        fireEvent.change(phoneNumberInput, { target: { value: '123456789' } });
        expect(onMobileNumberChangeMock).toHaveBeenCalledTimes(1);
    });

    it('displays an error message', () => {
        render(
            <MobileNumberField errorMessage="Invalid phone number" />
        );
        expect(screen.getByText('Invalid phone number')).toBeInTheDocument();
    });
});
