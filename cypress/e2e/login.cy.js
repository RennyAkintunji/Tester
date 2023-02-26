import {login} from "../fixtures/selectors.js";


describe("Amazon", function () {
    beforeEach(function () {
        cy.visit('/')


    });

    it("Un-Successful login", function () {
        cy.get(login.emailField).type(login.emailText)
        cy.get(login.continue).click()
        cy.get(login.passwordField).type(login.PasswordText1)
        cy.get(login.SignInButton).click()
      
    })
    it("Successful login", function () {
        cy.get(login.emailField).type(login.emailText)
        cy.get(login.continue).click()
        cy.get(login.passwordField).type(login.passwordText)
        cy.get(login.SignInButton).click()
      
    })




})
