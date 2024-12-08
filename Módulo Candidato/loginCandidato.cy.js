import { visitCandidato } from "../../../support/actions/util/urls";
import { loginCandidatoIns } from "../../../support/candidato/loginCandidato"
import { validarUrlPI } from "../../../support/candidato/sessoesIniciais";

describe('Login Candidato', () => {
    it('Login Candidato', () => {
        visitCandidato();
        loginCandidatoIns();
        validarUrlPI();
        cy.log('Login Candidato foi executado com sucesso!')
    });
});