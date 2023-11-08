/* global cy */

const paginationItems = ['1', '2', '3'];
describe('Initial Load of Fashion Shop App', () => {
  it('passes', () => {
    cy.visit('http://localhost:3000');
    // Nav Link
    // Search
    // Carousel
    // Products

    
    // Pagination
    cy.get('.pagination li').contains('1').should('have.attr', 'href', '/page/1');
    cy.get('.pagination li').contains('2').should('have.attr', 'href', '/page/2');
    cy.get('.pagination li ').contains('3').should('have.attr', 'href', '/page/3');
  });
  });

