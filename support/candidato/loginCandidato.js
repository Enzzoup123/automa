import MassaDado from '../../fixtures/MassaDado.json'
import { validarUrlPI, validarEdital, sessoesIniciais} from '../candidato/sessoesIniciais.js'
import { validarFISEnviado } from './preencherFis.js';
import { visitCandidato } from '../actions/util/urls.js';
import { criarInscricaoSisel } from '../admin/gerarInscricao.js';

   export function preencherFIS(cpf) {
            visitCandidato();
            cy.wait(3000)
            //criarInscricaoSisel(cpf);
            realizarLoginC(cpf);
    }

export function realizarLoginC(cpf) {
    cy.get('.main').contains('Realizar Login').click();
    cy.wait(500)
    cy.get('.p-inputtext').type(cpf);
    cy.wait(300)
    cy.get('#input-senha').type(MassaDado.senha);
    cy.wait(300)
    cy.get('.btn').click();
    cy.wait(700)
};

export function numeroInscricao(inscricao) {
        cy.wait(1200)
        cy.get('.p-inputtext').click().type(inscricao);
        cy.get('.form-content').contains('Avançar').click();
        verificarModal();
}

function verificarModal() {
        cy.get('body').then($body => {
            if ($body.find('.modal-body').length > 0) {
                cy.get('.modal-body').within(() => {
                    cy.contains('button', 'Entendi').click();
                });
                cy.log('Botão "Entendi" clicado!');

                cy.url().should('include', '/formulario-inicio').then(() => {
                    validarUrlPI();
                    validarEdital();
                    sessoesIniciais();
                    validarFISEnviado();
                });
            }else {
                cy.log('Modal não encontrado, esperando...');
                cy.wait(2000); // Espera 2 segundos antes de tentar novamente
                verificarModal();
            }
        });
}
