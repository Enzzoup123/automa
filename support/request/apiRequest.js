// cypress/support/request/apiRequest.js
import { CONFIG } from "../config";

// Função para gerar o token
export function generateToken(cpf) {
    return cy.request({
        method: 'POST',
        url: 'http://10.56.1.162:8080/realms/OIDC/protocol/openid-connect/token',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        form: true,
        body: {
            grant_type: 'password',
            client_id: 'sis',
            username: cpf,
            password: '123456',
            client_secret: 'P0XcCXuyvpIb5UWbR80YP7oJ5Xeyqada',
            scope: 'openid profile roles'
        }
    });
}

// Função para criar uma inscricao
export function criarInscricao(token, inscricao) {
    return cy.request({
        method: 'POST',
        url: 'http://10.56.1.162/hml/sis/inscricao/forcar',
        headers: {
            'Authorization': `Bearer ${token}`,
        },
        body: {
            inscricao: inscricao,
            dataNascimento: "1999-07-13",
            turmaSiselId: CONFIG.turma
        }
    });
}
