/** @type { import('@storybook/react').Preview } */
import '../src/assets/styles/index.css';
import '../src/assets/styles/bootstrap.custom.css';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { HelmetProvider } from 'react-helmet-async';
import { PayPalScriptProvider } from '@paypal/react-paypal-js';

import { Provider } from 'react-redux';
import store from '../src/store';

// Registers the msw addon
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();

const preview = {
  decorators: [
    (Story) => (
      <HelmetProvider>
        <Provider store={store}>
          {/* <PayPalScriptProvider deferLoading={true}> */}
            {/* <RouterProvider router={router} /> */}
            <MemoryRouter initialEntries={['/']}>
              <Story />
            </MemoryRouter>
          {/* </PayPalScriptProvider> */}
        </Provider>
       </HelmetProvider>
    ),
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
  },
  // Provide the MSW addon loader globally
  loaders: [mswLoader],
};

export default preview;
