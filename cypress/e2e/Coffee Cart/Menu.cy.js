describe('Menu', ()=>{

    it('Options', ()=>{
        cy.visit('https://coffee-cart.app/')
        cy.get('a.router-link-active.router-link-exact-active').should('have.text', 'menu')
        cy.get(':nth-child(2) > a').should('have.text', 'cart (0)').click()
        cy.get('p').should('have.text', 'No coffee, go add some.')
    })
    it('Menu', ()=>{
        cy.visit('https://coffee-cart.app/')
        cy.get('.cup').should('have.length', '9')
        cy.get('[data-cy="Espresso"]').click()
        cy.get('[data-cy="Espresso"]').click()
        cy.get('[data-cy="Cafe-Breve"]').click()
        cy.get('.promo > span').contains("It's your lucky day! Get an extra cup of Mocha for $4.")
        cy.get('.yes').click()
        cy.get('.pay').should('have.text', 'Total: $39.00')
        cy.get('.pay').should('not.eq', 'Total: $10.00')

    })
})