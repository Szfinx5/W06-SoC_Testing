import { query } from "../index.js";

async function dropTweetsTable() {
  const res = await query(`DROP TABLE IF EXISTS tweets;`);
  console.log(res.command, "dropped tweets table");
}

dropTweetsTable();
