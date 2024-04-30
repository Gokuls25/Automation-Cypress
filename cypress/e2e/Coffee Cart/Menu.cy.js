describe('Menu', ()=>{
    it('Options', ()=>{
        cy.visit('https://coffee-cart.app/')
        cy.get('.cup').should('have.length', '9')
        cy.get('[data-cy="Espresso"]').click()
        cy.get('[data-cy="Cafe-Breve"]').click()
        cy.get('.pay').should('have.text', 'Total: $25.00')
        cy.get('.pay').should('not.eq', 'Total: $10.00')

    })
})