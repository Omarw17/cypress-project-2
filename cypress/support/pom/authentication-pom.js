class AuthenticationPOM {

    login(email, password) {
        cy.get('[data-test="email"]').clear().type(email);
        cy.get('[data-test="password"]').clear().type(password);
        cy.get('[data-test="login-submit"]').click();
        cy.get('body', { timeout: 10000 }).should('be.visible');
    }

    fillEmail(email) {
        cy.get('[data-test="email"]').clear().type(email);
    }

    fillPassword(password) {
        cy.get('[data-test="password"]').clear().type(password);
    }

    clickLogin() {
        cy.get('[data-test="login-submit"]').click();
    }

    verifySuccessMessage() {
        cy.get('[data-test="nav-menu"]', { timeout: 15000 }).should('be.visible');
    }

    verifyErrorMessage() {
        cy.get('[data-test="login-error"]', { timeout: 10000 }).should('be.visible')
            .and('contain.text', 'Invalid');
        cy.url().should('include', '/auth/login');
    }

    verifyLoginPageTitle() {
        cy.url().should('include', '/auth/login');
        cy.get('[data-test="login-submit"]').should('be.visible');
        cy.get('h3').should('contain.text', 'Login');
    }

}

export default AuthenticationPOM;
