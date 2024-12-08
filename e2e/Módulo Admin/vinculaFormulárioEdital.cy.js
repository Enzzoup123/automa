import { visitAdmin } from "../../../support/actions/util/urls";
import { loginAdm } from "../../../support/admin/loginAdmin";
import { vincularFIS } from "../../../support/admin/vincularFISEdital";

describe('Vincular Edital ao Formulario', () => {
    it('Verifica Formulário e criar', () => {
        visitAdmin();
        loginAdm();
        vincularFIS();
        cy.log('Vincular Edital ao Formulario foi executado com sucesso!')
    });
});