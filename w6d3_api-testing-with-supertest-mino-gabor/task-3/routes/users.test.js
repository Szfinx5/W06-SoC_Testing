import request from "supertest";
import app from "../app.js";
import { test, expect } from "@jest/globals";
import { resetTable } from "../db/scripts/reset-table.js";
import { pool } from "../db/index.js";

beforeAll(async () => {
  await resetTable();
});

afterAll(async () => {
  await pool.end();
});

describe("GET /users", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .get("/users")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);

    const expected = {
      success: true,
      payload: expect.any(Array),
    };
    expect(response.body).toEqual(expected);
  });
});

describe("GET /users?username=Barbara", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .get("/users?username=Barbara")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);

    const expected = {
      success: true,
      payload: [{ id: 12, username: "Barbara" }],
    };
    expect(response.body).toEqual(expected);
  });
});

describe("GET /users/12", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .get("/users/12")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);

    const expected = {
      success: true,
      payload: { id: expect.any(Number), username: expect.any(String) },
    };
    expect(response.body).toEqual(expected);
  });
});

describe("POST /users", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .post("/users")
      .send({ username: "john" })
      .set("Accept", "application/json");
    expect(response.status).toEqual(201);

    const expected = {
      success: true,
      payload: { id: expect.any(Number), username: "john" },
    };
    expect(response.body).toEqual(expected);
  });
});

describe("DELETE /users", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .delete("/users/55")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);
  });
});
