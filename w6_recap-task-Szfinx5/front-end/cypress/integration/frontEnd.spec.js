describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

describe("Checking the content of the site", () => {
  it("Does it has the correct text?", () => {
    cy.visit("/");
    cy.get("h1").contains("TestTer");
  });
  it("Do we have the correct imput fields?", () => {
    cy.get("#name-input");
    cy.get("#tweet-input");
    cy.get("#name-label").contains("Name:");
    cy.get("#tweet-label").contains("Tweet:");
  });

  it("Do we have the correct buttons?", () => {
    cy.get("#refresh-button").contains("Refresh testing tweets");
    cy.get("#send-tweet-button").contains("Send tweet!");
  });
});
