import { query } from "../index.js";

export async function dropTweetsTable() {
  const res = await query(`DROP TABLE IF EXISTS tweets;`);
  console.log(res.command, "dropped tweets table");
}

//dropTweetsTable();
