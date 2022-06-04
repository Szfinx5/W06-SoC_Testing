# Cypress

It's time to take our testing up another notch with [Cypress](https://docs.cypress.io/guides/core-concepts/introduction-to-cypress), a JavaScript testing tool for end-to-end testing.

## Part 1

As usual, the best place to start is the Getting Started section of the docs.

👉 First, read the installation instructions [Installing Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress) page to get going with Cypress with NPM and open it for the first time. To make things easier, cypress has been set as a dev dependency in package.json so `npm i` should get it installed for you.

👉 To run cypress you can use the included `npm run cy` script

<details>
<summary>🆘 Common issues and how to troubleshoot</summary>
  
- Having a verification error? Use the advice on this Stack Overflow page: https://stackoverflow.com/questions/63667880/cypress-verification-timed-out-after-30000-milliseconds.
  
- Failing to make a connection to the Chrome DevTools? Use the advice in this Github issues comment: https://github.com/cypress-io/cypress/issues/6540#issuecomment-641087834.

- Plugin/index.js not valid. ensure that your `cypress.json` config file has the key-value pair of `"pluginsFile": false`. This is already set up in the root of the project but sometime cypress chooses to create the file elsewhere (depending on the OS that you are using).

- Cypress is currently (as of December 2021) not compatible with node 17+ by default. To fix this either (CHOOSE ONE):
  - add `"nodeVersion": "bundled"` to your `cypress.json`
  - set the `NODE_OPTIONS` environment variable (depending on your operating system) as follows:
    - linux/mac - `NODE_OPTIONS=--openssl-legacy-provider`
    - windows:bash - `set NODE_OPTIONS=--openssl-legacy-provider`
    - windows:powerShell - `$env:NODE_OPTIONS=--openssl-legacy-provider`
  - Downgrade node to version 16
  </details>

👉 Once you have the Cypress test runner successfully open, pair with your partner through the exercises on the [Writing Your First Test](https://docs.cypress.io/guides/getting-started/writing-your-first-test) page to get familiar with basic Cypress syntax and features.

## Part 2

Now that you have your bearings, go forth and test this app using Cypress! Remember, "The more your tests resemble the way your software is used, the more confidence they can give you."

👉 First, have a play with the app itself, and make a plan of the behaviors you want to test with Cypress. Draft your test statements. Start with the basics, and work your way up.

👉 Then start writing the tests for each test statement you drafted.

Remember to plan out each stage of logic within each test itself - don't start coding until you have a plan for that individual test.

Resources:

- Example tests that showed up in your `cypress/integration` folder when you installed Cypress
- The Cypress docs
- [List of assertions](https://docs.cypress.io/guides/references/assertions)
- [List of commands with examples here](https://glebbahmutov.com/cypress-examples/8.5.0/#commands)
- Google!

⭐ Bonus: If you're satisfied that you've fully tested the existing app, add a feature and test it!

Ideas:

- Input validation
- Different types of input
- Different events
- Routing
- ... and more!
