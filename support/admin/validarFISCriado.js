import MassaDado from '../../fixtures/MassaDado.json';
import perguntasFis from '../../fixtures/perguntasFis.json';

export const validarFISCriado = () => { // Após arrumar o bug das perguntas duplicadas, verificar se aqui está tudo ok.
    cy.get('#card-recent .card-body .card-title').then($list => {
        const titulos = [];
        $list.each((index, el) => {
            titulos.push(el.innerText.trim());
        });
        if (titulos.includes(MassaDado.tituloFIS)) {
            cy.log("FIS criado localizado!");
            entrarNoFis();
        }
    })
}

const entrarNoFis = () => { // (opcional) - Entrar exatamente onde o formulario se encontra e nao simplesmente clicar sempre no primeiro.
    cy.get(':nth-child(1) > #card-recent > .card-body > .ultimo-acesso > .dropdown > #dropdownMenuButton1').click();
    cy.wait(360);
    cy.get(':nth-child(1) > #card-recent > .card-body > .ultimo-acesso > .dropdown > .dropdown-menu > :nth-child(1) > .dropdown-item').click();
    cy.wait(2000);

    validarTituloFIS();
}

const validarTituloFIS = () => {
    cy.get('#input-titulo-formulario').should('have.value', MassaDado.tituloFIS);

    entrarNaSessao1();
}

const entrarNaSessao1 = () => {
    cy.get('.cadastrar-formulario').contains('1. Informações Pessoais').click();
    cy.wait(700);
    validarPerguntS1();
}

const validarPerguntS1 = () => {
    cy.get('app-resposta-endereco.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get('app-resposta-endereco.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pEnd).should('be.visible');
    cy.wait(150);
    cy.get(':nth-child(2) > .editable-content > app-resposta-curta.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.2 Tipo pergunta - Resposta curta').should('be.visible');
    cy.get(':nth-child(2) > .editable-content > app-resposta-curta.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pRCurta).should('be.visible');
    cy.wait(150);
    cy.get('app-resposta-longa.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.3 Tipo pergunta - Resposta longa').should('be.visible');
    cy.get('app-resposta-longa.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pRLonga).should('be.visible');
    cy.wait(150);
    cy.get('app-resposta-multipla-escolha.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.4 Tipo pergunta - Múltipla escolha').should('be.visible');
    cy.get('app-resposta-multipla-escolha.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pMultiEs.titulo).should('be.visible');
    cy.get('app-resposta-multipla-escolha.ng-star-inserted > .card-pergunta > form.ng-untouched > .radio-options > :nth-child(1) > .input-group > .input-value').should('have.value', perguntasFis.pMultiEs.r1);
    cy.get('app-resposta-multipla-escolha.ng-star-inserted > .card-pergunta > form.ng-untouched > .radio-options > :nth-child(2) > .input-group > .input-value').should('have.value', perguntasFis.pMultiEs.r2);
    cy.wait(150);
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.5 Tipo pergunta - Caixa de seleção').should('be.visible');
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pCaixSele.titulo).should('be.visible');
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-untouched > .radio-options > :nth-child(1) > .input-group > .input-value').should('have.value', perguntasFis.pCaixSele.r1);
    cy.get('app-resposta-caixa-selecao.ng-star-inserted > .card-pergunta > form.ng-untouched > .radio-options > :nth-child(2) > .input-group > .input-value').should('have.value', perguntasFis.pCaixSele.r2);
    cy.wait(150);
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.6 Tipo pergunta - Lista suspensa').should('be.visible');
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pLista.titulo).should('be.visible');
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-untouched > .radio-options > :nth-child(1) > .input-group > .input-value').should('have.value', perguntasFis.pLista.r1);
    cy.get('app-resposta-lista-suspensa.ng-star-inserted > .card-pergunta > form.ng-untouched > .radio-options > :nth-child(2) > .input-group > .input-value').should('have.value', perguntasFis.pLista.r2);
    cy.wait(150);
    cy.get('app-resposta-data.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.7 Tipo pergunta - Data').should('be.visible');
    cy.get('app-resposta-data.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pData).should('be.visible');
    cy.wait(150);
    cy.get('app-resposta-hora.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.8 Tipo pergunta - Horário').should('be.visible');
    cy.get('app-resposta-hora.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pHorario).should('be.visible');
    cy.wait(150);
    cy.get('app-resposta-data-inicio-fim.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.9 Tipo pergunta - Data início e fim').should('be.visible');
    cy.get('app-resposta-data-inicio-fim.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pIntData).should('be.visible');
    cy.wait(150);
    cy.get('app-resposta-cpf.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.10 Tipo pergunta - CPF').should('be.visible');
    cy.get('app-resposta-cpf.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pCpf).should('be.visible');
    cy.wait(150);
    cy.get('app-resposta-cnpj.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.11 Tipo pergunta - CNPJ').should('be.visible');
    cy.get('app-resposta-cnpj.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pCnpj).should('be.visible');
    cy.wait(150);
    cy.get('app-resposta-veiculo.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.12 Tipo pergunta - Veículo').should('be.visible');
    cy.get('app-resposta-veiculo.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pVeicu).should('be.visible');
    cy.wait(150);
    cy.get('app-resposta-numero-processo.ng-star-inserted > .card-pergunta > .pergunta-header > .pergunta-title').contains('1.13 Tipo pergunta - Número do Processo').should('be.visible');
    cy.get('app-resposta-numero-processo.ng-star-inserted > .card-pergunta > form.ng-untouched > .p-element > .p-editor-container > .p-editor-content > .ql-editor').contains(perguntasFis.pNumProcs).should('be.visible');
    cy.log('Sessão 1 - foi validado tudo com sucesso!');

    entrarNaSessao2();
}

const entrarNaSessao2 = () => {
    cy.get('.cadastrar-formulario').contains('2. Informações de Relacionamentos').click();
    cy.wait(700);
    validarPerguntS2();
}

const validarPerguntS2 = () => {
    cy.get(':nth-child(2) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains('2.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get(':nth-child(2) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains(perguntasFis.SPInfoRelac).should('be.visible');
    cy.log('Sessão 2- Foi validado tudo com sucesso!');

    entrarNaSessao3();
}

const entrarNaSessao3 = () => {
    cy.get('.cadastrar-formulario').contains('3. Informações Sociais').click();
    cy.wait(700);
    validarPerguntS3();
}

const validarPerguntS3 = () => {
    cy.get(':nth-child(3) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains('3.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get(':nth-child(3) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains(perguntasFis.SPInfoSociais).should('be.visible');
    cy.log('Sessão 3- Foi validado tudo com sucesso!');

    entrarNaSessao4();
}

const entrarNaSessao4 = () => {
    cy.get('.cadastrar-formulario').contains('4. Informações de Saúde').click();
    cy.wait(700);
    validarPerguntS4();
}

const validarPerguntS4 = () => {
    cy.get(':nth-child(4) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains('4.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get(':nth-child(4) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains(perguntasFis.SPInfoSaude).should('be.visible');
    cy.log('Sessão 4- Foi validado tudo com sucesso!');

    entrarNaSessao5();
}

const entrarNaSessao5 = () => {
    cy.get('.cadastrar-formulario').contains('5. Informações Judiciais e Policiais').click();
    cy.wait(700);
    validarPerguntS5();
}

const validarPerguntS5 = () => {
    cy.get(':nth-child(5) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains('5.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get(':nth-child(5) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains(perguntasFis.SPInfoJudicEPolic).should('be.visible');
    cy.log('Sessão 5- Foi validado tudo com sucesso!');

    entrarNaSessao6();
}

const entrarNaSessao6 = () => {
    cy.get('.cadastrar-formulario').contains('6. Informações Profissionais').click();
    cy.wait(700);
    validarPerguntS6();
}

const validarPerguntS6 = () => {
    cy.get(':nth-child(6) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains('6.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get(':nth-child(6) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains(perguntasFis.SPInfoProfissionais).should('be.visible');
    cy.log('Sessão 6- Foi validado tudo com sucesso!');

    entrarNaSessao7();
}

const entrarNaSessao7 = () => {
    cy.get('.cadastrar-formulario').contains('7. Informações Escolares').click();
    cy.wait(700);
    validarPerguntS7();
}

const validarPerguntS7 = () => {
    cy.get(':nth-child(7) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains('7.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get(':nth-child(7) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains(perguntasFis.SPInfoEscolares).should('be.visible');
    cy.log('Sessão 7- Foi validado tudo com sucesso!');

    entrarNaSessao8();
}

const entrarNaSessao8 = () => {
    cy.get('.cadastrar-formulario').contains('8. Informações Econômicas e Patrimoniais').click();
    cy.wait(700);
    validarPerguntS8();
}

const validarPerguntS8 = () => {
    cy.get(':nth-child(8) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains('8.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get(':nth-child(8) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains(perguntasFis.SPInfoEsonôEPatri).should('be.visible');
    cy.log('Sessão 8- Foi validado tudo com sucesso!');

    entrarNaSessao9();
}

const entrarNaSessao9 = () => {
    cy.get('.cadastrar-formulario').contains('9. Informações Anexos').click();
    cy.wait(700);
    validarPerguntS9();
}

const validarPerguntS9 = () => {
    cy.get(':nth-child(9) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains('9.1 Tipo pergunta - Endereço').should('be.visible');
    cy.get(':nth-child(9) > app-form-section > p-accordiontab.p-element > .p-accordion-tab').contains(perguntasFis.SPInfoAnexos).should('be.visible');
    cy.log('Sessão 9- Foi validado tudo com sucesso!');

    cy.log('Todo o FIS foi validado com sucesso!');
    cy.get('.nav-bar').contains('Cadastrar Formulário').click();
}