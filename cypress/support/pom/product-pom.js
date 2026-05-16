class ProductPOM {

    clickProduct(index) {
        cy.get('[data-test="product-name"]', { timeout: 15000 }).eq(index).should('be.visible').click();
    }

    addProductToCart(index) {
        cy.request('POST', 'https://api.practicesoftwaretesting.com/carts', {}).then((cartResp) => {
            const cartId = cartResp.body.id;
            cy.request('GET', 'https://api.practicesoftwaretesting.com/products?page=1').then((prodResp) => {
                const productId = prodResp.body.data[index].id;
                cy.request('POST', `https://api.practicesoftwaretesting.com/carts/${cartId}`, {
                    product_id: productId,
                    quantity: 1
                }).then(() => {
                    cy.visit('/');
                    cy.window().then((win) => {
                        win.sessionStorage.setItem('cart_id', cartId);
                    });
                });
            });
        });
    }

    verifyProductsDisplayed() {
        cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
    }

    verifyProductDetailVisible() {
        cy.url().should('include', '/product/');
        cy.get('[data-test="product-name"]', { timeout: 10000 }).should('be.visible');
        cy.get('[data-test="add-to-cart"]').should('be.visible');
    }

}

export default ProductPOM;
