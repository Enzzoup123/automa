import { visitCandidato } from "../../../support/actions/util/urls";
import { loginCandidatoIns } from "../../../support/candidato/loginCandidato"
import { entrarMenuPrincipalAI } from "../../../support/candidato/sessoesIniciais";
import { validarFISEnviadoAI } from "../../../support/candidato/validarFormulario";

describe('Validar Envio do Formulario', () => {
    it('Validar Envio do Formulario', () => {
        visitCandidato();
        loginCandidatoIns();
        entrarMenuPrincipalAI();
        validarFISEnviadoAI();
        cy.log('Validar Envio do Formulario foi executado com sucesso!')
    });
});