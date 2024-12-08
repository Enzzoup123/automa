import { criarInscricaoSisel } from "../../../support/admin/gerarInscricao";

describe('Criar Inscrição', () => {
    it('Criar Inscrição', () => {
        criarInscricaoSisel(); // Entre os parenteses coloque o cpf que deseja gerar a inscrição!
        cy.log('Criar Inscrição foi executada com sucesso!')
    });
});