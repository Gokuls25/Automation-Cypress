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
        //Check Community poll is available
        cy.get('.home-page-polls').should('be.visible').and('contain.text', 'Community poll')
        //Check if 'Do you Like NOPCommerce question is available
        cy.get('.poll-display-text').should('have.text', 'Do you like nopCommerce?')
        //Check if check box is checked
        cy.get('#pollanswers-1').check().should('be.checked')
        cy.get('#pollanswers-2').check().should('be.checked')
        cy.get('#pollanswers-3').check().should('be.checked')
        cy.get('#pollanswers-4').check().should('be.checked')
        //Check if Vote can be accessed 
        cy.get('#vote-poll-1').click()
        cy.get('.poll-vote-error').should('have.text', 'Only registered users can vote.')
        
    })

})
