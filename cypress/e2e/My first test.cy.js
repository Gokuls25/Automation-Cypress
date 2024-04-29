/// <reference types= "cypress" />

it('google test', function(){
    cy.visit("www.google.com")
    cy.get('#APjFqb').type('Chat GPT{Enter}')
    cy.get('.tF2Cxc > .yuRUbf > :nth-child(1) > [jscontroller="msmzHf"] > a > .notranslate > .q0vns > .GTRloc > .byrV5b > .tjvcx').click()
})

