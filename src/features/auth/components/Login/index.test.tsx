import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./index";
import { describe, it, expect, vi } from "vitest";

describe("LoginForm", () => {
  describe("Username field", () => {
    const mockSwitch = vi.fn();
    it("renders the username label and input", () => {
      render(<LoginForm onSwitch={mockSwitch}></LoginForm>);
      const input = screen.getByLabelText(/username/i);
      expect(input).toBeInTheDocument();
      expect(input).toHaveAttribute("type", "text");
      expect(input).toHaveAttribute("id", "username");
    });
    it("allows the user to type in username", () => {});
    it("shows error if username is empty", () => {});
  });

  describe("Password field", () => {
    it("render the password label and input", () => {});

    it("allows the user to type in password", () => {});

    it("show error if the password doesnot satisfy the convention", () => {});
  });

  describe("Login button", () => {
    it("render the login button", () => {});

    it("send the request for authenticatio with the backend", () => {});

    it("");
  });
});
