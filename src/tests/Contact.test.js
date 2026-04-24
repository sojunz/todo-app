import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../ContactPage";

describe("ContactPage Form Tests", () => {
  test("shows alert when fields are empty", () => {
    render(<Contact />);

    // alert mock
    window.alert = jest.fn();

    fireEvent.click(screen.getByText("Send"));

    expect(window.alert).toHaveBeenCalledWith("Please fill in all fields.");
  });

  test("submits form when all fields are filled", () => {
    render(<Contact />);

    // mock window.location.href
    delete window.location;
    window.location = { href: "" };

    fireEvent.change(screen.getByPlaceholderText("Your name"), {
      target: { value: "SoHyung" }
    });
    fireEvent.change(screen.getByPlaceholderText("you@example.com"), {
      target: { value: "test@example.com" }
    });
    fireEvent.change(
      screen.getByPlaceholderText("Tell me a little about your idea…"),
      { target: { value: "Hello!" } }
    );

    fireEvent.click(screen.getByText("Send"));

    expect(window.location.href).toContain("mailto:");
  });
});
