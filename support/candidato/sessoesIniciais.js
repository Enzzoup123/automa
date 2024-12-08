import { CONFIG } from "../config";

export const validarUrlPI = () => {
    cy.url().should('include', '/formulario-inicio');
};

export const validarEdital = () => {
    cy.get('.mb-2 > :nth-child(1) > strong').contains(CONFIG.edital).should('be.visible');
};

export function sessoesIniciais () {
    cy.get('.btn.mt-3').should('not.be.disabled').click();
    cy.url().should('include', '/formulario-inicio/tutorial');
    cy.wait(300)
 
    cy.get('.submit-button').click({force: true});
    cy.url().should('include', '/formulario-inicio');
 
    cy.wait(300)
    cy.get('.options-buttons > :nth-child(2) > .btn').should('not.be.disabled').click();
    cy.url().should('include', '/formulario-inicio/orientacoes');
 
    cy.wait(300)
    cy.get('.submit-button').click({force: true});
    cy.url().should('include', '/formulario-inicio');
 
    cy.wait(300)
    cy.get('.options-buttons > :nth-child(3) > .btn').should('not.be.disabled').click();
    cy.url().should('include', '/formulario-inicio/termo');
 
    cy.wait(300)
    cy.get('.submit-button').click({force: true});
    cy.url().should('include', '/formulario-inicio')

    cy.get('.acessar-menu-button > .btn').click();
    cy.wait(600)
};

export const entrarMenuPrincipalAI= () => {
    cy.wait(300)
    cy.get('body').then(($body) => {
        if ($body.find('.acessar-menu-button > .btn').length > 0) {
          // Se o elemento existe, clique nele
          cy.get('.acessar-menu-button > .btn').click();
        } else {
          cy.log('Não foi possivel avançar de tela pois não foi localizado o botão para avançar! Verificar se as Sessões 1 a 3 estão concluidas!');
        }
      });
}