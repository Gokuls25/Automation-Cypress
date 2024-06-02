describe('Data Driven Testing', ()=>{
    it('OrangeHRM', ()=>{

        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.fixture('OrangeHrm2').then((data)=>{
        data.forEach(userdata => {
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.username)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
        cy.get('.oxd-button').click() 
        
        if(userdata.username== 'Admin' && userdata.password=='admin123'){
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text', userdata.expected)
        cy.get('.oxd-userdropdown-tab > .oxd-icon').click()
        cy.get(':nth-child(4) > .oxd-userdropdown-link').click()
        }
        else{
            cy.get('div.oxd-alert-content.oxd-alert-content--error').should('have.text', userdata.expected)
        }

            });
        })
        
    })
})