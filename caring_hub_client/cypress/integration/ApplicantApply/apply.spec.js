/// <reference types="cypress" />

describe("applicant apply ", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  it("tc-044 = Check fills valid status and apply for project", () => {
    cy.get("#email_input").type("ibriz{enter}");
    cy.get("#password_input").type("ibriz{enter}");
    cy.get("#login_btn").click();
    cy.get("#find_project").click({ force: true });
    cy.get("#check-btn").should("be.visible").click({ force: true });
    cy.get("#apply-btn").should("be.visible").click({ force: true });
    cy.get("#success").should("be.visible").contains("Success");
  });

  it("tc-045 = Check applied project showing in the volunteer dashboard.", () => {
    cy.get("#email_input").type("amir{enter}");
    cy.get("#password_input").type("amir{enter}");
    cy.get("#login_btn").click();
    cy.get("#my-applications").click({ force: true });
    cy.get("#dashboard").should("be.visible").contains("My Applications");
  });
});
