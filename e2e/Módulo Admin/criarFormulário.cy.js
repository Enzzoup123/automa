import { visitAdmin } from "../../../support/actions/util/urls";
import { novoFIS, opcaoSistema, validarUrl, validarFisExistente } from "../../../support/admin/cadastrarFormulario";
import { loginAdm } from "../../../support/admin/loginAdmin";

describe('Verifica Formulário', () => {
    it('Criar Formulário, antes verificar', () => {
        visitAdmin();
        loginAdm();
        opcaoSistema();
        validarUrl();
        validarFisExistente();
        cy.log('Criar Formulário, antes verificar foi executado com sucesso!')
    });

    it.skip('Criar Formulário, criar direto', () => {
        cy.visit('http://10.56.1.160/admin/');
        cy.title().should('include', 'SIS');
        loginAdm();
        opcaoSistema();
        validarUrl();
        novoFIS();
        cy.log('Criar Formulário, criar direto foi executado com sucesso!')
    });
});