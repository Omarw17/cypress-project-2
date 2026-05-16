class AccountPOM {

    clickEditProfile() {
        cy.get('[data-test="nav-profile"]', { timeout: 15000 }).should('be.visible').click();
    }

    updateFirstName(firstName) {
        cy.get('[data-test="first-name"]', { timeout: 10000 }).clear().type(firstName);
    }

    updateLastName(lastName) {
        cy.get('[data-test="last-name"]', { timeout: 10000 }).clear().type(lastName);
    }

    clickSaveProfile() {
        cy.get('[data-test="update-profile-submit"]', { timeout: 15000 }).should('be.visible').click();
    }

    verifyAccountPageVisible() {
        cy.get('[data-test="nav-menu"]', { timeout: 15000 }).should('be.visible');
        cy.url().should('include', '/account');
    }

    verifyOrderHistoryVisible() {
        cy.get('[data-test="order-history"]', { timeout: 15000 }).should('be.visible');
    }

}

export default AccountPOM;
