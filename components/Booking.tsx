"use client";

import React, { useReducer } from "react";
import { useRouter } from "next/navigation";

import BookingForm from "@/components/BookingForm";
import { fetchAPI, submitAPI } from "..//utils/utils";

export const initializeState = (): string[] => {
  return fetchAPI(new Date());
};

export const updateTimes = (state: string[], action: any) => {
  switch (action.type) {
    case "INITIALIZE":
      return initializeState();
    case "GET DATE":
      return fetchAPI(action.data);
    default:
      return state;
  }
};

const Booking = () => {
    const [availableTimes, dispatch] = useReducer(updateTimes, initializeState());

    const router = useRouter();
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      if (submitAPI(e.target)) {
        router.push("/confirm-booking");
      }
    };

    return (
        <BookingForm
          availableTimes={availableTimes}
          dispatch={dispatch}
          handleSubmit={handleSubmit}
        />
      );
}

export default Booking