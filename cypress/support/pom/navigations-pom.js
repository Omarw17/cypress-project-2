class NavigationPOM {

    clickHome() {
        cy.get('[data-test="nav-home"]', { timeout: 10000 }).click();
    }

    clickContact() {
        cy.get('[data-test="nav-contact"]', { timeout: 10000 }).click();
    }

    clickSignIn() {
        cy.get('[data-test="nav-sign-in"]', { timeout: 10000 }).click();
    }

    clickCart() {
        cy.visit('/checkout');
        cy.get('body', { timeout: 15000 }).should('be.visible');
        cy.wait(2000);
    }

    clickAccount() {
        cy.get('[data-test="nav-menu"]', { timeout: 10000 }).should('be.visible').click();
        cy.get('[data-test="nav-my-account"]').click({ force: true });
    }

    searchProduct(productName) {
        cy.get('[data-test="search-query"]', { timeout: 10000 }).clear().type(productName);
        cy.get('[data-test="search-submit"]').click();
        cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
    }

}

export default NavigationPOM;
