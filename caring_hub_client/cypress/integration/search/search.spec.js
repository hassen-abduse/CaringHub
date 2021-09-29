/// <reference types="cypress" />

describe("search  test", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("tc-012 -  Check Search result", () => {
    cy.get("#email_input").type("ibriz{enter}");
    cy.get("#password_input").type("ibriz{enter}");
    cy.get("#login_btn").click();
    cy.get("#find_project").click();
    cy.get("#search-id").type("blood{enter}", { force: true });
  });

  it("tc-013 -  click on Search button without any data", () => {
    cy.get("#email_input").type("ibriz{enter}");
    cy.get("#password_input").type("ibriz{enter}");
    cy.get("#login_btn").click();
    cy.get("#find_project").click();
    cy.get("#search-id").type("blood{enter}", { force: true });

    it("tc-014 -  check for max input in the search bar ", () => {
      cy.get("#email_input").type("ibriz{enter}");
      cy.get("#password_input").type("ibriz{enter}");
      cy.get("#login_btn").click();
      cy.get("#find_project").click();
      cy.get("#search-id").type("blood{enter}", { force: true });
    });
  });
});
