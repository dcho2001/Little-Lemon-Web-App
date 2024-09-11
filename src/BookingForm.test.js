import React from 'react';
import { render, fireEvent, screen, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';

describe('BookingForm Component', () => {
  it('should call the submit function when the form is submitted with valid data', async () => {
    await act(async () => {
      render(
        <MemoryRouter>
          <BookingForm />
        </MemoryRouter>
      );
    });

    // Simulating user input
    const nameInput = screen.getByLabelText(/your name/i);
    console.log(nameInput);
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    const dateInput = screen.getByLabelText(/date/i);
    console.log(dateInput);
    fireEvent.change(dateInput, { target: { value: '2024-10-01' } });

    const guestsInput = screen.getByLabelText(/number of guests/i);
    console.log(guestsInput);
    fireEvent.change(guestsInput, { target: { value: '4' } });

    const occasionInput = screen.getByLabelText(/occasion/i);
    console.log(occasionInput);
    fireEvent.change(occasionInput, { target: { value: 'Birthday' } });


    // Simulating form submission
    await act(async () => {
      const submitButton = screen.getByRole('button', { name: /reserve/i });
      console.log(submitButton); // Add this line
      fireEvent.click(submitButton);
    });

  });
});
