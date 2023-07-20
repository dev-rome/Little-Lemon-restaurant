import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { updateTimes, initializeState } from "../app/booking-page/page";

jest.mock("../utils/utils", () => ({
  fetchAPI: jest.fn(() =>
    Promise.resolve(["09:00", "10:00", "11:00", "12:00"])
  ),
}));

// Mock the fetchAPI function
jest.mock("../utils/utils", () => ({
  fetchAPI: jest.fn((date: Date) => {
    // Define the expected booking times for different dates
    const expectedBookingTimes = new Map<string, string[]>([
      ["2023-07-20", ["10:00", "11:00", "12:00", "13:00"]],
      ["2023-07-21", ["14:00", "15:00", "16:00", "17:00"]],
      // Add more expected times for other dates if needed
    ]);

    // Convert the input date to a string in the format 'YYYY-MM-DD'
    const dateString = `${date.getFullYear()}-${
      date.getMonth() + 1
    }-${date.getDate()}`;

    // Return the corresponding booking times for the given date
    return Promise.resolve(expectedBookingTimes.get(dateString) || []);
  }),
}));

describe("initializeTimes", () => {
  test("returns the fetched available booking times for the current date", async () => {
    // Set the current date to the date you expect the test to run
    const currentDate = new Date("2023-07-20");
    // Mock the Date constructor to return the current date in the test
    jest.spyOn(global, "Date").mockImplementation(() => currentDate);

    const initialState: string[] = []; // You can set an empty initial state for this test
    const newState = await initializeState();

    // Get the expected booking times for the current date
    const expectedBookingTimes = new Map<string, string[]>([
      ["2023-07-20", ["10:00", "11:00", "12:00", "13:00"]],
      // Add more expected times for other dates if needed
    ]);
    const dateString = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;

    expect(newState).toEqual(expectedBookingTimes.get(dateString) || []);
  });
});

describe("updateTimes", () => {
  test("returns the fetched available booking times", async () => {
    const preSelectedDate = new Date("2023-07-20");
    const initialState: string[] = []; // You can set an empty initial state for this test
    const newState = await updateTimes(initialState, {
      type: "GET DATE",
      data: preSelectedDate,
    });

    // Get the expected booking times for the pre-selected date
    const expectedBookingTimes = new Map<string, string[]>([
      ["2023-07-20", ["10:00", "11:00", "12:00", "13:00"]],
      // Add more expected times for other dates if needed
    ]);
    const dateString = `${preSelectedDate.getFullYear()}-${
      preSelectedDate.getMonth() + 1
    }-${preSelectedDate.getDate()}`;

    expect(newState).toEqual(expectedBookingTimes.get(dateString) || []);
  });
});
