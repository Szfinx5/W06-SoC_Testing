<div align="center">
    <img alt="School of Code" src="./images/soc-logo.png" width="60" />
</div>
<h1 align="center">
  API endpoint testing
</h1>

# Purpose

Become familiar with API endpoint testing. We happen to be using Jest and Supertest in this exercise, but if you understand the key concepts, you can apply the same principles with any testing library.

# Task 1

1. `cd` into `task-1` folder. Run `npm i` to install required dependencies.
2. Complete the tests written in `index.test.js`.

# Task 2

When checking the structure of the response's body in the following tasks, remember what you learned in task 1 will help. If you're stuck, look at the docs for both Jest and Supertest.

1. `cd` into `task-2` folder. Run `npm i` to install required dependencies.
2. Familiarise yourself with the contents and structure of the `task-2` folder. You haven't written it, but there also shouldn't be anything new or unfamiliar in there.
3. Write an asynchronous test (in `routes/users.test.js`) which:

   1. Sends a `GET /users` request to our app using Supertest
   2. Checks if the response's HTTP status code is 200
   3. Checks if the response's body is an object with the structure: `{ success: true, payload: array }`
   4. Checks if every item in the `payload` array is an object with the structure: `{ id: any number, username: any string }`

4. Write an asynchronous test (in `routes/users.test.js`) which:

   1. Sends a `GET /users/4` request to our app using Supertest
   2. Checks if the response's HTTP status code is 200
   3. Checks if the response's body is an object with the structure `{ success: true, payload: { id: 4, username: any string } }`

5. Write an asynchronous test (in `routes/users.test.js`) which:

   1. Sends a `GET /users/99` request to our app using Supertest
   2. Checks if the response's HTTP status code is 404
   3. Checks if the response's body is an object with the structure `{ success: false, reason: "No user with ID 99 was found" }`

# Task 3

1. `cd` into `task-3` folder. Run `npm i` to install required dependencies.
2. Set up a brand new PostgreSQL database (on Heroku or locally). (It should be new as we will be repeatedly creating and dropping a `users` table.)
3. Create a `.env` file and add your connection details/credentials to it. Use the `.env.example` file to see which variables are needed.
4. Run `npm run db-reset` (see `package.json` for details).
5. Create a file named `users.test.js` file (within `routes` folder).
6. For each of these requests:

   - `GET /users`
   - `GET /users?username=some_username`
   - `GET /users/:id`
   - `POST /users`
   - `DELETE /users/:id`

   complete the following:

   1. Look at the request handler for that route (in `routes/users.js`) and discuss in your team what things might be worth testing. Think about different scenarios or edge cases.
   2. Write at least one test for each route (in `routes/users.test.js`) that checks if the following are as expected in the response:
      - HTTP status code
      - body's structure
      - anything else that you discussed

⚠️ Seeing a yellow warning like `Jest did not exit one second after the test run has completed.` when you run your tests? Google the warning and try to work out how to get the tests to gracefully end. Potentially helpful:

- https://stackoverflow.com/questions/53935108/
- https://node-postgres.com/features/pooling#shutdown
- https://jestjs.io/docs/setup-teardown

Until then, you should be able to press CTRL + C (or equivalent for your OS/keyboard) to abruptly exit and return control to your terminal.

# Bonus

- One of the problems we've not addressed is that we're not resetting the database between each test, which means one test can affect another test's outcome. (For example, imagine if we delete user ID 4 in one test, but another test tries to get user ID 4 and expects it to exist.) Have a look at https://jestjs.io/docs/setup-teardown to see how Jest might give us an opportunity to re-build a fresh `users` table for each test.
  - Stuck? See if `beforeEach` (from Jest) and the `resetUsersTable` function exported in `db/helpers.js` might be useful.
- Discuss why it might be useful to have a fresh `users` table for each test. Are there other (potentially better) ways to get a fresh context?
- Look at the command associated with the `test` script in `task-3/package.json`. Research and discuss what`--setupFiles dotenv/config` means and does for us.
- Take turns to summarise to each other what's involved when we're testing an API endpoint.
  - For example, what parts of the response did we check match our expectations?
