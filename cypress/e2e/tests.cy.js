/// <reference types="cypress"/>

describe('Search elements', () => {
  it('search for elements with multiple results', () => {
      cy.visit('/');
      cy.search('rigar@gma.com')      
    })
  })
