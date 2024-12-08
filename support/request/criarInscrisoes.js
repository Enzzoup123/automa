import { CONFIG } from '../config';
import { generateToken, criarInscricao } from './apiRequest';
import dataBaseCpf from "../../fixtures/dataBaseCpf.json"
import inscricoesGeradas from "../../fixtures/inscricoesGeradas.json"

export function criarInscrisoes(cpf, inscricaoGer) {
    return generateToken(cpf).then((response) => {
        const token = response.body.access_token;

            return criarInscricao(token, inscricaoGer).then((response) => {
                cy.wait(2000)
                expect(response.status).to.eq(201); // Verifica se o edital foi criado com sucesso
            });
    });
}

export function combinarDados() {
    const resultado = [];
    for(let i=0;i<dataBaseCpf.cpf.lenght;i++){
        resultado.push({
            cpf: dataBaseCpf.cpf[i],
            ins: inscricoesGeradas.ins[i],
            tur: CONFIG.turma,
            edital: CONFIG.edital
        });
    }
    cy.log('Infomações juntas: '+resultado)
    cy.log('Array das inscrições: '+inscricoesGeradas.ins)
    cy.log('Array dos cpfs: '+dataBaseCpf.cpf)
}