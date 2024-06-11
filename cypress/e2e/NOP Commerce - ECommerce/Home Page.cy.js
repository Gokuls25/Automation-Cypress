describe('Home Page',()=>{
    
    beforeEach(()=>{
        cy.visit('https://demo.nopcommerce.com/')
    })

    it('Title', ()=>{
        cy.title().should('include','nopCommerce demo store')
        })

    it('All Elements', ()=>{
        //Check if Categories element is available
        cy.get('.menu-toggle').should('have.text', "Categories")
        //Check if two Images are available
        cy.get('.nivo-imageLink').should('have.length', '2')
        //Check if Welcome Message is visible
        cy.get('.topic-block-title > h2').should('be.visible').and('contain.text', 'Welcome')
        //Check total number of Categories of Products in the home page
        cy.get('.category-item').should('have.length','3')
        //Check the total number of Items under Featured Products
        cy.get('.item-box').should('have.length', '7')
        //Number of elements under News
        cy.get('.news-item').should('have.length','3')
        
    })

})
