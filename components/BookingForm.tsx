"use client";

import React, { useState, useEffect } from "react";

import { BookingFormProps } from "@/types";
import Button from "./Button";

const BookingForm = ({
  availableTimes,
  dispatch,
  handleSubmit,
}: BookingFormProps) => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [numberOfGuests, setNumberOfGuests] = useState(1);
  const [selectedOccasion, setSelectedOccasion] = useState("Birthday");
  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(() => {
    setFormIsValid(
      selectedDate !== "" &&
        selectedTime !== "" &&
        numberOfGuests >= 1 &&
        numberOfGuests <= 10
    );
  }, [selectedDate, selectedTime, numberOfGuests]);

  const handleDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDate(e.target.value);
    if (dispatch) {
      dispatch({ type: "GET DATE", data: new Date(e.target.value) });
    }
  };

  const handleTimeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedTime(e.target.value);
  };

  const handleGuestsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNumberOfGuests(parseInt(e.target.value));
  };

  const handleOccasionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOccasion(e.target.value);
  };

  return (
    <form className="grid max-w-xs mx-auto gap-5 py-24" onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        className="border border-gray-300 rounded-md p-2"
        value={selectedDate}
        onChange={handleDateChange}
        required
      />

      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        className="border border-gray-300 rounded-md p-2"
        value={selectedTime}
        onChange={handleTimeChange}
        required
      >
        {availableTimes.map((time) => (
          <option key={time} value={time}>
            {time}
          </option>
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
        value={numberOfGuests}
        onChange={handleGuestsChange}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        className="border border-gray-300 rounded-md p-2"
        value={selectedOccasion}
        onChange={handleOccasionChange}
        required
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <Button
        type="submit"
        className={`px-4 py-2 rounded-md cursor-pointer ${
          !formIsValid
            ? "bg-gray-400 text-white"
            : "bg-primary-darkGreen text-white"
        }`}
        disabled={!formIsValid}
        ariaLabel="Submit form"
      >
        Make Your reservation
      </Button>
    </form>
  );
};

export default BookingForm;
