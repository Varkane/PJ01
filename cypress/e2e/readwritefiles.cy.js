/// <reference types="cypress"/>

it ('Read', ()=>{

    cy.fixture('index').then((data) => {
        cy.log(data.username);
    })

})

it('Read file using readFile', () => {

    cy.readFile('./cypress/fixtures/index.json').then((data) => {
        cy.log(data.username);
    })

})

// it('Write', () => {

//     cy.writeFile('sample.txt', 'Hello I am me\n');
//     cy.writeFile('sample.txt', 'I am a BITCH', {flag: 'a+'});
    
// })
