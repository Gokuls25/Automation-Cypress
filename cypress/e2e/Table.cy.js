describe('Table', ()=>{

    beforeEach('Login',()=>{
        cy.visit('https://demo.opencart.com/admin/index.php')
        cy.get('#input-username').type('Demo')
        cy.get('#input-password').type('demo')
        cy.get('button[type="submit"]').click()
        cy.get('.btn-close').click()
        cy.get('#menu-customer>a').click()
        cy.get('#menu-customer>ul>li:first-child').click()
    })

    it('Number of Rows and Colums', ()=>{
        cy.get('#customer').should('be.visible')
        cy.get('table.table.table-bordered.table-hover>tbody>tr').should('have.length', '10') //No of rows
        cy.get('table.table.table-bordered.table-hover>thead>tr>td').should('have.length', '7') //No of columns
    })

    it('Specific Row and Column', ()=>{
        cy.get('table.table.table-bordered.table-hover>tbody>tr:nth-child(3)>td:nth-child(3)').contains('olaola@das.com')
        })

    it('Read all data in a table', ()=>{
        cy.get('table.table.table-bordered.table-hover>tbody>tr')
        .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols) =>{
                    cy.log($col.text())
                })
            })
        })
    })

    it.only('Pagination' , ()=>{

       /* let totalPages;
        cy.get('.col-sm-6 text-end').then((e)=>{

            let mytext = e.text();
            totalPages = mytext.substring(mytext.indexOf('(')+1, mytext.indexOf('Pages')-1)
            cy.log('Total number of pages ' + totalPages)
        })*/

        let totalPages = 9
        for(let p=1;p<=totalPages; p++)
            if(p<=totalPages)
            {
            cy.get('ul.pagination>li:nth-child('+p+')')
            cy.wait(2000)

            cy.get('table.table.table-bordered.table-hover>tbody>tr')
            .each(($row, index, $rows)=>{
            cy.wrap($row).within(()=>{
                cy.get('td').each(($col, index, $cols) =>{
                    cy.log($col.text())
                })
            })
        })

    }
    })
})