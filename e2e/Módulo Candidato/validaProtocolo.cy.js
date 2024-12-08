import { visitCandidato } from "../../../support/actions/util/urls";
import { loginCandidatoIns } from "../../support/candidato/loginCandidato"
import { entrarMenuPrincipalAI, sessoesIniciais } from "../../../support/candidato/sessoesIniciais";
import { validarFISEnviadoAI, validarFISEnviadoAIP, validarProtocolo } from "../../../support/candidato/validarFormulario";

describe('Validar Protocolo', () => {
    it('Preencher formulario e validar protocolo', () => {
        visitCandidato();
        loginCandidatoIns();
        sessoesIniciais();
        validarFISEnviadoAIP();
        cy.log('Preencher formulario e validar protocolo foi executado com sucesso!')
    });

    it('Vaidar protocolo somente', () => {
        visitCandidato();
        loginCandidatoIns();
        entrarMenuPrincipalAI();
        validarFISEnviadoAI();
        validarProtocolo();
        cy.log('Vaidar protocolo somente foi executado com sucesso!')
    });
});