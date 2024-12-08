import { CONFIG } from "../config";
import dataBaseCpf from "../../fixtures/dataBaseCpf.json"

export const opcaoEntradaFis = () => {
    cy.get('.nav-bar').contains('Entrada FIS').click();
    cy.wait(300)
}

export const selecEdital = () => {
    cy.get('.p-dropdown-trigger').click();
    cy.get('#selectEdital_list li').contains(CONFIG.edital).click();
    telaDeCarregamento('.block-ui-wrapper');
  }
  
  function telaDeCarregamento(selector) {
    cy.get('body').then($body => {
      if ($body.find(selector).is(':visible')) {
        cy.log('Esperando o carregamento... Aguarde...');
        cy.wait(7000);
        telaDeCarregamento(selector);
      } else {
        cy.log('Carregamento concluido! Prosseguindo...');
        cy.wait(400);
        validarRecebimento();
      }
    });
  }

  function telaDeCarregamentoP(selector) {
    cy.get('body').then($body => {
      if ($body.find(selector).is(':visible')) {
        cy.log('Esperando o carregamento... Aguarde...');
        cy.wait(7000);
        telaDeCarregamento(selector);
      } else {
        cy.log('Carregamento concluido! Prosseguindo...');
        cy.wait(400);
      }
    });
  }
  
  export const validarRecebimento = () => {
    let i
    for(i=0;i<dataBaseCpf.cpf.length;i++) {
        let cpf = dataBaseCpf.cpf[i]
        let vCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Transforma o CPF com a pontuação
        cy.get('#search-cpf > .p-inputtext').clear().type(dataBaseCpf.cpf[i]);
        telaDeCarregamentoP(cy.wait(1200));
        cy.get('.menu-principal').contains(vCpf).should('be.visible');
    }
    if(i=dataBaseCpf.cpf.length) {
        cy.log("Todos os Cpfs da lista da dataBaseCpf foram verificados!");
    }
  }