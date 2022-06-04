export function calculateScrabbleScore(word) {
  let wordArray = word.toUpperCase().split("");
  let counter = 0;

  for (let i = 0; i < wordArray.length; i++) {
    if (
      wordArray[i] === "A" ||
      wordArray[i] === "E" ||
      wordArray[i] === "I" ||
      wordArray[i] === "O" ||
      wordArray[i] === "U" ||
      wordArray[i] === "L" ||
      wordArray[i] === "N" ||
      wordArray[i] === "R" ||
      wordArray[i] === "S" ||
      wordArray[i] === "T"
    )
      counter = counter + 1;

    if (wordArray[i] === "D" || wordArray[i] === "G") counter = counter + 2;

    if (
      wordArray[i] === "B" ||
      wordArray[i] === "C" ||
      wordArray[i] === "M" ||
      wordArray[i] === "P"
    )
      counter = counter + 3;

    if (
      wordArray[i] === "F" ||
      wordArray[i] === "H" ||
      wordArray[i] === "V" ||
      wordArray[i] === "W" ||
      wordArray[i] === "Y"
    )
      counter += 4;

    if (wordArray[i] === "K") counter += 5;

    if (wordArray[i] === "J" || wordArray[i] === "X") counter += 8;

    if (wordArray[i] === "Q" || wordArray[i] === "Z") counter += 10;
  }
  return counter;
}
