import MassaDado from '../../fixtures/MassaDado.json'

export const loginAdm = () => {
    cy.get('.p-inputtext').type(MassaDado.cpfAdm);
    cy.get('#input-senha').type(MassaDado.senha);
    cy.get('.btn').click({ force: true });
};