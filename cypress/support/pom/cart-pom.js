class CartPOM {
    removeCartItem(itemIndex) {
        cy.get('tbody .btn-danger', { timeout: 10000 }).eq(itemIndex).click();
        cy.wait(1500);
    }
    verifyCartNotEmpty() {
        cy.get('[data-test="product-title"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
        cy.get('[data-test="proceed-1"]').should('exist');
    }
    verifyEmptyCart() {
        cy.contains('The cart is empty. Nothing to display.', { timeout: 15000 }).should('exist');
        cy.get('[data-test="product-title"]').should('not.exist');
    }
}
export default CartPOM;
