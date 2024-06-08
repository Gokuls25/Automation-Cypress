describe('Custom Commands', ()=>{
    it('Custom Command', ()=>{
        cy.visit('https://www.zoho.com/campaigns/?src=zGlobalRelatedProducts')

        //cy.get('a[href="/salesiq/?src=zGlobalRelatedProducts"]').click() //Normal method using attribute
        cy.clickLink('SalesIQ') //By using custom command
        cy.get('.zw-product-header > .content-wrap > .product-title > a > .product-icon').should('be.visible')
    })

    it('Over write', ()=>{
        cy.visit('https://www.zoho.com/campaigns/?src=zGlobalRelatedProducts')
        cy.clickLink('SALESIQ')
        cy.get('.zw-product-header > .content-wrap > .product-title > a > .product-icon').should('be.visible')
    })

    it.only('Login', ()=>{
        cy.visit('https://demo.nopcommerce.com/')
        cy.clickLink('Log in')
        cy.login("gokul25@gmail.com", "12345")

    })
})