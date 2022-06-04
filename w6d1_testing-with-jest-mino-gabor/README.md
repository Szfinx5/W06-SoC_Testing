# Introduction to Jest

It's time to flex those docs-reading muscles 💪📖 and use the Jest docs to figure out how to do basic testing in JavaScript.

## Part One

👉 Navigate to the [partOne](./partOne/) folder and follow the [Jest Getting Started](https://jestjs.io/docs/en/getting-started) guide to write your first Jest test.

Make sure to add this line of code in your scripts in your `package.json` as you will get an error without it when you try to use ES6 import syntax:
```
"scripts": {
    "test": "node --experimental-vm-modules node_modules/jest/bin/jest.js"
  }
```

## Part Two

[Read the Jest docs about using matchers here](https://jestjs.io/docs/en/using-matchers) and talk it through with your partner to make sure you both understand the basics about how matchers work.

👉 2.1 - Navigate to the [partTwo](./partTwo/) folder and read the tests already written in [index.test.js](./partTwo/index.test.js). Write the code for the `greetPerson` function in [index.js](./partTwo/index.js) without changing these tests so that they all pass when you run them.

👉 2.2 - For the rest of the functions in [index.js](./partTwo/index.js), write tests in [index.test.js](./partTwo/index.test.js) that assure you that these functions are doing what you expect.

## Part Three (🌟 Bonus!)

If you finish thoroughly testing all of the functions in part two, navigate to the [app.test.js](./partThree/app.test.js) in the partThree folder.

👉 Without looking in app.js, follow the instructions in [app.test.js](./partThree/app.test.js) to debug the rock, paper, scissors game using tests.

Tips:

- Refer to the full list of Jest matchers [in the docs here](https://jestjs.io/docs/en/expect) to see all the different matchers available.
- Remember that you can prefix your matcher with `.not` to test that it does the opposite.
- You may have to write more than one test for a function to be fully sure that it's functioning correctly. Remember to account for different scenarios and edge cases.
- Don't forget to make the string that describes what your test is doing human-readable! It needs to say what inputs are being tested and what the expected output should be.
