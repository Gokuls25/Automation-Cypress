/// <reference types= "cypress" />
describe('Orange HRM', function(){
    it('Login', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123')
        cy.get('.oxd-button').click() 
    })

    it('My Info', function(){
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.title().should('eq', 'OrangeHRM')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('Admin')
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type('admin123')
        cy.get('.oxd-button').click()
        cy.get(':nth-child(1) > .oxd-main-menu-item').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        cy.get('.oxd-select-text oxd-select-text--active').click();
        cy.get('.oxd-select-text-input').contains('Admin').click()


        //cy.get(':nth-child(2) > .oxd-input').click().type('Gokul')
        //cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').click()
        //cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click().type('Gokul')
    })
})