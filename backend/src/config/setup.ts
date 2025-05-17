import { db } from "../db";
async function createUsers() {
  const query = `
  CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(100) UNIQUE NOT NULL,
    hashedPwd VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
  `;
  try {
    await db.query(query);
    console.log("Table created successfully");
  } catch (err) {
    console.error("Error creating table:", err);
  }
}

createUsers();
