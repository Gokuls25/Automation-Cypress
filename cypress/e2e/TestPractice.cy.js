/// <reference types = "cypress">/

it('google test', function(){
    cy.visit("www.google.com")
    cy.get('#APjFqb', {timeout: 5000}).type('Denver{Enter}')
    cy.get('.eKjLze > .g > [lang="en"] > .tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .LC20lb').click()
    //cy.contains('ALL PRODUCTS').click()
})