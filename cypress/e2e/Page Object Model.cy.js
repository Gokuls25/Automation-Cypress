import Login from "../PageObject/Login"
import Login2 from "../PageObject/Login2"

describe('Page Object Model', ()=>{

    it('General', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    let ln= new Login

    ln.setUserName('Admin')
    ln.setPassword('admin123')
    ln.setButton;
    })

   it('POM using changable elements', ()=>{
    cy.visit('https://opensource-demo.orangehrmlive.com/')
       
        let ln= new Login2
    
        ln.setUserName('Admin')
        ln.setPassword('admin123')
        ln.setButton;
        })

        it('Pom with Fixture data', ()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/')
           cy.fixture('Orangehrm.json').then((data)=>{

            let ln= new Login
        
            ln.setUserName(data.name)
            ln.setPassword(data.password)
            ln.setButton;

           })

            })
   })