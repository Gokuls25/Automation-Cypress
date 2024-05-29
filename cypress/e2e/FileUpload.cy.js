import 'cypress-file-upload'
describe('File Upload ', ()=>{
    it('Single File upload', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('input#file-upload').attachFile('example.pdf')
        cy.get('#file-submit').click()
        cy.get('h3').should('contain.text', 'File Uploaded')
    })
    
    it('Rename File', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('input#file-upload').attachFile({filePath: 'example.pdf', fileName: 'file.pdf'})
        cy.get('#file-submit').click()
        cy.get('h3').should('contain.text', 'File Uploaded')
        cy.get('#uploaded-files').should('contain.text', 'file.pdf')
    })


    it('Drag and Drop', ()=>{
        cy.visit('https://the-internet.herokuapp.com/upload')
        cy.get('#drag-drop-upload').attachFile('example.pdf', {subjectType: 'drag-n-drop'})
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span').should('contain.text', 'example.pdf')
        cy.get('#file-submit').click()
        cy.get('h3').should('contain.text', 'File Uploaded')
    })

    it('Multiple Files upload', ()=>{
        cy.visit('https://davidwalsh.name/demo/multiple-file-upload.php')
        cy.get('input#filesToUpload').attachFile(['example.pdf','Resume.pdf'])
        cy.get(':nth-child(6) > strong').should('contain.text', 'Files You Selected')
    })
})