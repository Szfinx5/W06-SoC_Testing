import { query } from "../index.js";
import { tweets } from "../../libs/data.js";

async function populateTweetsTable() {
  for (let i = 0; i < tweets.length; i++) {
    const res = await query(
      `INSERT INTO tweets (name, tweet) VALUES ($1, $2) RETURNING *;`,
      [tweets[i].name, tweets[i].tweet]
    );
    console.log(`Added to DB: ${res.rows[0].tweet}`);
  }
}

populateTweetsTable();
