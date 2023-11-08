const { defineConfig } = require("cypress");
// import {defineConfig} from 'cypress'

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "create-react-app",
      bundler: "webpack",
    },
  },

  e2e: {
    // baseUrl:'https://localhost:3000',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
