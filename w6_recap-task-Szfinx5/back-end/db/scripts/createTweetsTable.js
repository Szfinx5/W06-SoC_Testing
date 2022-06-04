import { query } from "../index.js";

async function createTweetsTable() {
  const res = await query(
    `CREATE TABLE IF NOT EXISTS tweets (tweet_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, name TEXT, tweet TEXT);`
  );
  console.log(res.command, "tweets table created");
}

createTweetsTable();
