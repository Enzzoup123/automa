export const enviarFIS = () => {
    cy.wait(1300)
    cy.get('.btn').click({force: true, multiple: true});
    cy.wait(1300)
    cy.get('.submit-button').click({force: true, multiple: true});
    cy.wait(1300)
    cy.get('.btn-modal').click({force: true, multiple: true});
    cy.wait(1300)
    verificarModal();
    cy.wait(2200)
    revisarProtocolo();
}

function verificarModal() {
    cy.get('body').then($body => {
      if ($body.find('.modal-body').length > 0) {
        cy.get('.modal-body').within(() => {
          cy.contains('button', 'Entendi').click();
        });
        cy.log('Botão "Entendi" clicado!');
      } else {
        cy.log('Modal não encontrado, esperando...');
        cy.wait(2000); // Espera 2 segundos antes de tentar novamente
        verificarModal();
      }
    });
  }

const revisarProtocolo = () => {
    cy.wait(700)

    cy.get('.body-header > div > .title').should('include.text', 'Protocolo de envio do formulário')

    cy.get('.close-icon').click();
    sairDoSistema();
};

export const sairDoSistema = () => {
    cy.get('.logout-icon').click();
    cy.get('#dropdownLogOutButton > :nth-child(2) > .dropdown > .dropdown-menu > li').click({ force: true });
    cy.wait(600)

    cy.clearCookies()
    cy.clearLocalStorage()
    cy.clearAllSessionStorage()
};

const limparCache = () => {
    cy.clearCookies()
    cy.wait(100)
    cy.clearLocalStorage()
    cy.wait(100)
    cy.clearAllSessionStorage()
    cy.wait(100)
}