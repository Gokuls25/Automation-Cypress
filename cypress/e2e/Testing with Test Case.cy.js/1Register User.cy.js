describe('AutomationExercise', ()=>{
    it('Registration', ()=>{

        //Navigate to URL
        cy.visit('https://automationexercise.com/')

        //Verify that home page is visible successfully
        cy.get('#slider-carousel > .carousel-inner').should('be.visible')
        
        //Click on 'Signup / Login' button
        cy.get('[href="/login"]').click()

        //Verify 'New User Signup!' is visible
        cy.get('.signup-form').should('be.visible')

        //Enter name and email address
        cy.get('[data-qa="signup-name"]').type('Gokul')
        cy.get('[data-qa="signup-email"]').type('gokul@abcmail.com')

        //Click 'Signup' button
        cy.get('[data-qa="signup-button"]').click()

        //Verify that 'ENTER ACCOUNT INFORMATION' is visible
        cy.get('.login-form').should('exist')
        cy.get(':nth-child(1) > b').should('have.text', 'Enter Account Information')
        cy.get('input#name.form-control').click().should('have.value', 'Gokul')
        cy.get('#email[data-qa="email"]').should('have.value', 'gokul@abcmail.com') //this element cannot be clicked as it's disabled

        // Fill details: Title, Name, Email, Password, Date of birth

        cy.get('.clearfix').contains('Title')
        cy.get('#id_gender1').check().should('be.checked')
        cy.get('[data-qa="password"]').type('passkey123')
        cy.get('#days').select('25').should('have.value', '25')
        cy.get('[data-qa="months"]').select('January').contains('January')
        cy.get('[data-qa="years"]').select('2001').should('have.value', '2001')

        //Select checkbox 'Sign up for our newsletter!'&'Receive special offers from our partners!'

        cy.get('#newsletter').check().should('be.checked')
        cy.get('#optin').check().should('be.checked')

        //Fill details: First name, Last name, Company, Address, Address2, Country, State, City, Zipcode, Mobile Number
        
        cy.get('[data-qa="first_name"]').type('Gokul')
        cy.get('[data-qa="last_name"]').type('Srinivasan')
        cy.get('[data-qa="company"]').type('ABC Pvt Ltd')
        cy.get('[data-qa="address"]').type('No.7G')
        cy.get('[data-qa="address2"]').type('Rainbow Colony, Saligramam')
        cy.get('[data-qa="country"]').select('India').contains('India')
        cy.get('[data-qa="state"]').type('Tamilnadu')
        cy.get('[data-qa="city"]').type('Chennai')
        cy.get('[data-qa="zipcode"]').type('600028')
        cy.get('[data-qa="mobile_number"]').type('9876543210')

        //Click 'Create Account button'

        cy.get('[data-qa="create-account"]').click()

        //Verify that 'ACCOUNT CREATED!' is visible

        cy.get('b').should('be.visible').and('have.text', 'Account Created!')

        //Click 'Continue' button

        cy.get('[data-qa="continue-button"]').click()

        //Verify that 'Logged in as username' is visible

        cy.get(':nth-child(10) > a').should('be.visible')

        //Click 'Delete Account' button

        cy.get('[href="/delete_account"]').click()

        //Verify that 'ACCOUNT DELETED!' is visible and click 'Continue' button

        cy.get('[data-qa="account-deleted"]').should('be.visible').and('have.text', 'Account Deleted!')
        cy.get('[data-qa="continue-button"]').click()

    })

})