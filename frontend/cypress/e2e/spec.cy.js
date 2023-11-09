/* global cy */
/// <reference types="Cypress" />
// const paginationItems = ['1', '2', '3'];
describe('Initial Load of Fashion Shop App', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('passes', () => {
    // Nav Link
    cy.get('header .navbar .container a').should('have.attr', 'href', '/');
  });

  // Nav Link
  it('Navbar Passes', () => {
    cy.get('header .navbar .container a').should('have.attr', 'href', '/');
  });

  // Search
  it('Search accepts inputs', () => {
    const typedInput = 'jeans';
    cy.focused().should('have.class', 'form-control');
    cy.get('.form-control').type(typedInput).should('have.value', typedInput);
  });

  // Carousel

  // Products

  // Pagination
  it('Paginated Links', () => {
    cy.get('.pagination li').contains('1').should('have.attr', 'href', '/page/1');
    cy.get('.pagination li').contains('2').should('have.attr', 'href', '/page/2');
    cy.get('.pagination li ').contains('3').should('have.attr', 'href', '/page/3');
  });
});
