/// <reference types= "cypress" />

describe('Automating', function(){
    it('login', function(){
      cy.visit('www.google.com')
      cy.get('textarea.gLFyf').type('Texting{enter}')
    })
})