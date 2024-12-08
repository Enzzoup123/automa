import MassaDado from '../../fixtures/MassaDado.json';
import perguntasFis from '../../fixtures/perguntasFis.json';
import { validarFISCriado } from './validarFISCriado';

export const opcaoSistema = () => {
    cy.get('ul.ng-star-inserted > .ng-star-inserted').click();
    cy.get('.menu-principal').contains('Configurar Edital').click();
};

export const validarUrl = () => {
    cy.url().should('include', 'admin/#/configurar-edital');
};

export const validarFisExistenteS = () => {
    cy.wait(1500);
    cy.get('#input-vincular-formulario > .p-dropdown-trigger').click();
    cy.get('ul#input-vincular-formulario_list li').then($items => { 
    const item = $items.filter((index, el) => Cypress.$(el).text().trim() === MassaDado.tituloFIS);
            if (item.length > 0) {
                cy.log('O título "' + MassaDado.tituloFIS + '" já existe!');
            } else {
                cy.log('O título "' + MassaDado.tituloFIS + '" não existe!');
            };
    });
}

export const validarFisExistente = () => {
    cy.wait(1500);
    cy.get('#input-vincular-formulario > .p-dropdown-trigger').click();
    cy.get('ul#input-vincular-formulario_list li').then($items => { 
    const item = $items.filter((index, el) => Cypress.$(el).text().trim() === MassaDado.tituloFIS);
            if (item.length > 0) {
                cy.log('O título "' + MassaDado.tituloFIS + '" já existe!');
                cy.get('.nav-bar').contains('Menu Principal').click();
            } else {
                novoFIS();
                validarFISCriado();
            };
    });
}

export const novoFIS = () => {
    cy.get('.nav-bar > :nth-child(1) > :nth-child(2) > .ng-star-inserted').click();
    cy.wait(500);
    cy.get(':nth-child(1) > .card > .card-content > img').click();
    //cy.url().should('include', '/admin/formulario-sis/criar');
    cy.get('#input-titulo-formulario').type(MassaDado.tituloFIS);
    cy.wait(700);

    categInfoPessoais();
};

const categInfoPessoais = () => {
    cy.get('.cadastrar-formulario').contains('1. Informações Pessoais').click();
    cy.wait(700);

    criacaoPerguntaEndereco();
};

const criacaoPerguntaEndereco = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple > .icon-arrow-down').click();
    cy.get('#pn_id_15').contains('Endereço').click();
    cy.get('.ql-editor').type(perguntasFis.pEnd);
    cy.wait(800);

    criacaoPerguntaCurta();
};

const criacaoPerguntaCurta = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls').contains('Resposta Curta').click();
    cy.wait(1000);
    cy.get(':nth-child(2) > .editable-content > app-resposta-curta.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get(':nth-child(2) > .editable-content > app-resposta-curta.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pRCurta)
    cy.wait(800);

    criacaoPerguntaLonga();
}

const criacaoPerguntaLonga = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls').contains('Resposta Longa').click();
    cy.wait(1000);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pRLonga)
    cy.wait(800);

    criacaoPerguntaMultiplaEs();
}

const criacaoPerguntaMultiplaEs = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls').contains('Múltipla escolha').click();
    cy.wait(1000);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click()
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pMultiEs.titulo)
    cy.wait(700);
    cy.get('.add-buttons > :nth-child(1) > label').click();
    cy.get('.input-value').click();
    cy.get('.input-value').type(perguntasFis.pMultiEs.r1)
    cy.wait(700);
    cy.get('.add-buttons > :nth-child(1) > label').click();
    cy.get(':nth-child(2) > .input-group > .input-value').click();
    cy.get(':nth-child(2) > .input-group > .input-value').type(perguntasFis.pMultiEs.r2);
    cy.wait(800);

    criacaoPerguntaCxSele();
}

const criacaoPerguntaCxSele = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls').contains('Caixa de Seleção').click();
    cy.wait(1000);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click()
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pCaixSele.titulo)
    cy.wait(700);
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > .add-buttons > :nth-child(1) > label').click()
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > .ng-star-inserted > .input-group > .input-value').click()
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > .ng-star-inserted > .input-group > .input-value').type(perguntasFis.pCaixSele.r1)
    cy.wait(700);
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > .add-buttons > :nth-child(1) > label').click()
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > :nth-child(2) > .input-group > .input-value').click()
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > :nth-child(2) > .input-group > .input-value').type(perguntasFis.pCaixSele.r2)
    cy.wait(800);

    criacaoPerguntaListaS();
}

const criacaoPerguntaListaS = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple > .icon-arrow-down').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('Lista suspensa').click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pLista.titulo);
    cy.wait(700);
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > .add-buttons > :nth-child(1) > label').click();
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > .ng-star-inserted > .input-group > .input-value').click();
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > .ng-star-inserted > .input-group > .input-value').type(perguntasFis.pLista.r1);
    cy.wait(700);
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > .add-buttons > :nth-child(1) > label').click();
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > :nth-child(2) > .input-group > .input-value').click();
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-valid > .radio-options > :nth-child(2) > .input-group > .input-value').type(perguntasFis.pLista.r2);
    cy.wait(800)

    criacaoPerguntaData();
}

const criacaoPerguntaData = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple > .icon-arrow-down').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('Data').click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pData)
    cy.wait(800);

    //criacaoPerguntaUpArq();
    criacaoPerguntaHorario();
}

const criacaoPerguntaUpArq = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple > .icon-arrow-down').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('Upload de arquivo').click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pUplArq)
    cy.wait(700);

    criacaoPerguntaHorario();
}

const criacaoPerguntaHorario = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple > .icon-arrow-down').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('Horários').click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pHorario)
    cy.wait(700);

    criacaoPerguntaIntDat();
}

const criacaoPerguntaIntDat = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('Intervalo datas').click();
    cy.wait(700);
    cy.get('app-resposta-data-inicio-fim.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('app-resposta-data-inicio-fim.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pIntData)
    cy.wait(700);

    criacaoPerguntaCPF();
}

const criacaoPerguntaCPF = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('CPF').click();
    cy.wait(700);
    cy.get('app-resposta-cpf.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('app-resposta-cpf.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pCpf)
    cy.wait(700);

    criacaoPerguntaCNPJ();
}

const criacaoPerguntaCNPJ = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('CNPJ').click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pCnpj)
    cy.wait(700);

    criacaoPerguntaVeic();
}

const criacaoPerguntaVeic = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('Veículo').click();
    cy.wait(700);
    cy.get('app-resposta-veiculo.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('app-resposta-veiculo.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pVeicu)
    cy.wait(700);

    criacaoPerguntaNumProc();
}

const criacaoPerguntaNumProc = () => {
    cy.get('.section-1 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(1000);
    cy.get('#pn_id_15').contains('Número do Processo').click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click();
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').type(perguntasFis.pNumProcs)
    cy.wait(700);

    salvarSessao1();
}

const salvarSessao1 = () => {
    cy.get('#pn_id_6_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);

    categInfoRelacio();
}

const categInfoRelacio = () => {
    cy.get('.section-2 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(100);
    cy.get('#pn_id_16').contains("Endereço").click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click().type(perguntasFis.SPInfoRelac);
    cy.wait(700);

    salvarSessao2();
}

const salvarSessao2 = () => {
    cy.get('#pn_id_7_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);

    categInfoSociais();
}

const categInfoSociais = () => {
    cy.get('.section-3 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(100);
    cy.get('#pn_id_17').contains("Endereço").click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click().type(perguntasFis.SPInfoSociais);
    cy.wait(700);

    salvarSessao3();
}

const salvarSessao3 = () => {
    cy.get('#pn_id_8_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);

    categInfoSaude();
}

const categInfoSaude = () => {
    cy.get('.section-4 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(100);
    cy.get('#pn_id_18').contains("Endereço").click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click().type(perguntasFis.SPInfoSaude);
    cy.wait(700);

    salvarSessao4();
}

const salvarSessao4 = () => {
    cy.get('#pn_id_9_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);
    categInfoJuridico();
}

const categInfoJuridico = () => {
    cy.get('.section-5 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(100);
    cy.get('#pn_id_19').contains("Endereço").click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click().type(perguntasFis.SPInfoJudicEPolic);
    cy.wait(700);

    salvarSessao5();
}

const salvarSessao5 = () => {
    cy.get('#pn_id_10_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);

    categInfoProfissionais();
}

const categInfoProfissionais = () => {
    cy.get('.section-6 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(100);
    cy.get('#pn_id_20').contains("Endereço").click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click().type(perguntasFis.SPInfoProfissionais);
    cy.wait(700);

    salvarSessao6();
}

const salvarSessao6 = () => {
    cy.get('#pn_id_11_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);

    categInfoEscolares();
}

const categInfoEscolares = () => {
    cy.get('.section-7 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(100);
    cy.get('#pn_id_21').contains("Endereço").click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click().type(perguntasFis.SPInfoEscolares);
    cy.wait(700);

    salvarSessao7();
}

const salvarSessao7 = () => {
    cy.get('#pn_id_12_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);

    categInfoEconoEPatri();
}

const categInfoEconoEPatri = () => {
    cy.get('.section-8 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(100);
    cy.get('#pn_id_22').contains("Endereço").click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click().type(perguntasFis.SPInfoEsonôEPatri);
    cy.wait(700);

    salvarSessao8();
}

const salvarSessao8 = () => {
    cy.get('#pn_id_13_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);

    categInfoAnexos();
}

const categInfoAnexos = () => {
    cy.get('.section-9 > :nth-child(1) > .principal-controls > p-toolbar.p-element > .p-toolbar > .p-toolbar-group-end > .arrow-down-button > .p-ripple').click();
    cy.wait(100);
    cy.get('#pn_id_23').contains("Endereço").click();
    cy.wait(700);
    cy.get('form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').click().type(perguntasFis.SPInfoAnexos);
    cy.wait(700);

    salvarSessao9();
}

const salvarSessao9 = () => {
    cy.get('#pn_id_14_content > .p-accordion-content').contains('Salvar e Avançar').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(1000);

    salvarFIS();
}

const salvarFIS = () => {
    cy.get(':nth-child(3) > .btn').click();
    cy.get('.modal-body > .btn').click();
    cy.wait(2000);
    //cy.url().should('include', '/admin/formulario-sis');
};