/** @type { import('@storybook/react').Preview } */
import '../src/assets/styles/index.css';
import '../src/assets/styles/bootstrap.custom.css';
import React from 'react';
import { MemoryRouter } from 'react-router';
import { Helmet } from 'react-helmet-async';
import { Provider } from 'react-redux';
import Meta from '../src/components/Meta';
// import { ThemeProvider } from "@material-ui/styles";
import store from '../src/store';
// import theme from "../src/theme";

// Registers the msw addon
import { initialize, mswLoader } from 'msw-storybook-addon';

// Initialize MSW
initialize();
// initialize({
//   onUnhandledRequest: ({ method, url }) => {
//     if (url.pathname.startsWith('/my-specific-api-path')) {
//       console.error(`Unhandled ${method} request to ${url}.

//         This exception has been only logged in the console, however, it's strongly recommended to resolve this error as you don't want unmocked data in Storybook stories.

//         If you wish to mock an error response, please refer to this guide: https://mswjs.io/docs/recipes/mocking-error-responses
//       `)
//     }
//   },
// })

const preview = {
  decorators: [
    (Story) => (
      <Provider store={store}>
        <MemoryRouter>
          <Story />
        </MemoryRouter>
      </Provider>
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
