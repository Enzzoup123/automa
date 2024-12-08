// Validar essa classe em todos os fluxos para verificar se está tudo ok com as integrações do SISEL.

import { CONFIG } from '../config';
import MassaDado from '../../fixtures/MassaDado.json';

export const vincularFIS = () => {
    cy.get('ul.ng-star-inserted > .ng-star-inserted').click();
    cy.get('.menu-principal').contains('Configurar Edital').click();
    cy.url().should('include', '/admin/#/configurar-edital');
    cy.get('#input-select-edital > .p-dropdown-trigger > .p-element').click();
    cy.get('ul#input-select-edital_list li').contains(CONFIG.edital).click();
    cy.wait(700);

    cy.get('#input-vincular-formulario > .p-dropdown-label').then($label => {
        const labelText = $label.text().trim();
        if (labelText === 'Selecione') { // Caso ele estiver vazio
            cy.get('#input-vincular-formulario > .p-dropdown-trigger').click();
            cy.get('ul#input-vincular-formulario_list li').contains(MassaDado.tituloFIS).then(($el) => {
                if ($el.length) {
                    cy.wrap($el).click();
                    cy.log('Formulario localizado e clicado!');

                    cy.get('#perioco-preenchimento-fis-input-inicio > .w-100 > .p-inputtext').clear().click().type(MassaDado.dataInicioFis);
                    cy.get('[aria-label="13"] > .p-ripple').click();

                    cy.wait(600)
                    cy.get('#perioco-preenchimento-fis-input-fim > .w-100 > .p-inputtext').clear().click().type(MassaDado.dataFimFis);
                    cy.get('[aria-label="13"] > .p-ripple').click();

                    cy.get('#input-status-andamento > .p-dropdown-trigger > .p-element').click();
                    cy.get('ul#input-status-andamento_list li').contains('Em andamento').click();

                    cy.get('.configurar-edital').contains('Salvar Vínculo').click();
                    cy.get('.modal-body').contains('Sim, quero vincular!').click();
                    cy.wait(400)
                    cy.get('.modal-body').contains('Entendi').click();
                } else {
                    cy.log('Formulario não localizado!');
                }
            });
        } else if (labelText === MassaDado.tituloFIS) { // Já vinculado
            cy.log('FIS já está vinculado a esse edital');
            if(cy.get('#perioco-preenchimento-fis-input-inicio > .w-100 > .p-inputtext').should('have.value', MassaDado.dataInicioFis)) {
                cy.log('Data de inicio validada com sucesso!')
            } else {
                cy.get('#perioco-preenchimento-fis-input-inicio > .w-100 > .p-inputtext').clear().click().type(MassaDado.dataInicioFis);
                cy.get('[aria-label="13"] > .p-ripple').click();
            } if (cy.get('#perioco-preenchimento-fis-input-fim > .w-100 > .p-inputtext').should('have.value', MassaDado.dataFimFis)) {
                cy.log('Data de fim validada com sucesso!')
            } else {
                cy.wait(600)
                cy.get('#perioco-preenchimento-fis-input-fim > .w-100 > .p-inputtext').clear().click().type(MassaDado.dataFimFis);
                cy.get('[aria-label="13"] > .p-ripple').click();
            }

            cy.get('.configurar-edital').contains('Salvar Vínculo').click();
            cy.get('.modal-body').contains('Sim, quero atualizar!').click();
            cy.wait(400)
            cy.get('.modal-body').contains('Entendi').click();
            
        } else { // Caso esteja outro formulario.
            if (cy.get(':nth-child(2) > app-field > .form-group > :nth-child(2) > app-select > .ng-touched').should('not.be.disabled')) {
                cy.log('Não será possivel alterar esse FIS! Ele já foi vinculado e preenchido uma ou mais vezes!')
            } else {
                cy.get('#input-vincular-formulario > .p-dropdown-trigger').click();
                cy.get('ul#input-vincular-formulario_list li').contains(MassaDado.tituloFIS).click();
                cy.get('.modal-body > .btn').click();
                cy.get('.modal-body > .btn').click();

                cy.get('#perioco-preenchimento-fis-input-inicio > .w-100 > .p-inputtext').clear().click().type(MassaDado.dataInicioFis);
                cy.get('[aria-label="13"] > .p-ripple').click();

                cy.wait(600)
                cy.get('#perioco-preenchimento-fis-input-fim > .w-100 > .p-inputtext').clear().click().type(MassaDado.dataFimFis);
                cy.get('[aria-label="13"] > .p-ripple').click();

                cy.get('#input-status-andamento > .p-dropdown-trigger > .p-element').click();
                cy.get('ul#input-status-andamento_list li').contains('Em andamento').click();

                cy.get('.configurar-edital').contains('Salvar Vínculo').click();
                cy.get('.modal-body').contains('Sim, quero atualizar!').click();
                cy.wait(400)
                cy.get('.modal-body').contains('Entendi').click(); 
            }
        }
    });
    cy.get('.nav-bar > :nth-child(1) > :nth-child(1) > .ng-star-inserted').click();
};