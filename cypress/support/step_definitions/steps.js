import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import NavigationPOM from '../pom/navigations-pom';
import ProductPOM from '../pom/product-pom';
import ContactPOM from '../pom/contact-pom';
import SortPOM from '../pom/sort-pom';
import CategoryPOM from '../pom/category-pom';
import SearchPOM from '../pom/search-pom';

const nav = new NavigationPOM();
const product = new ProductPOM();
const contact = new ContactPOM();
const sort = new SortPOM();
const category = new CategoryPOM();
const search = new SearchPOM();

Given('I navigate to the home page', () => {
    cy.visit('/');
    cy.get('body').should('be.visible');
    cy.document().its('readyState').should('eq', 'complete');
    cy.get('[data-test="product-name"]', { timeout: 15000 }).should('have.length.greaterThan', 0);
})

Given('I navigate to the contact page', () => {
    cy.visit('/contact');
    cy.get('body').should('be.visible');
})

When('I search for {string}', (productName) => {
    nav.searchProduct(productName);
})

When('I search for product {string}', (term) => {
    search.searchFor(term);
})

When('I click on product at index {int}', (index) => {
    product.clickProduct(index);
})

When('I sort products by {string}', (value) => {
    sort.sortBy(value);
})

When('I click on hand tools category', () => {
    category.clickHandTools();
})

When('I click on power tools category', () => {
    category.clickPowerTools();
})

When('I click on other category', () => {
    category.clickOther();
})

When('I fill contact form {string}, {string}, {string}, {string}, {string}', (firstName, lastName, email, subject, message) => {
    contact.submitContactForm(firstName, lastName, email, subject, message);
})

When('I click submit button', () => {
    contact.clickSubmit();
})

Then('I should see product listings', () => {
    product.verifyProductsDisplayed();
})

Then('I should see product detail', () => {
    product.verifyProductDetailVisible();
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

Then('I should see search results', () => {
    search.verifyResultsVisible();
})

Then('search results should contain {string}', (text) => {
    search.verifyResultsContain(text);
})

Then('I should see {string} text', (text) => {
    cy.contains(text).should('be.visible');
})

Then('URL should contain {string}', (urlPart) => {
    cy.url().should('include', urlPart);
    cy.get('body').should('be.visible');
    cy.document().its('readyState').should('eq', 'complete');
})
