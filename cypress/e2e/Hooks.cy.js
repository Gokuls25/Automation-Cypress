describe('Hooks', ()=>{

    before(()=>{
        cy.log('...before...')
    })

    after(()=>{
        cy.log('...after...')
    })

    beforeEach(()=>{
        cy.log('...beforeeach...')
    })

    afterEach(()=>{
        cy.log('...aftereach...')
    })

    it('Search', ()=>{
        cy.log('____Searching____')
    })

    it('Click', ()=>{
        cy.log('____Clicking____')
    })

    it('Drag', ()=>{
        cy.log('____draging____')
    })

    it('Scroll', ()=>{
        cy.log('____Scrolling____')
    })
})

/* 
Tags:
skip, only
*/