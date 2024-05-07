describe('Home Page', ()=>{
    it('Home Page', ()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        //cy.get('.container-fluid ng-scope').should('be.visible') //Home page visibility
        cy.get('.mainhdr').should('be.visible') //Home page visibility
        cy.get('button.btn.home').should('be.visible').and('have.text', 'Home')
        cy.get('.mainHeading').should('be.visible').and('have.text', 'XYZ Bank')
        cy.get('.borderM > :nth-child(1) > .btn').should('be.visible').and('have.text', 'Customer Login')
        cy.get(':nth-child(3) > .btn').should('be.visible').and('have.text', 'Bank Manager Login')
    })
})