class CategoryPOM {

    clickHandTools() {
        cy.visit('/category/hand-tools');
        cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
    }

    clickPowerTools() {
        cy.visit('/category/power-tools');
        cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
    }

    clickOther() {
        cy.visit('/category/other');
        cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
    }

}

export default CategoryPOM;
