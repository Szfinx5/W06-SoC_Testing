import { test, expect } from "@jest/globals";

import {
  greetPerson,
  doubleAndAddOne,
  isLongArray,
  addItemToArray,
  addKeyValuePairToObject,
  throwErrorIfEven,
} from "./index.js";

// 👉 2.1 - greetPerson tests:

test(`Given a string "Chris", the greetPerson function returns the correct greeting string with Chris' name`, () => {
  const actual = greetPerson("Chris");
  const expected = "Greetings, Chris";

  expect(actual).toBe(expected);
});

test(`Given the string "Liz K", the greetPerson function returns the correct greeting string with Liz K's name`, () => {
  const actual = greetPerson("Liz K");
  const expected = "Greetings, Liz K";

  expect(actual).toBe(expected);
});

test(`When given a number instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(1);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

test(`When given a boolean instead of a string, the greetPerson function returns the correct try again message.`, () => {
  const actual = greetPerson(true);
  const expected = "Please try again with a name!";

  expect(actual).toBe(expected);
});

//👉 2.2 - Write your tests for the other functions below:
test("Double and add one fuction test", function () {
  const actual = doubleAndAddOne(5);
  const expected = 11;

  expect(actual).toBe(expected);
});

test("Test Array", () => {
  const actual = isLongArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 8, 7, 6, 5, 4, 3]);
  const expedted = true;

  expect(actual).toBe(expedted);
});

test("Test Array", () => {
  const actual = isLongArray([1, 2, 5, 4, 3]);
  const expedted = false;

  expect(actual).toBe(expedted);
});

test("Adding item to array test", () => {
  const actual = addItemToArray([1, 2, 3, 4, 5, 6], 7);
  const expected = [1, 2, 3, 4, 5, 6, 7];

  expect(actual).toEqual(expected);
});

test("Adding new values to an object", () => {
  const actual = addKeyValuePairToObject(
    { first: "Firest number", second: "Second number" },
    "third",
    "Third number"
  );
  const expected = {
    first: "Firest number",
    second: "Second number",
    third: "Third number",
  };

  expect(actual).toEqual(expected);
});

test("Return error if the number is even", () => {
  expect(() => {
    throwErrorIfEven(4);
  }).toThrow();
});
