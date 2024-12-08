import { validarSessao4 } from "./preencherFISAI"

export const validarSessao1a3 = () => {
    cy.get('.btn.mt-3').should('have.css', 'color', 'rgb(15, 175, 98)')
    cy.get('.options-buttons > :nth-child(2) > .btn').should('have.css', 'color', 'rgb(15, 175, 98)')
    cy.get('.options-buttons > :nth-child(3) > .btn').should('have.css', 'color', 'rgb(15, 175, 98)')
}

export const validarSessao4aN = () => {
    let confirmacao = 0;
    for(let i=4;i<13;i++) {
        cy.get(':nth-child('+[i]+') > .card-footer > .secao-situacao').should('have.css', 'color', 'rgb(32, 154, 88)')
    }
    if (confirmacao == 1) {
        cy.log('Todas as sessões foram validas! Todas estão como conluidas!')
    } else {
        cy.log('Há alguma sessão que não está concluida!')
    }
}

export const entrarMenuPrincipal = () => {
    cy.get('.acessar-menu-button > .btn').click();
 
    cy.url().should('include', '/inicio');
    cy.wait(1500);
}

export const validarFISEnviadoAI = () => {
    cy.get('.formulario-edital').then(($form) => {
      if ($form.find('button:contains("Revisar e enviar FIS")').length > 0) {
        cy.log('Formulario já foi enviado!')
      } else {
        cy.log('Formulario ainda não foi enviado!')
      }
    });
  }

  export const validarFISEnviadoAIP = () => {
    cy.get('.formulario-edital').then(($form) => {
      if ($form.find('button:contains("Revisar e enviar FIS")').length > 0) {
        cy.log('Formulario ainda não foi enviado!')
        validarSessao4();
      } else {
        cy.log('Formulario já foi enviado!')
        validarProtocolo();
      }
    });
  }


export const validarProtocolo = () => {
    cy.get('.formulario-edital').contains('Revisar Protocolo').click();
    cy.wait(200)
    cy.get('.body-header > div > .title').should('include.text', 'Protocolo de envio do formulário')
}