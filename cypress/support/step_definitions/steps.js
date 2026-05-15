import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import NavigationPOM from '../pom/navigations-pom';
import AuthenticationPOM from '../pom/authentication-pom';
import ProductPOM from '../pom/product-pom';
import CartPOM from '../pom/cart-pom';
import ContactPOM from '../pom/contact-pom';
import AccountPOM from '../pom/account-pom';

const nav = new NavigationPOM();
const auth = new AuthenticationPOM();
const product = new ProductPOM();
const cart = new CartPOM();
const contact = new ContactPOM();
const account = new AccountPOM();

Given('I navigate to the home page', () => {
    cy.visit('/');
    cy.get('body').should('be.visible');
    cy.document().its('readyState').should('eq', 'complete');
})

Given('I navigate to the login page', () => {
    cy.visit('/auth/login');
    cy.get('[data-test="email"]').should('be.visible');
})

Given('I navigate to the contact page', () => {
    cy.visit('/contact');
    cy.get('body').should('be.visible');
})

When('I login with email {string} and password {string}', (email, password) => {
    auth.login(email, password);
})

When('I enter email {string}', (email) => {
    auth.fillEmail(email);
})

When('I enter password {string}', (password) => {
    auth.fillPassword(password);
})

When('I click the login button', () => {
    auth.clickLogin();
})

When('I click on the account link', () => {
    nav.clickAccount();
})

When('I click edit profile button', () => {
    account.clickEditProfile();
})

When('I update first name to {string}', (firstName) => {
    account.updateFirstName(firstName);
})

When('I update last name to {string}', (lastName) => {
    account.updateLastName(lastName);
})

When('I click save profile button', () => {
    account.clickSaveProfile();
})

When('I search for {string}', (productName) => {
    nav.searchProduct(productName);
})

When('I click on product at index {int}', (index) => {
    product.clickProduct(index);
})

When('I add product at index {int} to cart', (index) => {
    product.addProductToCart(index);
})

When('I go to shopping cart', () => {
    nav.clickCart();
})

When('I remove item at index {int}', (itemIndex) => {
    cart.removeCartItem(itemIndex);
})

When('I fill contact form {string}, {string}, {string}, {string}, {string}', (firstName, lastName, email, subject, message) => {
    contact.submitContactForm(firstName, lastName, email, subject, message);
})

When('I click submit button', () => {
    contact.clickSubmit();
})

Then('I should see a success message', () => {
    auth.verifySuccessMessage();
})

Then('I should see an error message', () => {
    auth.verifyErrorMessage();
})

Then('I should see the login page title', () => {
    auth.verifyLoginPageTitle();
})

Then('I should see product listings', () => {
    product.verifyProductsDisplayed();
})

Then('I should see product detail', () => {
    product.verifyProductDetailVisible();
})

Then('my cart should not be empty', () => {
    cart.verifyCartNotEmpty();
})

Then('my cart should be empty', () => {
    cart.verifyEmptyCart();
})

Then('I should see the contact page', () => {
    contact.verifyContactPageVisible();
})

Then('I should see contact form success message', () => {
    contact.verifySuccessMessage();
})

Then('I should see contact form error message', () => {
    contact.verifyErrorMessage();
})

Then('I should see account page', () => {
    account.verifyAccountPageVisible();
})

Then('I should see order history', () => {
    account.verifyOrderHistoryVisible();
})

Then('I should see {string} text', (text) => {
    cy.contains(text).should('be.visible');
})

Then('URL should contain {string}', (urlPart) => {
    cy.url().should('include', urlPart);
    cy.get('body').should('be.visible');
    cy.document().its('readyState').should('eq', 'complete');
})
