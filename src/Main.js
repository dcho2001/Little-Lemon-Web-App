import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUsPage from './AboutUsPage.js';
import MenuPage from './MenuPage';
import BookingPage from './BookingPage';
import OrderPage from './OrderPage';
import LoginPage from './LoginPage';
import ConfirmedBooking from './ConfirmedBooking';

function Main() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/about-us" element={<AboutUsPage />} />
      <Route path="/reservation" element={<BookingPage />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
      <Route path="/order" element={<OrderPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};

export default Main;