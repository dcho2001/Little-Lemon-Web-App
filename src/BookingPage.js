import React from 'react';
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';

/* global submitAPI */

function BookingPage() {
    const navigate = useNavigate();

    const handleFormSubmit = async (formData) => {
        const result = await submitAPI(formData);
        if (result) {
            navigate('/confirmed');
        } else {
            alert('Failed to submit booking.');
        }
    };

    return (
        <div className="booking-table">
            <h1>Reservations</h1>
            <h3>Fill out the form below to book your reservation.</h3>
            <BookingForm onFormSubmit={handleFormSubmit} />
        </div>
    );
}

export default BookingPage;
