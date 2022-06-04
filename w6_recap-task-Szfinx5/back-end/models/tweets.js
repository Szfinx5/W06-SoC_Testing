import { query } from "../db/index.js";

export async function getTweets() {
  const data = await query(`SELECT * FROM tweets;`);
  return data.rows;
}

export async function postTweet(newTweet) {
  const { name, tweet } = newTweet;
  const data = await query(
    `INSERT INTO tweets (name, tweet) VALUES ($1, $2) RETURNING *`,
    [name, tweet]
  );
  return data.rows;
}

export async function updateTweet(id, updatedTweet) {
  const { name, tweet } = updatedTweet;
  const data = await query(
    `UPDATE tweets SET name = $1, tweet = $2 WHERE tweet_id = $3 RETURNING *;`,
    [name, tweet, Number(id)]
  );
  return data.rows;
}

export async function deleteTweet(id) {
  console.log("delete");
  const data = await query(
    `DELETE FROM tweets WHERE tweet_id = $1 RETURNING *`,
    [Number(id)]
  );
  return data.rows;
}
