/* eslint-disable no-undef */

import React from 'react';
import App from './App.js';
// import { MemoryRouter } from 'react-router';

describe('<App />', () => {
  it('renders', () => {
    cy.viewport(1200, 600).mount(<App />, {
      routerProps: {
        initialEntries: ['/login', '/cart'],
      },
    });
    cy.get('.navbar-brand').click();
    cy.get('.bg-info').should('have.text', 'Search').click();
    cy.get('[href="/login"]').should('have.text', 'Sign In').click();
    cy.get('[href="/cart"]').should('have.text', 'Cart').click();
  });
});
