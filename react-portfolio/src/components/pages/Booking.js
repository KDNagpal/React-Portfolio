// src/components/Booking.js

import React, { useState } from 'react';


const Booking = () => {
  const [booking, setBooking] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    dropoffDate: '',
    carType: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBooking({ ...booking, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Booking data:', booking);
    // Add your API call or other logic to handle the booking data
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="pickupLocation">Pick-up Location:</label>
      <input
        type="text"
        id="pickupLocation"
        name="pickupLocation"
        value={booking.pickupLocation}
        onChange={handleInputChange}
      />

      <label htmlFor="dropoffLocation">Drop-off Location:</label>
      <input
        type="text"
        id="dropoffLocation"
        name="dropoffLocation"
        value={booking.dropoffLocation}
        onChange={handleInputChange}
      />

      <label htmlFor="pickupDate">Pick-up Date:</label>
      <input
        type="date"
        id="pickupDate"
        name="pickupDate"
        value={booking.pickupDate}
        onChange={handleInputChange}
      />

      <label htmlFor="dropoffDate">Drop-off Date:</label>
      <input
        type="date"
        id="dropoffDate"
        name="dropoffDate"
        value={booking.dropoffDate}
        onChange={handleInputChange}
      />

      <label htmlFor="carType">Car Type:</label>
      <select
        id="carType"
        name="carType"
        value={booking.carType}
        onChange={handleInputChange}
      >
        <option value="">Select Car Type</option>
        <option value="economy">Economy</option>
        <option value="compact">Compact</option>
        <option value="standard">Standard</option>
        <option value="fullSize">Full-Size</option>
        <option value="luxury">Luxury</option>
      </select>

      <button type="submit">Book Car</button>
      
    </form>

  );
};

export default Booking;
