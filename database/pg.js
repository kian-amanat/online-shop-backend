import { POSTGRES_CREDENTIALS } from "./index.js";
import pg from "pg";
const { Client } = pg;

async function query(query, params) {
  let client;
  try {
    client = new Client(POSTGRES_CREDENTIALS);
    await client.connect();
    const res = await client.query(query, params);
    return res;
  } catch (err) {
    throw err;
  } finally {
    await client.end();
    console.error("Connection is Stable");
  }
}

export { query };
