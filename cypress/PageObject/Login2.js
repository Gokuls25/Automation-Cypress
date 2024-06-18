class Login2{

    eleUsername = ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    elePassword = ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    eleButton = ".oxd-button"

    setUserName(username){
        cy.get(this.eleUsername).click().type(username)
    }

    setPassword(password){
        cy.get(this.elePassword).click().type(password)
    }

    setButton(){
        cy.get(this.eleButton).click()
    }
}
export default Login2;