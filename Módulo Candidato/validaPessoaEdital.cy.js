import { validarEdital } from "../../../support/candidato/sessoesIniciais";
import { loginCandidatoIns } from "../../../support/candidato/loginCandidato"
import { visitCandidato } from "../../../support/actions/util/urls";

describe('Valida Edital desejado', () => {
    it('Valida Edital desejado', () => {
        visitCandidato();
        loginCandidatoIns();
        validarEdital();
        cy.log('Valida Edital desejado foi executado com sucesso!')
    });
});