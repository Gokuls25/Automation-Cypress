describe('Child Tab', ()=>{
    it('Tab', ()=>{
        cy.visit('https://en.wikipedia.org/wiki/Mars')
        cy.get(':nth-child(9) > [href="/wiki/Phobos_(moon)"]').invoke('removeAttr', 'title="Phobos (moon)"').click()
        cy.url().should('include', 'https://en.wikipedia.org/wiki/Phobos_(moon)')

    })
})