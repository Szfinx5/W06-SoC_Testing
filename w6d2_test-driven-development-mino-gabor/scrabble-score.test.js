import { calculateScrabbleScore } from "./scrabble-score";

// List of matchers (expects) for jest:
// https://jestjs.io/docs/using-matchers

test("Test A letter", () => {
  const actual = calculateScrabbleScore("A");
  const expedted = 1;

  expect(actual).toBe(expedted);
});

let scoreOneArray = ["E", "I", "O", "U", "L", "N", "R", "S", "T"];
let scoreTwoArray = ["D", "G"];
let scoreThreeArray = ["B", "C", "M", "P"];
let scoreFourArray = ["F", "H", "V", "W", "Y"];
let scoreFiveArray = ["K"];
let scoreEightArray = ["J", "X"];
let scoreTenArray = ["Q", "Z"];

for (let i = 0; i < scoreOneArray.length; i++) {
  test("testing for " + scoreOneArray[i], () => {
    const actual = calculateScrabbleScore(scoreOneArray[i]);
    const expedted = 1;
    expect(actual).toBe(expedted);
  });
}

for (let i = 0; i < scoreTwoArray.length; i++) {
  test("testing for " + scoreTwoArray[i], () => {
    const actual = calculateScrabbleScore(scoreTwoArray[i]);
    const expedted = 2;
    expect(actual).toBe(expedted);
  });
}

for (let i = 0; i < scoreThreeArray.length; i++) {
  test("testing for " + scoreThreeArray[i], () => {
    const actual = calculateScrabbleScore(scoreThreeArray[i]);
    const expedted = 3;
    expect(actual).toBe(expedted);
  });
}

for (let i = 0; i < scoreFourArray.length; i++) {
  test("testing for " + scoreFourArray[i], () => {
    const actual = calculateScrabbleScore(scoreFourArray[i]);
    const expedted = 4;
    expect(actual).toBe(expedted);
  });
}

for (let i = 0; i < scoreFiveArray.length; i++) {
  test("testing for " + scoreFiveArray[i], () => {
    const actual = calculateScrabbleScore(scoreFiveArray[i]);
    const expedted = 5;
    expect(actual).toBe(expedted);
  });
}

for (let i = 0; i < scoreEightArray.length; i++) {
  test("testing for " + scoreEightArray[i], () => {
    const actual = calculateScrabbleScore(scoreEightArray[i]);
    const expedted = 8;
    expect(actual).toBe(expedted);
  });
}

for (let i = 0; i < scoreTenArray.length; i++) {
  test("testing for " + scoreTenArray[i], () => {
    const actual = calculateScrabbleScore(scoreTenArray[i]);
    const expedted = 10;
    expect(actual).toBe(expedted);
  });
}

test("Testing for 'MARYLAND'.", () => {
  const actual = calculateScrabbleScore("MARYLAND");
  const expected = 14;
  expect(actual).toBe(expected);
});

test("Testing for 'pinakanakakapagngitngitngitngitang'.", () => {
  const actual = calculateScrabbleScore("pinakanakakapagngitngitngitngitang");
  const expected = 56;
  expect(actual).toBe(expected);
});

test("Testing for 'Megszentsegtelenithetetlensegeskedeseitekert'.", () => {
  const actual = calculateScrabbleScore(
    "Megszentsegtelenithetetlensegeskedeseitekert"
  );
  const expected = 70;
  expect(actual).toBe(expected);
});

test("Testing for 'Kraftfahrzeughaftpflichtversicherung'.", () => {
  const actual = calculateScrabbleScore("Kraftfahrzeughaftpflichtversicherung");
  const expected = 84;
  expect(actual).toBe(expected);
});
