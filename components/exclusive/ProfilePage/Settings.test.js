import React from "react";
import { Settings } from './Settings'
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('settings tests', () => {
    beforeEach(() => render(<Settings/>))
        it('check the settings component has rendered', () => {
            expect(screen.getByTestId('myAccount')).toBeInTheDocument() 
        })
        it('dropdown expands when clicked', async () => {
            let dropdown = screen.getByTestId('myAccount')
            expect(screen.queryByTestId('dropDownContentContainer')).toBeFalsy()
            userEvent.click(dropdown)
            expect(await screen.findByText('Log Out')).toBeVisible()

    })
})