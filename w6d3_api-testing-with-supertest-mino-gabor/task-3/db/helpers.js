import { pool } from "./index.js";
import { seedData } from "./seed-data.js";

export async function createUsersTable() {
  return await pool.query(
    `CREATE TABLE IF NOT EXISTS users (
      id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      username VARCHAR(30) NOT NULL
    );`
  );
}

export async function dropUsersTable() {
  return await pool.query("DROP TABLE IF EXISTS users;");
}

export async function resetUsersTable() {
  return [
    await dropUsersTable(),
    await createUsersTable(),
    await seedUsersTable(),
  ];
}

export async function seedUsersTable() {
  /**
   * Should be injection-resistant as we're just dynamically generating N placeholders (where N is how many items we're seeding).
   *
   * (Plus, we control the seed data. It hasn't come from the user/some third party/someone we can't trust/control.)
   */
  const safePlaceholders = seedData.map((_, i) => `($${i + 1})`).join(",\n");
  const values = seedData.map((user) => user.username);

  return await pool.query(
    `INSERT INTO users (username) VALUES ${safePlaceholders} RETURNING *;`,
    values
  );
}
