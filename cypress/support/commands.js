Cypress.Commands.add('login', (email, password) => {
    // Use API login to avoid UI rate-limiting and account lockouts
    cy.request({
        method: 'POST',
        url: 'https://api.practicesoftwaretesting.com/users/login',
        body: { email, password },
        failOnStatusCode: false,
    }).then((response) => {
        if (response.status === 200 && response.body.access_token) {
            window.localStorage.setItem('token', response.body.access_token);
        }
    });
    cy.visit('/account');
    cy.get('[data-test="nav-menu"]', { timeout: 15000 }).should('be.visible');
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
