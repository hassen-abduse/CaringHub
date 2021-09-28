/// <reference types="cypress" />

describe("Second  test", () => {
  beforeEach(() => {
    cy.visit("/volunteerRegistration");
  });

  it("TC_01 = go to registration page", () => {
    cy.get(".btn-outline-sm").click();
    cy.get("#create-account-text")
      .should("be.visible")
      .contains("Create an Account");
  });

  it("TC_006 = Check all the text boxes and register a new user ", () => {
    cy.get("#first-name").type("ziz{enter}", { force: true });
    cy.get("#last-name").type("Teshome{enter}", { force: true });
    cy.get("#user-name").type("ziz{enter}", { force: true });
    cy.get("#phone-number").type("0923191296{enter}", { force: true });
    cy.get("#email").type("checosssssss@gmail.com{enter}", { force: true });
    cy.get("#password").type("mame{enter}", { force: true });
    cy.get("#confirm-pass").type("mame{enter}", { force: true });
    cy.get("#city").type("addis ababa{enter}", { force: true });
    cy.get("#skill").click({ force: true });
    cy.get("#6131c392c9e4b000163cfa43").click();
    // cy.get(".ant-select-selection-overflow").type("coding");

    cy.get("#description").type("coding skills{enter}", { force: true });

    cy.get("#cause").click({ force: true });
    cy.get("#6131333f710fd60016a7133b").click();

    //uploading profile pictures
    const image = "images/img.jpg";
    cy.get("#profile-pic").click();
    cy.get('input[type="file"]').attachFile(image);

    // upload resume
    const resume = "images/file.pdf";
    cy.get("#basic_volResume").click();
    cy.get("#basic_volResume").attachFile(resume);

    cy.get("#submit-btn").click({ force: true });
    // cy.url().should("include", "/login");
    cy.wait(10000)
      .get("#login-id")
      .should("be.visible")
      .contains("Log in to your account");
  });

  it("TC_006 = register an already registered user ", () => {
    cy.get("#first-name").type("zizee{enter}", { force: true });
    cy.get("#last-name").type("Teshome{enter}", { force: true });
    cy.get("#user-name").type("zizee{enter}", { force: true });
    cy.get("#phone-number").type("0923191259{enter}", { force: true });
    cy.get("#email").type("checosssss@gmail.com{enter}", { force: true });
    cy.get("#password").type("mame{enter}", { force: true });
    cy.get("#confirm-pass").type("mame{enter}", { force: true });
    cy.get("#city").type("addis ababa{enter}", { force: true });
    cy.get("#skill").click({ force: true });
    cy.get("#6131c392c9e4b000163cfa43").click();
    // cy.get(".ant-select-selection-overflow").type("coding");

    cy.get("#description").type("coding skills{enter}", { force: true });

    cy.get("#cause").click({ force: true });
    cy.get("#6131333f710fd60016a7133b").click();

    //uploading profile pictures
    const image = "images/img.jpg";
    cy.get("#profile-pic").click();
    cy.get('input[type="file"]').attachFile(image);

    // upload resume
    const resume = "images/file.pdf";
    cy.get("#basic_volResume").click();
    cy.get("#basic_volResume").attachFile(resume);

    cy.get("#submit-btn").click({ force: true });
    cy.wait(10000).get("#error-id").should("be.visible").contains("Error");
  });
});
