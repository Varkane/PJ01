/// <reference types="cypress"/>

describe('Search elements', () => {
  it('search for elements with multiple results', () => {
    cy.visit('/');
    cy.fixture('index').then((index)=>{
      cy.get(index.subscribeBox).type('Ricard@mail.com');
      cy.get(index.subscribeButton).click();
      cy.get(index.alert).should('contain','You have been successfully subscribed!');
    })
  })
})