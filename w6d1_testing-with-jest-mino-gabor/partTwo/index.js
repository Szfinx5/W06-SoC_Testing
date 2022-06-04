/* Complete the following greetPerson function so that it passes 
the tests in index.test.js. */

export function greetPerson(name) {
  //👉 2.1 - Write the code for this function based on what you see in the tests!
  if (typeof name !== "string") {
    return "Please try again with a name!";
  } else return `Greetings, ${name}`;
}
//👉 2.2 - Write tests for the functions below:

export function doubleAndAddOne(number) {
  return number * 2 + 1;
}

export function isLongArray(array) {
  if (array.length > 10) {
    return true;
  }
  return false;
}

// Note: The ... in the functions below is the spread operator. If you forget what this does, you can give it a Google! 🔍

export function addItemToArray(array, item) {
  return [...array, item];
}

export function addKeyValuePairToObject(object, key, value) {
  return { ...object, [key]: value };
}

export function throwErrorIfEven(number) {
  if (number % 2 === 0) {
    throw new Error(`Error, ${number} is even!`);
  }
  return false;
}
