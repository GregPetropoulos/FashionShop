/* eslint-disable no-undef */
import React from 'react';
import HomeScreen from './HomeScreen';

describe('<HomeScreen />', () => {
  it('stubbed products', () => {
    // STUB DATA FOR INITIAL APP LOAD
    cy.intercept('GET', '/api/products*', { fixture: 'products.json' }).as('getAllProducts');
    cy.intercept('GET', '/api/products/top*', { fixture: 'topProducts.json' }).as('getTopProducts');
    cy.mount(<HomeScreen />);
    cy.wait('@getAllProducts');
    cy.wait('@getTopProducts');
    cy.get('.carousel-inner > .active');
    cy.get(':nth-child(1) > [data-testid="Product.ProductCard"]');
    cy.get('.pagination');
  });
});
