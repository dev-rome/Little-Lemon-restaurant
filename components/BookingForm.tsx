"use client";

import React, { useState } from "react";

const BookingForm = () => {
  const [date, setDate] = useState("");
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);
  const [guests, setGuests] = useState("");
  const [occasion, setOccasion] = useState("Birthday");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTime = e.target.value;
    setAvailableTimes([...availableTimes, selectedTime]);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedGuests = e.target.value;
    setGuests(selectedGuests);
  };

  const handleOccasionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOccasion = e.target.value;
    setOccasion(selectedOccasion);
  };

  return (
    <form className="grid max-w-xs mx-auto gap-5 py-24" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        className="border border-gray-300 rounded-md p-2"
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        className="border border-gray-300 rounded-md p-2"
        onChange={handleTimeChange}
      >
        {availableTimes.map((time, index) => (
          <option key={index}>{time}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        className="border border-gray-300 rounded-md p-2"
        value={guests}
        onChange={handleGuestsChange}
      />
      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        className="border border-gray-300 rounded-md p-2"
        value={occasion}
        onChange={handleOccasionChange}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <input
        type="submit"
        value="Make Your reservation"
        className="bg-primary-darkGreen text-white px-4 py-2 rounded-md cursor-pointer"
      />
    </form>
  );
};

export default BookingForm;
