import './commands';

before(function () {
    cy.fixture('users').then(function (users) {
        globalThis.users = users;
    });
    cy.fixture('products').then(function (products) {
        globalThis.products = products;
    });
});

beforeEach(function () {
    Cypress.on('uncaught:exception', () => false);
});

afterEach(function () {
    cy.clearCookies();
    cy.clearLocalStorage();
});
