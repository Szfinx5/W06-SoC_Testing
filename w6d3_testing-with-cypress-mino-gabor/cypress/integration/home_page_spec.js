describe("The Home Page", () => {
  it("successfully loads", () => {
    cy.visit("/");
  });
});

describe("Checking the H1 tag", () => {
  it("Does it has the correct text?", () => {
    cy.visit("/");
    cy.get("h1").contains("Plan to take over the world:");
    cy.get("#hide-evidence").contains("Hide evidence!");
  });
});
