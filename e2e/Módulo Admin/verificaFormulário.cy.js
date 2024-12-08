import { visitAdmin } from "../../../support/actions/util/urls";
import { opcaoSistema, validarFisExistente, validarFisExistenteS, validarUrl } from "../../../support/admin/cadastrarFormulario";
import { loginAdm } from "../../../support/admin/loginAdmin";

describe('Verifica Formulário', () => {
    it('Verifica Formulário e criar', () => {
        visitAdmin();
        loginAdm();
        opcaoSistema();
        validarUrl();
        validarFisExistente();
        cy.log('Verificar Formulário e criar foi executado com sucesso!')
    });

    it('Verificar Formulário somente', () => {
        cy.visit('http://10.56.1.160/admin/');
        cy.title().should('include', 'SIS');
        loginAdm();
        opcaoSistema();
        validarUrl();
        validarFisExistenteS();
        cy.log('Verificar Formulário somente foi executado com sucesso!')
    });
});