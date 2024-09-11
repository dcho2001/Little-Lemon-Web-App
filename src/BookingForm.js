import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* global submitAPI */

const BookingForm = () => {
    const [formData, setFormData] = useState({});
    const navigate = useNavigate();

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        console.log('Form data:', formData); // Add logging here
        try {
            const result = await submitAPI(formData); // Simulates sending data to the server
            if (result) {
                localStorage.setItem('latestBooking', JSON.stringify(formData)); // Storing booking data in local storage
                navigate('/confirmed');
            } else {
                alert('Submission was unsuccessful. Please try again.');
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error in submission.');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="booking-form">
            <h3>Reservation Form</h3>
            <label htmlFor="name">Your Name:</label>
            <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="date">Date of Reservation:</label>
            <input
                id="date"
                name="date"
                type="date"
                className="form-control"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <label htmlFor="time">Time of Reservation:</label>
            <select
                id="time"
                name="time"
                className="form-control"
                value={formData.time}
                onChange={handleChange}
                required
            >
                <option value="">Select a time</option>
                <option value="18:00">18:00</option>
                <option value="20:00">20:00</option>
            </select>
            <label htmlFor="guests">Number of Guests:</label>
            <input
                id="guests"
                name="guests"
                type="number"
                className="form-control"
                min="1"
                max="8"
                value={formData.guests}
                onChange={handleChange}
                required
            />
            <label htmlFor="occasion">Occasion:</label>
            <select
                id="occasion"
                name="occasion"
                className="form-control"
                value={formData.occasion}
                onChange={handleChange}
                required
            >
                <option value="">Select an occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
                <option value="business_meeting">Business Meeting</option>
                <option value="other">Other</option>
            </select>
            <button className="booking-page-reserve-button" type="submit">Reserve</button>
        </form>
    );
}

export default BookingForm;
