describe('AutomationVerification', ()=>{
    it('VerifyingTestcasepage', ()=>{
        cy.visit('https://automationexercise.com/')
        
        cy.get('[href="/login"]').click()

        cy.get('[data-qa="login-email"]').type('gokul@bcmail.com')
        cy.get('[data-qa="login-password"]').type('passkey123')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.header-middle').should('be.visible')

        //Click on 'Test Cases' button
        cy.get('.active > :nth-child(1) > .test_cases_list > .btn').click()

        //Verify user is navigated to test cases page successfully
        cy.get('#form > .container').should('be.visible')
    })

    it('Verifying Products', ()=>{
        cy.visit('https://automationexercise.com/')
        
        cy.get('[href="/login"]').click()

        cy.get('[data-qa="login-email"]').type('gokul@bcmail.com')
        cy.get('[data-qa="login-password"]').type('passkey123')
        cy.get('[data-qa="login-button"]').click()
        cy.get('.header-middle').should('be.visible')

        //Click on 'Products' button
        cy.get('.shop-menu > .nav > :nth-child(2) > a').click()
        cy.get('.features_items').should('be.visible')
        cy.get('.left-sidebar').should('be.visible')

        // Click on 'View Product' of first product
        cy.get(':nth-child(3) > .product-image-wrapper > .choose > .nav > li > a').click()
        cy.get('.col-sm-9').should('be.visible')

        //Verify that detail detail is visible: product name, category, price, availability, condition, brand
        cy.get('.product-information > h2').should('have.text', 'Blue Top')
        cy.get('.product-information > :nth-child(3)').should('have.text', 'Category: Women > Tops')
        cy.get(':nth-child(5) > span').should('have.text', 'Rs. 500')
        cy.get('.product-information > :nth-child(6)').contains('In Stock')
        cy.get('.product-information > :nth-child(7)').contains('New')
        cy.get('.product-information > :nth-child(8)').contains('Polo')

    })
})