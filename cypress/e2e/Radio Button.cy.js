describe('CheckBox', ()=>{
    it('Radio Button', ()=>{
        cy.visit('https://practice.expandtesting.com/')
        cy.get('#examples > :nth-child(3) > :nth-child(2) > .card > .card-body > .card-title > .my-link').click()
        cy.get('#yellow').check().should('be.checked').and('')
    })
})