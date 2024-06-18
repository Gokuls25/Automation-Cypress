class Login{
    setUserName(username){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type(username)
    }

    setPassword(password){
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').click().type(password)
    }

    setButton(){
        cy.get('.oxd-button').click()
    }
}
export default Login;