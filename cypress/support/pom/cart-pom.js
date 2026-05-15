class CartPOM
{
    verifyCartNotEmpty(){
        cy.get('[data-test="cart-item"]').should('have.length.greaterThan', 0);
        cy.verifyVisible('[data-test="cart-total"]');
        cy.get('body').should('not.contain', 'cart is empty');
    }
    verifyEmptyCart(){
        cy.get('body').should('contain', 'cart is empty');
        cy.get('[data-test="cart-item"]').should('not.exist');
        cy.get('[data-test="proceed-1"]').should('not.exist');
    }
    updateItemQuantity(itemIndex, quantity){
        cy.get('[data-test="product-quantity"]').eq(itemIndex).clear().type(quantity);
        cy.clickElement('[data-test="update-cart"]');
    }
    removeCartItem(itemIndex){
        cy.get('[data-test="delete-product"]').eq(itemIndex).click();
    }
    applyCoupon(coupon){
        cy.fillField('[data-test="discount-code"]', coupon);
        cy.clickElement('[data-test="apply-discount-btn"]');
    }
    clickProceedCheckout(){
        cy.clickElement('[data-test="proceed-1"]');
    }
    clickContinueShopping(){
        cy.contains('Continue shopping').click();
        cy.verifyVisible('body');
        cy.verifyUrl('/');
    }
    fillShippingAddress(firstName, lastName, email, phone, address, city, state, zip){
        cy.fillField('[data-test="address"]', address);
        cy.fillField('[data-test="city"]', city);
        cy.fillField('[data-test="state"]', state);
        cy.get('[data-test="country"]').select('United States');
        cy.fillField('[data-test="postcode"]', zip);
    }
    fillPaymentInfo(cardNumber, expiry, cvv){
        cy.get('[data-test="payment-method-credit-card"]').check();
        cy.fillField('[data-test="credit-card-number"]', cardNumber);
        cy.fillField('[data-test="expiration-date"]', expiry);
        cy.fillField('[data-test="cvv"]', cvv);
    }
    clickPlaceOrder(){
        cy.clickElement('[data-test="finish"]');
    }
    verifyOrderConfirmation(){
        cy.verifyVisible('[data-test="order-confirmation"]');
        cy.verifyUrl('/checkout');
        cy.get('body').should('contain', 'Payment was successful');
    }
    getOrderNumber(){
        return cy.get('[data-test="order-confirmation"]');
    }
}
export default CartPOM
