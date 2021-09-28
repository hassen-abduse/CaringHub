/// <reference types="cypress" />

describe("First test", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("TC_01 = check login with valid email and valid password", () => {
    cy.get(".btn-solid-sm").click();
    cy.get("#email_input").type("ibriz{enter}");
    cy.get("#password_input").type("ibriz{enter}");
    cy.get("#login_btn").click();
    cy.get(".ant-dropdown-trigger").should("be.visible").contains("ibriz");
  });

  it("TC_02 = check login with invalid email and valid password", () => {
    cy.get(".btn-solid-sm").click();
    cy.get("#email_input").type("abc123{enter}");
    cy.get("#password_input").type("ibriz{enter}");
    cy.get("#login_btn").click();
    cy.get("#auth_err").should("be.visible").contains("Unauthorized");
  });
  it("TC_003 = check login with valid email and invalid password", () => {
    cy.get(".btn-solid-sm").click();
    cy.get("#email_input").type("ibriz{enter}");
    cy.get("#password_input").type("abc123{enter}");
    cy.get("#login_btn").click();
    cy.get("#auth_err").should("be.visible").contains("Unauthorized");
  });
  it("TC_004 = check login with invalid email and invalid password", () => {
    cy.get(".btn-solid-sm").click();
    cy.get("#email_input").type("abc123{enter}");
    cy.get("#password_input").type("abc123{enter}");
    cy.get("#login_btn").click();
    cy.get("#auth_err").should("be.visible").contains("Unauthorized");
  });

  it("TC_005= check empty email and empty password", () => {
    cy.get(".btn-solid-sm").click();
    cy.get("#email_input").type("{enter}");
    cy.get("#password_input").type("{enter}");
    cy.get("#login_btn").click();
    cy.get("#auth_err").should("be.visible").contains("Unauthorized");
  });
});
