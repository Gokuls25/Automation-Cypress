describe('Get API Users', ()=>{

    let token = "c6501dc239b48c7ab5df2c66ee60f1715086f114a487d050f55cb83836c8ed40"
    
    it('Get Request', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users',
            headers : {'authorization' : 'bearer' + token}
        }).then((res)=>{
            expect(res.status).to.eq(200)
            if(res.body.id == 6958885){
                expect(res.body.gender).to.eq("male")
            }
        })
    })
    
    it('GET Request by id', ()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v2/users/6958880',
            headers : {
            'authorization' : 'Bearer ' + token
            }
        }).then((res)=>{
           expect(res.body.name).to.eq("Niranjan Menon")
           expect(res.status).to.eq(200)
           expect(res.body.status).to.eq('active')
        })
    })
})