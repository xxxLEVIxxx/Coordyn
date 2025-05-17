import { describe, it, expect } from "vitest";
import { db } from ".";
describe("PostgreSQL Connection", () => {
  it("should connect and return current time", async () => {
    const result = await db.query("SELECT NOW()");
    expect(result.rows[0].now).toBeTruthy();
  });
});
