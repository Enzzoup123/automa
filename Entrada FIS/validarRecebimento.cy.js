import { visitAdmin } from "../../../../support/actions/util/urls";
import { loginAdm } from "../../../../support/admin/loginAdmin";
import { opcaoEntradaFis, selecEdital } from "../../../../support/DivIs/validarRecebimento.cy";

describe('Validar Recebimento dos Formularios', () => {
    it('Validar Recebimento dos Formularios', () => {
        visitAdmin();
        loginAdm();
        opcaoEntradaFis();
        selecEdital();
        cy.log('Validar Recebimento dos Formularios foi executado com sucesso!')
    });
});