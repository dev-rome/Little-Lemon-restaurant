"use client";

import React, { useReducer } from "react";

import BookingForm from "@/components/BookingForm";

const updateTimes = (state: string[], action: { type: string }) => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

const BookingPage: React.FC = () => {
  const initialState: string[] = [];
  const [availableTimes, dispatch] = useReducer(updateTimes, initialState);

  return <BookingForm availableTimes={availableTimes} dispatch={dispatch} />;
};

export default BookingPage;
