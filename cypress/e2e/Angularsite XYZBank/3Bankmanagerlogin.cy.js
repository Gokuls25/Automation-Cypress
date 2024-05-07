describe('Bank Manager Login', ()=>{
    it('Add Customer', ()=>{
        cy.visit('https://www.globalsqa.com/angularJs-protractor/BankingProject/#/login')
        cy.get('[ng-click="manager()"]').should('contain', 'Bank Manager Login').click()
        cy.get('[ng-click="addCust()"]').should('contain', 'Add Customer').click()
        cy.get(':nth-child(1) > .form-control').type('Gokul')
        cy.get(':nth-child(2) > .form-control').type('Srinivasan')
        cy.get(':nth-child(3) > .form-control').type('628502')
        cy.get('form.ng-dirty > .btn').click()

        cy.on('window:alert', (t)=>{
        expect(t).contains('Customer added successfully with customer id') 
        
        //Open Account
        cy.get('[ng-class="btnClass2"]').should('contain', 'Open Account').click()
        cy.get('#userSelect').select('Gokul Srinivasan').should('contain', 'Gokul Srinivasan')
        cy.get('#currency').select('Rupee').should('contain', 'Rupee')
        cy.get('form.ng-dirty > button').click()
        })

    })
})