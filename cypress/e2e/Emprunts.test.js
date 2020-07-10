/// <reference types="Cypress" />

describe("Testing Emprunts", () => {
  it(" borrowing a book : Failure and Success ", () => {
    cy.visit("/");
    cy.wait(2000);
    cy.get(":nth-child(2) > .form-control").clear().type("amal");
    cy.get(":nth-child(3) > .form-control").clear().type("wrongPassword");
    cy.get(".btnSubmit").click();
    cy.wait(5000);
    cy.get(":nth-child(2) > .form-control").clear().type("WrongEmail");
    cy.get(":nth-child(3) > .form-control").clear().type("amal");
    cy.get(".btnSubmit").click();
    cy.wait(5000);
    cy.get(":nth-child(2) > .form-control").clear().type("amal");
    cy.get(":nth-child(3) > .form-control").clear().type("amal");
    cy.wait(2000);
    cy.get(".btnSubmit").click();
    cy.wait(2000);
    cy.url().should("include", "/profil");
    cy.wait(2000);
    cy.get('[href="/livres"]').click();
    cy.wait(3000);
    cy.url().should("include", "/livres");
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > .cardLivre > .card-body > :nth-child(3) > .icons > svg"
    ).click();
    cy.wait(2000);
    cy.get(":nth-child(2) > :nth-child(1) > .form-control")
      .clear()
      .type("2020-06-21");
    cy.wait(3000);
    cy.get(":nth-child(2) > :nth-child(2) > .form-control")
      .clear()
      .type("2020-06-23");
    cy.wait(2000);
    cy.get(".modal-footer > .btn-success").click();
    cy.wait(2000);
    cy.get(
      ":nth-child(4) > .cardLivre > .card-body > :nth-child(3) > .icons > svg"
    ).click();
    cy.wait(2000);
    cy.get(":nth-child(2) > :nth-child(1) > .form-control")
      .clear()
      .type("2020-06-21");
    cy.wait(2000);
    cy.get(":nth-child(2) > :nth-child(2) > .form-control")
      .clear()
      .type("2020-06-23");
    cy.wait(2000);
    cy.get(".modal-footer > .btn-success").click();
    cy.wait(2000);
    cy.get('[href="/logout"]').click();
    cy.wait(2000);
    cy.url().should("include", "/logout");
    cy.wait(3000);
    cy.get(":nth-child(2) > .form-control").clear().type("noureddine");
    cy.get(":nth-child(3) > .form-control").clear().type("arfa");
    cy.wait(2000);
    cy.get(".btnSubmit").click();
    cy.url().should("include", "/profil");
    cy.wait(2000);
    cy.get('[href="/users"]').click();
    cy.wait(2000);
    cy.url().should("include", "/users");
    cy.get(
      ":nth-child(3) > .rowElement > :nth-child(3) > .EmpruntsDetails > .icons > svg"
    ).click();
    cy.wait(2000);
    cy.get('.close > [aria-hidden="true"]').click();
    cy.wait(2000);
    cy.get(
      ":nth-child(1) > .rowElement > :nth-child(3) > .EmpruntsDetails > .icons > svg"
    ).click();
    cy.wait(2000);
    cy.get('.close > [aria-hidden="true"]').click();
    cy.wait(2000);
    cy.get(
      ":nth-child(2) > .rowElement > :nth-child(3) > .EmpruntsDetails > .icons > svg"
    ).click();
    cy.wait(2000);
    cy.get('.close > [aria-hidden="true"]').click();
    cy.wait(2000);
    cy.get('[href="/logout"]').click();
    cy.url().should("include", "/logout");
    cy.wait(2000);
  });
});
