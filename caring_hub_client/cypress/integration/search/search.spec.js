/// <reference types="cypress" />

describe("Second  test", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("tc-012", () => {
    cy.get("#email_input").type("ibriz{enter}");
    cy.get("#password_input").type("ibriz{enter}");
    cy.get("#login_btn").click();
    cy.get("#find_project").click();
    cy.get("#search-id").type("blood{enter}", { force: true });
  });
});
