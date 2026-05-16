class SearchPOM {

    searchFor(term) {
        cy.get('[data-test="search-query"]', { timeout: 10000 }).clear().type(term);
        cy.get('[data-test="search-submit"]').click();
        cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
    }

    verifyResultsVisible() {
        cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
    }

    verifyResultsContain(text) {
        cy.get('[data-test="product-name"]', { timeout: 15000 }).first().invoke('text').then((t) => {
            expect(t.toLowerCase()).to.include(text.toLowerCase());
        });
    }

}

export default SearchPOM;
