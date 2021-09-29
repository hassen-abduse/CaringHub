/// <reference types="cypress" />

describe("approval", () => {
  beforeEach(() => {
    cy.visit("/login");
  });
  // approval
  it("TC_021 = check applicant approval  by approving", () => {
    cy.get("#email_input").type("org_aau{enter}");
    cy.get("#password_input").type("org_aau{enter}");
    cy.get("#login_btn").click();
    cy.get("#my-projects").click();
    cy.get("#job-posts").should("be.visible");
  });

  // rejecting
  it("TC_022 = check applicant approval  by rejecting ", () => {
    cy.get("#email_input").type("org_aau{enter}");
    cy.get("#password_input").type("org_aau{enter}");
    cy.get("#login_btn").click();
    cy.get("#my-projects").click();
    cy.get("#job-posts").should("be.visible");
  });
});
