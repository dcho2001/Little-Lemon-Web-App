import React from 'react';
import { render } from '@testing-library/react';
import UserSettings from './UserSettings';

// Mocking localStorage
const mockLocalStorage = (settings) => {
    Storage.prototype.getItem = jest.fn(() => JSON.stringify(settings));
};

describe('UserSettings', () => {
    it('loads settings from local storage on start', () => {
        // Setting up mock local storage with a dark theme setting
        mockLocalStorage({ theme: 'dark' });

        const { getByText } = render(<UserSettings />);
        // Asserting that the theme displayed is 'dark', as expected from local storage
        expect(getByText(/theme: dark/i)).toBeInTheDocument();
        // Verifying that localStorage.getItem was called with the correct key
        expect(localStorage.getItem).toHaveBeenCalledWith('userSettings');
    });

    it('displays default settings when local storage is empty', () => {
        // Setting up mock local storage to return null (i.e., no settings saved)
        Storage.prototype.getItem = jest.fn(() => null);

        const { getByText } = render(<UserSettings />);
        // Asserting that the default theme is displayed
        expect(getByText(/theme: light/i)).toBeInTheDocument();
    });
});
