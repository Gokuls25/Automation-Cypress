describe('Assertions', ()=>{
     it('Implicit assertions', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/');
        // cy.url().should('include', 'orangehrmlive.com');
        // cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        // cy.url().should('contain', 'hrm');

        cy.url().should('include', 'orangehrmlive.com')
        .and('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        .and('contain', 'hrm')
        .and('not.contain', 'GreenHRM')

        cy.title().should('include', 'geHRM')
        .and('eq', 'OrangeHRM')
        .and('contain', 'HRM')
        .and('not.contain', 'VRM')

        
        cy.get('.orangehrm-login-branding > img').should('be.visible')
        cy.get('.orangehrm-login-branding').should('exist')

        cy.xpath('//a').should('have.length', '5') // No of links

        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').should('have.value', 'Admin')
    })
    it('Explicit Assertions', ()=>{

            cy.visit('https://opensource-demo.orangehrmlive.com/');

            cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
            cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
            cy.get('.oxd-button').click()



            let expName = "Kelvin user"
            
            cy.get('.oxd-userdropdown-tab').then((x) => {

               let actName = x.text()

               expect(expName).to.equal(actName)
               expect(expName).to.not.equal(actName)

               assert.equal(expName, actName)
               assert.not.equal(expName, actName)

            })
        

    })
})