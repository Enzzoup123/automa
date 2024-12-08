// cypress/support/commands.js
Cypress.Commands.add('fillInput', (selector, value) => {
  cy.get(selector).clear().type(value);
});