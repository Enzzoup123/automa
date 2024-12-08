import inscricoesGeradas from "../../fixtures/inscricoesGeradas.json";
import { criarInscrisoes } from "../request/criarInscrisoes";
import { CONFIG } from "../config";

const gerarNumero = () => {
    let insGer = Math.floor(1000000 + Math.random() * 9000000);
    return insGer;
};

const verificarNumero = (insGer) => {
    if (inscricoesGeradas.ins.includes(insGer)) {
        return gerarNumero();
    } else {
        inscricoesGeradas.ins.push(insGer);
        return insGer;
    }
};

export let gerarInscricao = () => {
    let insGer = gerarNumero();
    insGer = verificarNumero(insGer);
    return insGer;
};

export let criarInscricaoSisel = (cpf) => {
        let inscricao = gerarInscricao();
        criarInscrisoes(cpf, inscricao);
        cy.log('--------------------------');
        cy.log('CPF enviado:' + cpf);
        cy.log('Inscricao enviada:' + inscricao);
        cy.log('Turma enviada:' + CONFIG.turma)
        cy.log('--------------------------');
};