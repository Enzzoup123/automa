import { visitCandidato } from "../../../support/actions/util/urls";
import { loginCandidatoIns } from "../../../support/candidato/loginCandidato"
import { sessoesIniciais } from "../../../support/candidato/sessoesIniciais";

describe('Preencher Sessões 1 a 3', () => {
    it('Preencher Sessões 1 a 3', () => {
        visitCandidato();
        loginCandidatoIns();
        sessoesIniciais();
        cy.log('Preencher Sessões 1 a 3 foi executado com sucesso!')
    });
});