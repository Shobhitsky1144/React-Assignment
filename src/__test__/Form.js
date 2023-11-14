import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Form from "../components/Form";

describe("Form component", () => {
  test("renders Form component", () => {
    render(<Form />);
    expect(
      screen.getByText("Sign up for Sign up for exclusive access.")
    ).toBeInTheDocument();
  });

  test("handles email input", () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText("Your email address");
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  test("submits the form with a valid email", async () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText("Your email address");
    const submitButton = screen.getByText("Get started");

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.click(submitButton);

    // Check if the form submission is successful
    await waitFor(() => {
      expect(window.location.href).toBe("https://app.loch.one/welcome.");
    });
  });

  test("displays an error message for an invalid email", async () => {
    render(<Form />);
    const emailInput = screen.getByPlaceholderText("Your email address");
    const submitButton = screen.getByText("Get started");

    fireEvent.change(emailInput, { target: { value: "invalid_email" } });
    fireEvent.click(submitButton);

    // Check if the error message is displayed
    expect(
      screen.getByText("Please enter a valid email address")
    ).toBeInTheDocument();
  });
});
