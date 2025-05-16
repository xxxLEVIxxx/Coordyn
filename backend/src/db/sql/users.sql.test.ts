import { describe, expect, it } from "vitest";
import { insertUser, deleteUser } from "./users.sql";
import { db } from "..";

describe("SQL Commands for users Test ", () => {
  describe("Insert User Test", () => {
    it("should generate a user when call insertUser and userId should be valid", async () => {
      const userId = await insertUser("test@email.com", "dji@fdjklW");
      expect(userId).toBeTypeOf("number");
    });
  });

  describe("Delete User Test", () => {
    it("should delete the user when deleteUser is called", async () => {
      await deleteUser("test@email.com");
      const result = await db.query("SELECT * FROM users WHERE username = $1", [
        "test@email.com",
      ]);
      expect(result.rows.length).toBe(0);
    });
  });
});
