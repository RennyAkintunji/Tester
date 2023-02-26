import {homepage,login} from "../fixtures/selectors.js";
// const access = require("./validlogin.cy.js");

describe("Amazon", function () {
    beforeEach(function () {
        cy.visit('/')
        // access.validlogin();

    });
    it("Successful login", function () {
        cy.get(login.emailField).type(login.emailText)
        cy.get(login.continue).click()
        cy.get(login.passwordField).type(login.passwordText)
        cy.get(login.SignInButton).click()
      
    })
    it("Homepage", function () {
    cy.get(homepage.abc).click    
      
    })
})