class SortPOM {

    sortBy(value) {
        cy.get('[data-test="sort"]', { timeout: 10000 }).should('be.visible').select(value);
        cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
    }

}

export default SortPOM;
