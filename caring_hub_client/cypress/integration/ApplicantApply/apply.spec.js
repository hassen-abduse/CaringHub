/// <reference types="cypress" />

describe("Second  test", () => {
  beforeEach(() => {
    cy.visit("/login");
  });

  // it("tc-012 = apply for a new job", () => {
  //   cy.get("#email_input").type("henok{enter}");
  //   cy.get("#password_input").type("henok{enter}");
  //   cy.get("#login_btn").click();
  //   cy.get("#find_project").click({ force: true });
  //   cy.get("#check-btn").should("be.visible").click({ force: true });
  //   cy.get("#apply-btn").should("be.visible").click({ force: true });
  //   cy.get("#success-id").should("be.visible").contains("Success");
  // });

  it("tc-012 = apply for an applied  job", () => {
    cy.get("#email_input").type("amir{enter}");
    cy.get("#password_input").type("amir{enter}");
    cy.get("#login_btn").click();
    cy.get("#find_project").click({ force: true });
    cy.get("#check-btn").should("be.visible").click({ force: true });
    cy.get("#apply-btn").should("be.visible").click({ force: true });
    cy.get("#error-id").should("be.visible").contains("Error");
  });
});
