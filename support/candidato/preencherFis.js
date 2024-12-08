import respostasFis from '../../fixtures/respostasFis.json'
import { enviarFIS, sairDoSistema } from '../candidato/envioFisProtocolo.js'
import enderecos from '../../fixtures/enderecos.json'

  export const validarFISEnviado = () => {
  cy.get('.formulario-edital').then(($form) => {
    if ($form.find('button:contains("Revisar e enviar FIS")').length > 0) {
      validarSessao4();
    } else {
        sairDoSistema();
    }
  });
}

const validarSessao4 = () => {
    carregando();
    cy.get(':nth-child(4) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Concluído')) {
          validarSessao5();
        } else if (text.includes('Situação: Não Iniciado')) {
          perguntaInfoPessoais();
          responderSessao4();
        } else {
            cy.get('#dropdownMenuButton3').click();
            cy.get('.secao-andamento > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            responderSessao4();
        }
      });
};

const validarSessao5 = () => {
    cy.get(':nth-child(5) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Não Iniciado')) {
            cy.get(':nth-child(5) > .secao-title').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao6();
        } else if (text.includes('Situação: Concluído')) {
            validarSessao6();
        } else {
            cy.get('#dropdownMenuButton4').click();
            cy.get(':nth-child(5) > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao6();
        }
      });
}

const validarSessao6 = () => {
    cy.get(':nth-child(6) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Não Iniciado')) {
            cy.get(':nth-child(6) > .secao-title').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao7();
        } else if (text.includes('Situação: Concluído')) {
            validarSessao7();
        } else {
            cy.get('#dropdownMenuButton5').click();
            cy.get(':nth-child(6) > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao7();
        }
      });
}

const validarSessao7 = () => {
    cy.get(':nth-child(7) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Não Iniciado')) {
            cy.get(':nth-child(7) > .secao-title').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao8();
        } else if (text.includes('Situação: Concluído')) {
            validarSessao8();
        } else {
            cy.get('#dropdownMenuButton6').click();
            cy.get(':nth-child(7) > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao8();
        }
      });
}

const validarSessao8 = () => {
    cy.get(':nth-child(8) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Não Iniciado')) {
            cy.get(':nth-child(8) > .secao-title').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao9();
        } else if (text.includes('Situação: Concluído')) {
            validarSessao9();
        } else {
            cy.get('#dropdownMenuButton7').click();
            cy.get(':nth-child(8) > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao9();
        }
      });
}

const validarSessao9 = () => {
    cy.get(':nth-child(9) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Não Iniciado')) {
            cy.get(':nth-child(9) > .secao-title').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao10();
        } else if (text.includes('Situação: Concluído')) {
            validarSessao10();
        } else {
            cy.get('#dropdownMenuButton8').click();
            cy.get(':nth-child(9) > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao10();
        }
      });
}

const validarSessao10 = () => {
    cy.get(':nth-child(10) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Não Iniciado')) {
            cy.get(':nth-child(10) > .secao-title').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao11();
        } else if (text.includes('Situação: Concluído')) {
            validarSessao11();
        } else {
            cy.get('#dropdownMenuButton9').click();
            cy.get(':nth-child(10) > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao11();
        }
      });
}

const validarSessao11 = () => {
    cy.get(':nth-child(11) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Não Iniciado')) {
            cy.get(':nth-child(11) > .secao-title').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao12();
        } else if (text.includes('Situação: Concluído')) {
            validarSessao12();
        } else {
            cy.get('#dropdownMenuButton10').click();
            cy.get(':nth-child(11) > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            validarSessao12();
        }
      });
}

const validarSessao12 = () => {
    cy.get(':nth-child(12) > .card-footer > .secao-situacao').then(($el) => {
        const text = $el.text();
      
        if (text.includes('Situação: Não Iniciado')) {
            cy.get(':nth-child(12) > .secao-title').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            enviarFIS();
        } else if (text.includes('Situação: Concluído')) {
            enviarFIS();
        } else {
            cy.get('#dropdownMenuButton11').click();
            cy.get(':nth-child(12) > .dropdown > .dropdown-menu > .ng-star-inserted > .dropdown-item').click();
            gerarPreencherEndereco();
            cy.wait(500);
            cy.get('.perguntas-content > .btn').click({force: true});
            verificarModal();
            cy.wait(500);
            enviarFIS();
        }
      });
}

const gerarPreencherEndereco = () => {
    let indiceAleatorio = Math.floor(Math.random() * enderecos.cep.length);
    let cepAleatorio = enderecos.cep[indiceAleatorio];
    let chaveCepAleatorio = Object.keys(cepAleatorio)[0];
    let detalhesCepAleatorio = cepAleatorio[chaveCepAleatorio][0];

    cy.wait(300);
    cy.get('#input-resposta-endereco > .p-inputtext').clear({force: true}).type(chaveCepAleatorio);
    cy.wait(300);
    cy.get(':nth-child(2) > #input-resposta-endereco').clear({force: true}).type(detalhesCepAleatorio.rua);
    cy.wait(300);
    cy.get(':nth-child(3) > #input-resposta-endereco').clear({force: true}).type('Casa');
    cy.wait(300);
    cy.get(':nth-child(4) > #input-resposta-endereco').clear({force: true}).type(detalhesCepAleatorio.n);
    cy.wait(300);
    cy.get(':nth-child(4) > :nth-child(1) > #input-resposta-endereco').clear().type(detalhesCepAleatorio.bairro);
    cy.wait(300);
    cy.get(':nth-child(2) > app-autocomplete > .custom-autocomplete > .p-autocomplete > .p-ripple').click();
    cy.wait(300);
    cy.get('.p-autocomplete > #input-estado').clear({force: true});
    cy.get('.p-autocomplete > #input-estado').type(detalhesCepAleatorio.estado);
    cy.wait(300);
    cy.get('.card-title').contains(detalhesCepAleatorio.estado).click({force: true})
    cy.wait(300);
    cy.get(':nth-child(3) > app-autocomplete > .custom-autocomplete > .p-autocomplete > .p-ripple').click();
    cy.wait(300);
    cy.get('.p-autocomplete > #input-cidade').clear({force: true});
    cy.get('.p-autocomplete > #input-cidade').type(detalhesCepAleatorio.cidade);
    cy.wait(300);
    cy.get('.card-title').contains(detalhesCepAleatorio.cidade).click({force: true})
    cy.wait(1200);

    cy.wait(700)
}

const perguntaInfoPessoais = () => {
    cy.get('.formulario-edital-secoes > :nth-child(4)').click();
};

const responderSessao4 = () => {
    gerarPreencherEndereco();

    //Teste pergunta resposta curta
    cy.get('#input-resposta-curta').click()
    cy.get('#input-resposta-curta').type(respostasFis.Sessao4.pRCurta);
    cy.wait(700)

    //Teste pergunta resposta longa
    cy.get('#input-resposta-longa').click();
    cy.get('#input-resposta-longa').type(respostasFis.Sessao4.pRLonga);
    cy.wait(700)

    //Teste pergunta resposta multipla escolha
    cy.get(':nth-child(3) > .row > .col-md-3 > .p-element > .p-radiobutton > .p-radiobutton-box').click();
    cy.wait(500)
    cy.get('app-multi-select > form.ng-dirty > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJMultiEsco);
    cy.wait(700)

    //Teste pergunta resposta caixa de seleção
    cy.get(':nth-child(2) > .row > .col-md-3 > .p-element > .p-checkbox > .p-checkbox-box').click();
    cy.wait(500)
    cy.get('app-selecao > form.ng-dirty > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJCaixSele);
    cy.wait(700)

    //Teste pergunta resposta lista suspensa
    //cy.get('.p-dropdown-trigger').click();
    //cy.get('#pn_id_5_list li').contains('resposta lista suspensa teste 2').click();
    //cy.wait(500)
    //cy.get('#input-juntificativa-formulario').click().clear().type('Teste justificativa da resposta lista suspensa')
    //cy.wait(700)

    cy.get('[_ngcontent-ng-c2692225368=""][novalidate=""] > .card-title > app-flag-resposta-nao-aplicavel > .flag-resposta-nao-aplicavel > .label-check > #input-checkbox-nao-aplicavel').click();

    //Teste pergunta resposta data
    cy.get('.col-lg-12 > .p-inputwrapper > .w-100 > .p-inputtext').click().type(respostasFis.Sessao4.pRData);
    cy.get(':nth-child(1) > [aria-label="1"] > .p-ripple').click();
    cy.wait(500)
    cy.get('app-data > form.ng-dirty > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJData)
    cy.wait(700)

    //Teste pergunta resposta upload de arquivo
    

    //Teste pergunta resposta horario
    cy.get('#input-time > .p-calendar > .p-inputtext').click().type(respostasFis.Sessao4.pRHora)
    cy.get('app-resposta-hora > form.ng-dirty > .card-title > .pergunta-title > p').click();
    cy.wait(500)
    cy.get('app-resposta-hora > form.ng-dirty > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJHora)
    cy.wait(700)

    //Teste pergunta resposta intervalo de data
    cy.get('.ol-md-6 > .p-inputwrapper > .w-100 > .p-inputtext').click().type(respostasFis.Sessao4.pRIntData1);
    cy.wait(300)
    cy.get(':nth-child(1) > [aria-label="1"] > .p-ripple').click();
    cy.get('app-data-inicio-fim > form.ng-dirty > .card-title > .pergunta-title > p').click();
    cy.wait(500)
    cy.get('.col-md-6 > .p-inputwrapper > .w-100 > .p-inputtext').click().type(respostasFis.Sessao4.pRIntData2);
    cy.wait(300)
    cy.get(':nth-child(1) > [aria-label="1"] > .p-ripple').click();
    cy.get('app-data-inicio-fim > form.ng-dirty > .card-title > .pergunta-title > p').click();
    cy.wait(500)
    cy.get('app-data-inicio-fim > form.ng-dirty > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJIntData)
    cy.wait(700)

    //Teste pergunta resposta CPF
    cy.get('#input-resposta-cpf > .p-inputtext').click().type(respostasFis.Sessao4.pRCpf)
    cy.get('#input-resposta-nome').click().type(respostasFis.Sessao4.pRCpfNome)
    cy.wait(500)
    cy.get('app-resposta-cpf > form.ng-touched > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJCpf)
    cy.wait(700)

    //Teste pergunta resposta CNPJ
    cy.get('#input-resposta-cnpj > .p-inputtext').click().type(respostasFis.Sessao4.pRCnpj)
    cy.get('#input-resposta-nome-fantasia').click().type(respostasFis.Sessao4.pRCnpjNome)
    cy.get('#input-resposta-razao-social').click().type(respostasFis.Sessao4.pRCnpjRazao)
    cy.wait(500)
    cy.get('app-resposta-cnpj > form.ng-touched > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJCnpj)
    cy.wait(700)

    //Teste pergunta resposta veiculo
    cy.get('#input-resposta-chassi > .p-inputtext').click().type(respostasFis.Sessao4.pRVeicCha);
    cy.get('#input-resposta-carroceria').click().type(respostasFis.Sessao4.pRVeicCarr);
    cy.get('#input-resposta-placa > .p-inputtext').click().type(respostasFis.Sessao4.pRVeicPlac)
    cy.wait(500)
    cy.get('app-resposta-veiculo > form.ng-touched > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJVeic)
    cy.wait(700)

    //Teste pergunta resposta numero do processo
    cy.get('#input-resposta-numero-processo > .p-inputtext').click().type(respostasFis.Sessao4.pRNumProc)
    cy.wait(500)
    cy.get('app-resposta-numero-processo > form.ng-dirty > .card-title > app-resposta-justificativa > .resposta-justificativa > .div-agrupador > .div-input > #input-juntificativa-formulario').clear().click().type(respostasFis.Sessao4.pJNumProc)
    cy.wait(700)

    //Salvar sessão
    cy.get('.perguntas-content > .btn').contains('Salvar e Avançar').click();
    cy.wait(100)
    verificarModal();
    cy.wait(700);
    validarSessao5();
};

function verificarModal() {
    cy.get('body').then($body => {
        if ($body.find('.modal-body').length > 0) {
            cy.get('.modal-body').within(() => {
                cy.contains('button', 'Entendi').click();
            });
            cy.log('Botão "Entendi" clicado!');
        }else {
            cy.log('Modal não encontrado, esperando...');
            cy.wait(2000); // Espera 2 segundos antes de tentar novamente
            verificarModal();
        }
    });
}

function carregando() {
    cy.get('body').then($body => {
        if ($body.find('.formulario-edital-secoes > :nth-child(4)').length > 0) {
            cy.log('Carregado... Avançando...');
        }else {
            cy.log('Ainda não foi carregado, esperando...');
            cy.wait(2000); // Espera 2 segundos antes de tentar novamente
            carregando();
        }
    });
}