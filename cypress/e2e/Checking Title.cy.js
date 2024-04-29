describe('Checking Title', function(){

    it.only('Positive test', function(){
        cy.visit("https://www.youtube.com/")
        cy.title().should('eq', 'YouTube')
    })

    it('Negative Result', function(){
        cy.visit("https://www.youtube.com/")
        cy.title().should('eq', 'youtube')
    })
})