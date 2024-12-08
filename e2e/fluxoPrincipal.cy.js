import { loginAdm } from "../../support/admin/loginAdmin";
import { opcaoSistema } from "../../support/admin/cadastrarFormulario";
import { validarUrl } from "../../support/admin/cadastrarFormulario";
import { validarFisExistente } from "../../support/admin/cadastrarFormulario";
import { vincularFIS } from "../../support/admin/vincularFISEdital";
import { visitAdmin } from "../../support/actions/util/urls";
import { preencherFIS } from "../../support/candidato/loginCandidato";
import dataBaseCpf from "../../fixtures/dataBaseCpf.json"
import inscricoesGeradas from "../../fixtures/inscricoesGeradas.json"
import { numeroInscricao } from "../../support/candidato/loginCandidato";
import { combinarDados } from "../../support/request/criarInscrisoes";

describe('Automação de massa de dados', () => {
  it.skip('Modulo Admin', () => {
      visitAdmin();
      loginAdm();
      opcaoSistema();
      validarUrl(); 
      validarFisExistente();
      vincularFIS();
  });

  for (let i = 0; i < dataBaseCpf.cpf.length; i++) {
    it(`MD - Candidato: ${dataBaseCpf.cpf[i]}`, () => {
      preencherFIS(dataBaseCpf.cpf[i]);
      numeroInscricao(inscricoesGeradas.ins[i]);
    })
  }

  it('Mostrar dados', () => {
    combinarDados();
  })
});