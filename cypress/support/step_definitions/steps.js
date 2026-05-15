import { Given, When, Then, And } from '@badeball/cypress-cucumber-preprocessor';
import { NavigationPOM } from '../pom/navigations-pom';
import { AuthenticationPOM } from '../pom/authentication-pom';
import { ProductPOM } from '../pom/product-pom';
import { CartPOM } from '../pom/cart-pom';
import { ContactPOM } from '../pom/contact-pom';
import { AccountPOM } from '../pom/account-pom';

const navigationPOM = new NavigationPOM();
const authenticationPOM = new AuthenticationPOM();
const productPOM = new ProductPOM();
const cartPOM = new CartPOM();
const contactPOM = new ContactPOM();
const accountPOM = new AccountPOM();

// ================== NAVIGATION STEPS ==================

Given('I navigate to the home page', () => {
  cy.visit('https://practicesoftwaretesting.com');
});

Given('I navigate to the products page', () => {
  cy.visit('https://practicesoftwaretesting.com/products');
});

Given('I navigate to the contact page', () => {
  cy.visit('https://practicesoftwaretesting.com/contact');
});

Given('I navigate to the login page', () => {
  cy.visit('https://practicesoftwaretesting.com/login');
});

Given('I navigate to the registration page', () => {
  cy.visit('https://practicesoftwaretesting.com/register');
});

When('I click on the home link', () => {
  navigationPOM.clickHome();
});

When('I click on the products link', () => {
  navigationPOM.clickProducts();
});

When('I click on the contact link', () => {
  navigationPOM.clickContact();
});

When('I click on the sign in link', () => {
  navigationPOM.clickSignIn();
});

When('I click on the sign up link', () => {
  navigationPOM.clickSignUp();
});

When('I click on the cart link', () => {
  navigationPOM.clickCart();
});

When('I click on the account link', () => {
  navigationPOM.clickAccount();
});

When('I search for {string}', (productName) => {
  navigationPOM.searchProduct(productName);
});

Then('I should be on {string} page', (pageName) => {
  navigationPOM.verifyNavigation(pageName.toLowerCase());
});

// ================== AUTHENTICATION STEPS ==================

When('I enter email {string}', (email) => {
  authenticationPOM.fillEmail(email);
});

When('I enter password {string}', (password) => {
  authenticationPOM.fillPassword(password);
});

When('I click the login button', () => {
  authenticationPOM.clickLogin();
});

When('I login with email {string} and password {string}', (email, password) => {
  authenticationPOM.login(email, password);
});

When('I enter first name {string}', (firstName) => {
  authenticationPOM.fillFirstName(firstName);
});

When('I enter last name {string}', (lastName) => {
  authenticationPOM.fillLastName(lastName);
});

When('I enter registration email {string}', (email) => {
  authenticationPOM.fillRegisterEmail(email);
});

When('I enter registration password {string}', (password) => {
  authenticationPOM.fillRegisterPassword(password);
});

When('I confirm password {string}', (password) => {
  authenticationPOM.fillConfirmPassword(password);
});

When('I agree to terms and conditions', () => {
  authenticationPOM.checkAgreeTerms();
});

When('I click the register button', () => {
  authenticationPOM.clickRegister();
});

When('I register with {string}, {string}, {string}, {string}', (firstName, lastName, email, password) => {
  authenticationPOM.register(firstName, lastName, email, password);
});

Then('I should see the login page title', () => {
  authenticationPOM.verifyLoginPageTitle();
});

Then('I should see a success message', () => {
  authenticationPOM.verifySuccessMessage();
});

Then('I should see an error message', () => {
  authenticationPOM.verifyErrorMessage();
});

// ================== PRODUCT STEPS ==================

Then('I should see product listings', () => {
  productPOM.verifyProductsDisplayed();
});

Then('I should see no products message', () => {
  productPOM.verifyNoProductsMessage();
});

When('I click on product at index {int}', (index) => {
  productPOM.clickProduct(index);
});

When('I click on product {string}', (productName) => {
  productPOM.clickProductByName(productName);
});

When('I add product at index {int} to cart', (index) => {
  productPOM.addProductToCart(index);
});

When('I set quantity to {int}', (quantity) => {
  productPOM.setQuantity(quantity);
});

When('I click add to cart button', () => {
  productPOM.clickAddToCartFromDetail();
});

When('I add product with quantity {int}', (quantity) => {
  productPOM.addToCartWithQuantity(quantity);
});

When('I filter by category {string}', (category) => {
  productPOM.filterByCategory(category);
});

When('I sort by {string}', (sortOption) => {
  productPOM.sortByPrice(sortOption);
});

Then('I should see product detail', () => {
  productPOM.verifyProductDetailVisible();
});

Then('product price should be {string}', (price) => {
  productPOM.verifyProductPrice(price);
});

// ================== CART STEPS ==================

When('I go to shopping cart', () => {
  navigationPOM.clickCart();
});

Then('my cart should not be empty', () => {
  cartPOM.verifyCartNotEmpty();
});

Then('my cart should be empty', () => {
  cartPOM.verifyEmptyCart();
});

When('I update item at index {int} quantity to {int}', (itemIndex, quantity) => {
  cartPOM.updateItemQuantity(itemIndex, quantity);
});

When('I remove item at index {int}', (itemIndex) => {
  cartPOM.removeCartItem(itemIndex);
});

When('I apply coupon code {string}', (coupon) => {
  cartPOM.applyCoupon(coupon);
});

When('I proceed to checkout', () => {
  cartPOM.clickProceedCheckout();
});

When('I continue shopping', () => {
  cartPOM.clickContinueShopping();
});

Then('I should see checkout form', () => {
  cy.get('.checkout-form').should('be.visible');
});

// ================== CHECKOUT STEPS ==================

When('I fill shipping address {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',
  (firstName, lastName, email, phone, address, city, state, zip) => {
    cartPOM.fillShippingAddress(firstName, lastName, email, phone, address, city, state, zip);
  });

When('I fill payment info {string}, {string}, {string}', (cardNumber, expiry, cvv) => {
  cartPOM.fillPaymentInfo(cardNumber, expiry, cvv);
});

When('I click place order', () => {
  cartPOM.clickPlaceOrder();
});

When('I complete checkout with {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',
  (firstName, lastName, email, phone, address, city, state, zip, cardNumber, expiry, cvv) => {
    cartPOM.completeCheckout(firstName, lastName, email, phone, address, city, state, zip, cardNumber, expiry, cvv);
  });

Then('I should see order confirmation', () => {
  cartPOM.verifyOrderConfirmation();
});

Then('I should see an order number', () => {
  cartPOM.getOrderNumber().should('exist');
});

// ================== CONTACT STEPS ==================

Then('I should see the contact page', () => {
  contactPOM.verifyContactPageVisible();
});

When('I fill contact form {string}, {string}, {string}, {string}, {string}',
  (firstName, lastName, email, subject, message) => {
    contactPOM.submitContactForm(firstName, lastName, email, subject, message);
  });

When('I fill full contact form {string}, {string}, {string}, {string}, {string}, {string}, {string}',
  (firstName, lastName, email, phone, category, subject, message) => {
    contactPOM.submitFullContactForm(firstName, lastName, email, phone, category, subject, message);
  });

When('I fill first name as {string}', (firstName) => {
  contactPOM.fillFirstName(firstName);
});

When('I fill last name as {string}', (lastName) => {
  contactPOM.fillLastName(lastName);
});

When('I fill email as {string}', (email) => {
  contactPOM.fillEmail(email);
});

When('I fill phone as {string}', (phone) => {
  contactPOM.fillPhone(phone);
});

When('I fill subject as {string}', (subject) => {
  contactPOM.fillSubject(subject);
});

When('I fill message as {string}', (message) => {
  contactPOM.fillMessage(message);
});

When('I select category {string}', (category) => {
  contactPOM.selectCategory(category);
});

When('I click submit button', () => {
  contactPOM.clickSubmit();
});

Then('I should see contact form success message', () => {
  contactPOM.verifySuccessMessage();
});

Then('I should see contact form error message', () => {
  contactPOM.verifyErrorMessage();
});

// ================== ACCOUNT STEPS ==================

Then('I should see account page', () => {
  accountPOM.verifyAccountPageVisible();
});

When('I click edit profile button', () => {
  accountPOM.clickEditProfile();
});

When('I update first name to {string}', (firstName) => {
  accountPOM.updateFirstName(firstName);
});

When('I update last name to {string}', (lastName) => {
  accountPOM.updateLastName(lastName);
});

When('I update email to {string}', (email) => {
  accountPOM.updateEmail(email);
});

When('I update phone to {string}', (phone) => {
  accountPOM.updatePhone(phone);
});

When('I update address to {string}', (address) => {
  accountPOM.updateAddress(address);
});

When('I update city to {string}', (city) => {
  accountPOM.updateCity(city);
});

When('I update state to {string}', (state) => {
  accountPOM.updateState(state);
});

When('I update zip to {string}', (zip) => {
  accountPOM.updateZip(zip);
});

When('I click save profile button', () => {
  accountPOM.clickSaveProfile();
});

When('I update profile with {string}, {string}, {string}, {string}, {string}, {string}, {string}, {string}',
  (firstName, lastName, email, phone, address, city, state, zip) => {
    accountPOM.updateFullProfile(firstName, lastName, email, phone, address, city, state, zip);
  });

When('I click change password button', () => {
  accountPOM.clickChangePassword();
});

When('I enter current password {string}', (password) => {
  accountPOM.fillCurrentPassword(password);
});

When('I enter new password {string}', (password) => {
  accountPOM.fillNewPassword(password);
});

When('I confirm new password {string}', (password) => {
  accountPOM.fillConfirmPassword(password);
});

When('I click update password button', () => {
  accountPOM.clickUpdatePassword();
});

When('I change password from {string} to {string}', (currentPassword, newPassword) => {
  accountPOM.changePassword(currentPassword, newPassword);
});

Then('I should see order history', () => {
  accountPOM.verifyOrderHistoryVisible();
});

Then('I should see order {string}', (orderNumber) => {
  accountPOM.verifyOrderIsDisplayed(orderNumber);
});

// ================== ASSERTION STEPS ==================

Then('page title should be {string}', (title) => {
  cy.title().should('contain', title);
});

Then('I should see {string} text', (text) => {
  cy.contains(text).should('be.visible');
});

Then('URL should contain {string}', (urlPart) => {
  cy.url().should('include', urlPart);
});

And('I wait for {int} seconds', (seconds) => {
  cy.wait(seconds * 1000);
});
