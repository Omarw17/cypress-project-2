Cypress.Commands.add('login', (email, password) => {
    cy.visit('/auth/login');
    cy.fillField('[data-test="email"]', email);
    cy.fillField('[data-test="password"]', password);
    cy.clickElement('[data-test="login-submit"]');
});

Cypress.Commands.add('fillField', (selector, value) => {
    cy.get(selector).clear().type(value);
});

Cypress.Commands.add('clickElement', (selector) => {
    cy.get(selector).should('be.visible').click();
});

Cypress.Commands.add('navigateTo', (page) => {
    const urls = { home:'/', contact:'/contact', login:'/auth/login', register:'/auth/register', cart:'/checkout', account:'/account' };
    cy.visit(urls[page] || '/');
});

Cypress.Commands.add('verifyUrl', (urlPart) => {
    cy.url().should('include', urlPart);
});

Cypress.Commands.add('verifyVisible', (selector) => {
    cy.get(selector).should('be.visible');
});

Cypress.Commands.add('verifyText', (selector, text) => {
    cy.get(selector).should('contain', text);
});
