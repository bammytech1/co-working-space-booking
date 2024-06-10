import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Desk from "./Desk";

beforeEach(() => {
  window.prompt = jest.fn().mockImplementation((message) => {
    if (message.includes("number of hours")) {
      return "2"; // Mock response for number of hours
    }
    if (message.includes("membership tier")) {
      return "premium"; // Mock response for membership tier
    }
  });
});

afterEach(() => {
  jest.restoreAllMocks();
});

test("books a desk", () => {
  render(<Desk />);
  const deskElement = screen.getAllByText(/Individual|Team/)[0];
  fireEvent.click(deskElement);
  expect(deskElement).toHaveClass("booked");
});

test("renders desks", () => {
  render(<Desk />);
  const deskElements = screen.getAllByText(/Individual|Team/);
  expect(deskElements.length).toBe(15);
});
