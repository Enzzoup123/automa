import { visitCandidato } from "../../../support/actions/util/urls";
import { loginCandidatoIns } from "../../../support/candidato/loginCandidato"
import { entrarMenuPrincipalAI } from "../../../support/candidato/sessoesIniciais";
import { validarSessao1a3, validarSessao4aN } from "../../support/candidato/validarFormulario";

describe('Validar Formulario', () => { 
    it('Validar Formulario de Sessao 1-3', () => {
        visitCandidato();
        loginCandidatoIns();
        validarSessao1a3();
        cy.log('Validar Formulario de Sessao 1-3 foi executado com sucesso!')
    });

    it('Validar Formulario de Sessao 1-3 e 4-N', () => {
        visitCandidato();
        loginCandidatoIns();
        validarSessao1a3();
        entrarMenuPrincipalAI();
        validarSessao4aN();
        cy.log('Validar Formulario de Sessao 1-3 e 4-N foi executado com sucesso!')
    });

    it('Validar Formulario de Sessao 4-N', () => {
        visitCandidato();
        loginCandidatoIns();
        entrarMenuPrincipalAI();
        validarSessao4aN();
        cy.log('Validar Formulario de Sessao 4-N foi executado com sucesso!')
    });
});