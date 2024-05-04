describe('iFrame', ()=>{
   it('Approach 1', ()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        let iframe=cy.get('#mce_0_ifr')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap)

        iframe.type("Welcome {ctrl+A}")
    })

    it('Approach 2' , ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.frameLoaded('#mce_0_ifr')

        cy.iframe('#mce_0_ifr').clear().type("It's me, Hi {ctrl+a}")

        cy.get('[aria-label="Bold"]').click()
    })
})