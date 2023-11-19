const { defineConfig } = require('cypress');

module.exports = defineConfig({
  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
  viewportHeight: 600,
  viewportWidth: 1200,
  env: {
    BASE_URL: 'http://localhost:3000',
    reactDevTools: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'http://localhost:3000',
  },
});
