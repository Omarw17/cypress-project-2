/**
 * Shopping Cart POM Class
 * Handles shopping cart operations, checkout, and order management
 */

export class CartPOM {
  // Cart page selectors
  cartItem = '.cart-item';
  cartItemTitle = '.cart-item-title';
  cartItemPrice = '.cart-item-price';
  cartItemQuantity = 'input[name="quantity"]';
  removeButton = 'button[id*="remove"]';
  updateButton = 'button[id*="update"]';
  cartTotal = '.cart-total';
  subtotal = '.subtotal';
  shippingCost = '.shipping-cost';
  tax = '.tax-amount';
  emptyCartMessage = '.empty-cart';
  proceedCheckoutButton = 'button:contains("Proceed to checkout")';
  continueShopping = 'a:contains("Continue shopping")';
  applyCouponInput = 'input[name="coupon"]';
  applyCouponButton = 'button[id="apply-coupon"]';

  // Checkout selectors
  checkoutForm = '.checkout-form';
  firstNameCheckout = 'input[name="firstName"]';
  lastNameCheckout = 'input[name="lastName"]';
  emailCheckout = 'input[name="email"]';
  phoneCheckout = 'input[name="phone"]';
  addressCheckout = 'input[name="address"]';
  cityCheckout = 'input[name="city"]';
  stateCheckout = 'input[name="state"]';
  zipCheckout = 'input[name="zip"]';
  cardNumberInput = 'input[name="cardNumber"]';
  expiryInput = 'input[name="expiry"]';
  cvvInput = 'input[name="cvv"]';
  placeOrderButton = 'button[id="place-order"]';
  orderConfirmation = '.order-confirmation';
  orderNumber = '.order-number';

  // Cart methods
  verifyCartNotEmpty() {
    cy.get(this.cartItem).should('have.length.greaterThan', 0);
  }

  verifyEmptyCart() {
    cy.get(this.emptyCartMessage).should('be.visible');
  }

  getCartItemCount() {
    return cy.get(this.cartItem).length;
  }

  updateItemQuantity(itemIndex, newQuantity) {
    cy.get(this.cartItem).eq(itemIndex).within(() => {
      cy.get(this.cartItemQuantity).clear().type(newQuantity);
      cy.get(this.updateButton).click();
    });
  }

  removeCartItem(itemIndex) {
    cy.get(this.cartItem).eq(itemIndex).within(() => {
      cy.get(this.removeButton).click();
    });
  }

  viewCartTotal() {
    return cy.get(this.cartTotal).invoke('text');
  }

  applyCoupon(couponCode) {
    cy.get(this.applyCouponInput).type(couponCode);
    cy.get(this.applyCouponButton).click();
  }

  clickProceedCheckout() {
    cy.get(this.proceedCheckoutButton).click();
  }

  clickContinueShopping() {
    cy.get(this.continueShopping).click();
  }

  // Checkout methods
  fillShippingAddress(firstName, lastName, email, phone, address, city, state, zip) {
    cy.get(this.firstNameCheckout).clear().type(firstName);
    cy.get(this.lastNameCheckout).clear().type(lastName);
    cy.get(this.emailCheckout).clear().type(email);
    cy.get(this.phoneCheckout).clear().type(phone);
    cy.get(this.addressCheckout).clear().type(address);
    cy.get(this.cityCheckout).clear().type(city);
    cy.get(this.stateCheckout).clear().type(state);
    cy.get(this.zipCheckout).clear().type(zip);
  }

  fillPaymentInfo(cardNumber, expiry, cvv) {
    cy.get(this.cardNumberInput).clear().type(cardNumber);
    cy.get(this.expiryInput).clear().type(expiry);
    cy.get(this.cvvInput).clear().type(cvv);
  }

  clickPlaceOrder() {
    cy.get(this.placeOrderButton).click();
  }

  verifyOrderConfirmation() {
    cy.get(this.orderConfirmation).should('be.visible');
  }

  getOrderNumber() {
    return cy.get(this.orderNumber).invoke('text');
  }

  completeCheckout(firstName, lastName, email, phone, address, city, state, zip, cardNumber, expiry, cvv) {
    this.fillShippingAddress(firstName, lastName, email, phone, address, city, state, zip);
    this.fillPaymentInfo(cardNumber, expiry, cvv);
    this.clickPlaceOrder();
  }
}
