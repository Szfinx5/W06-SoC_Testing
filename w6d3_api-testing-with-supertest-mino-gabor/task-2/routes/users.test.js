// Write your tests for task 2 in this file. Plan out what you need to import/require.

import request from "supertest";
import app from "../app.js";
import { test, expect } from "@jest/globals";

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

describe("GET /users/4", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .get("/users/4")
      .set("Accept", "application/json");
    expect(response.status).toEqual(200);

    const expected = {
      success: true,
      payload: { id: 4, username: expect.any(String) },
    };
    expect(response.body).toEqual(expected);
  });
});

describe("GET /users/99", function () {
  it("responds with json", async function () {
    const response = await request(app)
      .get("/users/99")
      .set("Accept", "application/json");
    expect(response.status).toEqual(404);

    const expected = {
      success: false,
      reason: "No user with ID 99 was found.",
    };
    expect(response.body).toEqual(expected);
  });
});
