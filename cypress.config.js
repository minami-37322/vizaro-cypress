module.exports = {
  e2e: {
    baseUrl: `http://localhost:8080/Vizaro`,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
  },
};
// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: `http://localhost:8080/Vizaro`,
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
//     },
//     watchForFileChanges: false,
//   },
// });