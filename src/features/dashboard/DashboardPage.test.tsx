import { screen, render } from "@testing-library/react";
import UserEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import { DashboardPage } from "./DashboardPage";

describe("DashboardPage Test", () => {
  it("Dashboard title", () => {
    render(<DashboardPage />);
    const title = screen.getByText(/dashboard/i);
    expect(title.tagName).toBe("H1");
  });
});
