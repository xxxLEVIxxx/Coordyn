import { describe, it, expect } from "vitest";
import { db } from "../db";

describe("Table Setup Test", () => {
  describe("Users Table Test", () => {
    it("should have created the users table", async () => {
      const result = await db.query(`
            SELECT EXISTS(
                SELECT FROM information_schema.tables
                WHERE table_schema = 'public'
                AND table_name = 'users'
            );    
        `);
      expect(result.rows[0].exists).toBe(true);
    });
    it("should have required columns in users table", async () => {
      const result = await db.query(`
            SELECT column_name
            FROM information_schema.columns
            WHERE table_name = 'users';
        `);
      const columnNames = result.rows.map((row) => row.column_name);
      expect(columnNames).toEqual(
        expect.arrayContaining(["id", "username", "hashedpwd", "created_at"])
      );
    });
  });
});
