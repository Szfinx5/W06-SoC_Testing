export function calculateScrabbleScore(word) {
  let wordArray = word.toUpperCase().split("");
  let counter = 0;

  for (let i = 0; i < wordArray.length; i++) {
    switch (wordArray[i]) {
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
      case "L":
      case "N":
      case "R":
      case "S":
      case "T":
        counter += 1;
        break;

      case "D":
      case "G":
        counter += 2;
        break;

      case "B":
      case "C":
      case "M":
      case "P":
        counter += 3;
        break;

      case "F":
      case "H":
      case "V":
      case "W":
      case "Y":
        counter += 4;
        break;

      case "K":
        counter += 5;
        break;

      case "J":
      case "X":
        counter += 8;
        break;

      case "Q":
      case "Z":
        counter += 10;
        break;

      default:
        throw new Error(`Error, ${wordArray[i]} is not a letter!`);
    }
  }
  return counter;
}
