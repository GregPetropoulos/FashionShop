/* eslint-disable no-undef */
// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { mount } from 'cypress/react18';
import { Provider } from 'react-redux';
import store from '../../src/store';
import '../../src/assets/styles/index.css'; //custom styles
import '../../src/assets/styles/bootstrap.custom.css'; //custom styles
import '../../src/scss/custom.scss'; //customizing bootstrap
import { MemoryRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

Cypress.Commands.add('mount', (component, options = {}) => {
  const {
    reduxStore = store,
    routerProps = { initialEntries: ['/']},
    ...mountOptions
  } = options;

  const wrapped = (
    <HelmetProvider>
      <Provider store={reduxStore}>
        <PayPalScriptProvider deferLoading={true}>
          <MemoryRouter {...routerProps}>{component}</MemoryRouter>
        </PayPalScriptProvider>
      </Provider>
    </HelmetProvider>
  );

  return mount(wrapped, mountOptions);
});
// Cypress.Commands.add('mount', mount)

// Example use:
// cy.mount(<MyComponent />)
