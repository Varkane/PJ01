/// <reference types = "cypress"/>

it('File upload', () => {

    cy.visit('https://trytestingthis.netlify.app/')
    cy.get('#myfile').attachFile('canti.jpg');

})


 it.only('File download', () => {
     cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','mydownloads','example.jpg')
 })