import './commands';

beforeEach(function () {
    Cypress.on('uncaught:exception', () => false);
});

afterEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
    cy.window().then((win) => {
        win.sessionStorage.clear();
    });
});
