import { realizarFormulario } from "../../../support/candidato/loginCandidato";
import dataBaseCpf from "../../../fixtures/dataBaseCpf.json"

  describe('Preencher Sessão 4 a 12', () => {
    for (let i = 0; i < dataBaseCpf.cpf.length; i++) { // Corrigido 'lenght' para 'length'
      it(`Preencher sessão 4 a 12 para CPF ${dataBaseCpf.cpf[i]}`, () => {
        realizarFormulario(dataBaseCpf.cpf[i]);
        cy.log('Preencher Sessão 4 a 12 foi executado com sucesso!');
      });
    }
  });