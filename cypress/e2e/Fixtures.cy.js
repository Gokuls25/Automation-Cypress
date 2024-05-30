describe('Fixtures', ()=>{

    it('Orange Hrm', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.fixture('Orangehrm.json').then((data)=>{
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.name)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(data.password)
        cy.get('.oxd-button').click() 
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text', data.text)
        })
    })
    
    let userdata;
    before(()=>{
        cy.fixture('Orangehrm.json').then((x)=>{

            userdata=x;

        })
    })
    it('Multiple it block', ()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/')
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.name)
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type(userdata.password)
        cy.get('.oxd-button').click() 
        cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text', userdata.text)
    })
})