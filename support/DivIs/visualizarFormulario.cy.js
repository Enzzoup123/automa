import { CONFIG } from "../config";
import dataBaseCpf from "../../fixtures/dataBaseCpf.json"
import perguntasFis from "../../fixtures/perguntasFis.json"

export const opcaoEntradaFis = () => {
    cy.get('.nav-bar').contains('Entrada FIS').click();
    cy.wait(300)
}

export const selecEdital = () => {
    cy.get('.p-dropdown-trigger').click();
    cy.get('#selectEdital_list li').contains(CONFIG.edital).click();
    telaDeCarregamento('.block-ui-wrapper');
  }

  export const selecEditalU = () => {
    cy.get('.p-dropdown-trigger').click();
    cy.get('#selectEdital_list li').contains(CONFIG.edital).click();
    telaDeCarregamentoP('.block-ui-wrapper');
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
        telaDeCarregamentoP(selector);
      } else {
        cy.log('Carregamento concluido! Prosseguindo...');
        cy.wait(400);
      }
    });
  }
  
  let vCpf
  export const validarRecebimento = () => {
    let i
    for(i=0;i<dataBaseCpf.cpf.length;i++) {
        let cpf = dataBaseCpf.cpf[i]
       vCpf = cpf.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4'); // Transforma o CPF com a pontuação
        cy.get('#search-cpf > .p-inputtext').clear().type(dataBaseCpf.cpf[i]);
        telaDeCarregamentoP(cy.wait(1200));
        cy.get('.menu-principal').contains(vCpf).should('be.visible');
        entrarNoFormulario();
        cy.wait(600)
        opcaoEntradaFis();
        selecEditalU();
    }
    if(i=dataBaseCpf.cpf.length) {
        cy.log("Todos os Cpfs da lista da dataBaseCpf foram verificados!");
    }
  }

  const entrarNoFormulario = () => {
    cy.get('#dropdownMenuButton0').click();
    cy.wait(200);
    cy.get('div.menu-expansivel > .dropdown-menu').contains('Visualizar formulário').click({force: true});
    cy.wait(700);
    validarFormulario();
  }

  const validarFormulario = () => {
    cy.get('.card-pergunta').contains(vCpf).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações Pessoais').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pEnd).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pRCurta).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pRLonga).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pMultiEs.titulo).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pMultiEs.r1).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pMultiEs.r2).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pCaixSele.titulo).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pCaixSele.r1).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pCaixSele.r2).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pLista.titulo).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pData).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pHorario).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pIntData).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pCpf).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pCnpj).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pVeicu).should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.pNumProcs).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações de Relacionamentos').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.SPInfoRelac).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações Sociais').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.SPInfoSociais).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações de Saúde').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.SPInfoSaude).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações Judiciais e Policiais').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.SPInfoJudicEPolic).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações Profissionais').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.SPInfoProfissionais).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações Escolares').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.SPInfoEscolares).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações Econômicas e Patrimoniais').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.SPInfoEsonôEPatri).should('be.visible');

    cy.get('app-visualizar-formulario.ng-star-inserted').contains('Informações Anexos').should('be.visible');
    cy.get('app-visualizar-formulario.ng-star-inserted').contains(perguntasFis.SPInfoAnexos).should('be.visible');
  }