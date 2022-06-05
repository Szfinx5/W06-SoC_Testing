import request from "supertest";
import app from "../app.js";
import { test, expect } from "@jest/globals";
import { pool } from "../db/index.js";
import { application } from "express";
import { resetTweetsTable } from "../db/scripts/resetTweetsTable.js";

beforeAll(async () => {
  await resetTweetsTable();
});

afterAll(async () => {
  await pool.end();
});

describe("GET /tweets", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .get("/tweets")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toEqual(expected);
  });
});

describe("POST /tweets", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .post("/tweets")
      .send({ name: "john", tweet: "New Tweet it is" })
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toEqual(expected);
  });
});

describe("PUT /tweets", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .put("/tweets/2")
      .send({ name: "Bella", tweet: "Updated Tweet it is" })
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toEqual(expected);
  });
});

describe("DELETE /tweets", () => {
  it("responds with json", async () => {
    const response = await request(app)
      .delete("/tweets/3")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });
});
