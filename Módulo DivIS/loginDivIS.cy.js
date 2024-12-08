import { visitAdmin } from "../../../support/actions/util/urls";
import { loginAdm } from "../../../support/admin/loginAdmin";

describe('Login Admin', () => {
    it('Login Admin', () => {
        visitAdmin();
        loginAdm();
        cy.log('Describe de Login Admin foi executado com sucesso!')
    });
});