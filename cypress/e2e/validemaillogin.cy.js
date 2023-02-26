import {validemaillogin} from "../fixtures/selectors.js";

describe("Amazon", function () {
    beforeEach(function () {
        cy.visit('/')


});

it("Un-Successful email login", function () {
cy.get(validemaillogin.emailField).type(validemaillogin.emailText1)
cy.get(validemaillogin.continue).click()
cy.get(validemaillogin.passwordField).type(validemaillogin.passwordText)
cy.get(validemaillogin.SignInButton).click()

})
it("Successful email login", function () {
  cy.get(validemaillogin.emailField).type(validemaillogin.emailText)
  cy.get(validemaillogin.continue).click()
  cy.get(validemaillogin.passwordField).type(validemaillogin.passwordText)
  cy.get(validemaillogin.SignInButton).click()

})

})