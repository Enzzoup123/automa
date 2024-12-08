export const visitAdmin = () => {
    cy.visit('http://10.56.1.160/admin/');
    cy.title().should('include', 'SIS');
}

export const visitCandidato = () => {
    cy.visit('http://10.56.1.161/');
    cy.title().should('include', 'SIS');
}