import { dropTweetsTable } from "./dropTweetsTable.js";
import { createTweetsTable } from "./createTweetsTable.js";
import { populateTweetsTable } from "./populateTweetsTable.js";

export async function resetTweetsTable() {
  await dropTweetsTable();
  await createTweetsTable();
  await populateTweetsTable();
}
