const { defineConfig } = require('cypress');

module.exports = defineConfig({
  numTestsKeptInMemory: 0,
  video: false,
  screenshotOnRunFailure: false,
  e2e: {
    supportFile: false, // Desativa o arquivo de suporte
    
    setupNodeEvents(on, config) {
      // Implementar event listeners aqui, se necessário
    },
    specPattern: 'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}', // Padrão para encontrar arquivos de teste
  },
});