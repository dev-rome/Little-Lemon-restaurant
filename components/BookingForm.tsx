import React from "react";

const BookingForm = () => {
  return (
    <form className="grid max-w-xs mx-auto gap-5 py-24">
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        className="border border-gray-300 rounded-md p-2"
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" className="border border-gray-300 rounded-md p-2">
        <option>17:00</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
        <option>21:00</option>
        <option>22:00</option>
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        className="border border-gray-300 rounded-md p-2"
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" className="border border-gray-300 rounded-md p-2">
        <option>Birthday</option>
        <option>Anniversary</option>
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
