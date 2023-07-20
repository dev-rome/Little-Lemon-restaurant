import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { updateTimes, initializeState } from "../app/booking-page/page";
import { FormEvent } from "react";
import BookingForm from "../components/BookingForm";

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

describe("initializeState", () => {
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

describe("BookingForm HTML5 Validation", () => {
  test("Date input should have the required attribute", () => {
    render(
      <BookingForm
        availableTimes={[]}
        handleSubmit={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const dateInput = screen.getByLabelText("Choose date");
    expect(dateInput).toHaveAttribute("required");
  });

  test("Time select should have the required attribute", () => {
    render(
      <BookingForm
        availableTimes={[]}
        handleSubmit={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toHaveAttribute("required");
  });

  test("Number of guests input should have the required, min, and max attributes", () => {
    render(
      <BookingForm
        availableTimes={[]}
        handleSubmit={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const guestsInput = screen.getByLabelText("Number of guests");
    expect(guestsInput).toHaveAttribute("required");
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("Occasion select should have the required attribute", () => {
    render(
      <BookingForm
        availableTimes={[]}
        handleSubmit={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const occasionSelect = screen.getByLabelText("Occasion");
    expect(occasionSelect).toHaveAttribute("required");
  });
});

describe("BookingForm JavaScript Validation", () => {
  test("Submit button should be disabled when the form is invalid", () => {
    render(
      <BookingForm
        availableTimes={[]}
        handleSubmit={function (e: FormEvent<HTMLFormElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const submitButton = screen.getByText("Make Your reservation");
    expect(submitButton).toBeDisabled();
  });

  test("Submit button should be enabled when the form is valid", () => {
    render(
      <BookingForm
        availableTimes={["10:00", "11:00", "12:00", "13:00"]}
        handleSubmit={() => {}}
      />
    );
    const dateInput = screen.getByLabelText("Choose date");
    const timeSelect = screen.getByLabelText("Choose time");
    const guestsInput = screen.getByLabelText("Number of guests");
    const occasionSelect = screen.getByLabelText("Occasion");
    const submitButton = screen.getByText("Make Your reservation");

    // Simulate user input by changing form values
    fireEvent.change(dateInput, { target: { value: "2023-07-20" } });
    fireEvent.change(timeSelect, { target: { value: "10:00" } });
    fireEvent.change(guestsInput, { target: { value: "5" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    // Verify that the submit button is enabled
    expect(submitButton).not.toBeDisabled();
  });
});
