/// <reference types="cypress" />

describe("registration  test", () => {
  beforeEach(() => {
    cy.visit("/volunteerRegistration");
  });

  // it("TC_01 = go to registration page", () => {
  //   cy.get(".btn-outline-sm").click();
  //   cy.get("#create-account-text")
  //     .should("be.visible")
  //     .contains("Create an Account");
  // });

  //  register a new user before trying
  it("TC_006 = Check all the text boxes,radio buttons,buttons etc ", () => {
    cy.get("#first-name").type("biruke{enter}", { force: true });
    cy.get("#last-name").type("Teshomee{enter}", { force: true });
    cy.get("#user-name").type("biruke{enter}", { force: true });
    cy.get("#phone-number").type("0911611512{enter}", { force: true });
    cy.get("#email").type("birukkk@gmail.com{enter}", { force: true });
    cy.get("#password").type("mame112{enter}", { force: true });
    cy.get("#confirm-pass").type("mame112{enter}", { force: true });
    cy.get("#city").type("addis ababa{enter}", { force: true });
    cy.get("#skill").click({ force: true });
    cy.get("#6131c392c9e4b000163cfa43").click();
    // cy.get(".ant-select-selection-overflow").type("coding");
    cy.get("#description").type("coding skills{enter}", { force: true });
    cy.get("#cause").click({ force: true });
    cy.get("#6131333f710fd60016a7133b").click();

    //uploading profile pictures
    const image = "images/img.jpg";
    cy.get("#profile-pic").click({ force: true });
    cy.get('input[type="file"]').attachFile(image);
    // upload resume
    const resume = "images/file.pdf";
    cy.get("#basic_volResume").click({ force: true });
    cy.get("#basic_volResume").attachFile(resume);
    cy.get("#submit-btn").click({ force: true });
    // cy.url().should("include", "/login");
    cy.wait(20000)
      .get("#login-id")
      .should("be.visible")
      .contains("Log in to your account");
  });

  // tc-007 required fields
  it("TC_007 = Required Fields ", () => {
    cy.get("#first-name").type("{enter}", { force: true });
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
    cy.get("#profile-pic").click({ force: true });
    cy.get('input[type="file"]').attachFile(image);

    // upload resume
    const resume = "images/file.pdf";
    cy.get("#basic_volResume").click({ force: true });
    cy.get("#basic_volResume").attachFile(resume);

    cy.get("#submit-btn").click({ force: true });
    cy.get("#submit-btn").should("be.visible");
  });

  // optional fields
  it("TC_008 = Optional Fields ", () => {
    cy.get("#first-name").type("kidus{enter}", { force: true });
    cy.get("#last-name").type("Teshome{enter}", { force: true });
    cy.get("#user-name").type("zizeea{enter}", { force: true });
    cy.get("#phone-number").type("0983191259{enter}", { force: true });
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
    cy.get("#profile-pic").click({ force: true });
    cy.get('input[type="file"]').attachFile(image);

    // upload resume
    const resume = "images/file.pdf";
    cy.get("#basic_volResume").click({ force: true });
    cy.get("#basic_volResume").attachFile(resume);

    cy.get("#submit-btn").click({ force: true });
    cy.get("#submit-btn").should("be.visible");
  });

  //invalid email
  it("TC_009 = Email Validation ", () => {
    cy.get("#first-name").type("semeredin{enter}", { force: true });
    cy.get("#last-name").type("Teshome{enter}", { force: true });
    cy.get("#user-name").type("zizee{enter}", { force: true });
    cy.get("#phone-number").type("0923191259{enter}", { force: true });
    cy.get("#email").type("gmail.com{enter}", { force: true });
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
    cy.get("#profile-pic").click({ force: true });
    cy.get('input[type="file"]').attachFile(image);

    // upload resume
    const resume = "images/file.pdf";
    cy.get("#basic_volResume").click({ force: true });
    cy.get("#basic_volResume").attachFile(resume);
    cy.get(".ant-form-item-explain")
      .should("be.visible")
      .contains("The input is not valid E-mail!");
  });

  // phone num validation

  it("TC_0010 = Phone Number vaidation ", () => {
    cy.get("#first-name").type("{enter}", { force: true });
    cy.get("#last-name").type("Teshome{enter}", { force: true });
    cy.get("#user-name").type("zizee{enter}", { force: true });
    cy.get("#phone-number").type("{enter}", { force: true });
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
    cy.get("#profile-pic").click({ force: true });
    cy.get('input[type="file"]').attachFile(image);

    // upload resume
    const resume = "images/file.pdf";
    cy.get("#basic_volResume").click({ force: true });
    cy.get("#basic_volResume").attachFile(resume);

    cy.get(".ant-form-item-explain")
      .should("be.visible")
      .contains("Please input your phone number!");
  });

  // password vaidatoin
  it("TC_011 = Password validation ", () => {
    cy.get("#first-name").type("faya{enter}", { force: true });
    cy.get("#last-name").type("Teshome{enter}", { force: true });
    cy.get("#user-name").type("zizee{enter}", { force: true });
    cy.get("#phone-number").type("{enter}", { force: true });
    cy.get("#email").type("gmail.com{enter}", { force: true });
    cy.get("#password").type("mame1{enter}", { force: true });
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
    cy.get("#profile-pic").click({ force: true });
    cy.get('input[type="file"]').attachFile(image);

    // upload resume
    const resume = "images/file.pdf";
    cy.get("#basic_volResume").click({ force: true });
    cy.get("#basic_volResume").attachFile(resume);
    cy.get(".ant-form-item-explain")
      .should("be.visible")
      .contains("The two passwords that you entered do not match!");
  });
});
