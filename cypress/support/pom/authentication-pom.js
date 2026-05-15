/**
 * Authentication POM Class
 * Handles login, registration, and user authentication flows
 */

export class AuthenticationPOM {
  // Login page selectors
  emailInput = 'input[name="email"]';
  passwordInput = 'input[name="password"]';
  loginButton = 'button[type="submit"]';
  loginTitle = 'h1:contains("Login")';
  rememberMeCheckbox = 'input[type="checkbox"]';
  forgotPasswordLink = 'a[href*="forgot"]';
  errorMessage = '.alert-danger';
  successMessage = '.alert-success';

  // Registration selectors
  firstNameInput = 'input[name="firstName"]';
  lastNameInput = 'input[name="lastName"]';
  registerEmailInput = 'input[name="email"]';
  registerPasswordInput = 'input[name="password"]';
  confirmPasswordInput = 'input[name="confirmPassword"]';
  registerButton = 'button[type="submit"]';
  agreeTermsCheckbox = 'input[type="checkbox"][name="agree"]';

  // Authentication methods
  fillEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  fillPassword(password) {
    cy.get(this.passwordInput).clear().type(password);
  }

  clickLogin() {
    cy.get(this.loginButton).click();
  }

  login(email, password) {
    this.fillEmail(email);
    this.fillPassword(password);
    this.clickLogin();
  }

  fillFirstName(firstName) {
    cy.get(this.firstNameInput).clear().type(firstName);
  }

  fillLastName(lastName) {
    cy.get(this.lastNameInput).clear().type(lastName);
  }

  fillRegisterEmail(email) {
    cy.get(this.registerEmailInput).clear().type(email);
  }

  fillRegisterPassword(password) {
    cy.get(this.registerPasswordInput).clear().type(password);
  }

  fillConfirmPassword(password) {
    cy.get(this.confirmPasswordInput).clear().type(password);
  }

  checkAgreeTerms() {
    cy.get(this.agreeTermsCheckbox).check();
  }

  clickRegister() {
    cy.get(this.registerButton).click();
  }

  register(firstName, lastName, email, password) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillRegisterEmail(email);
    this.fillRegisterPassword(password);
    this.fillConfirmPassword(password);
    this.checkAgreeTerms();
    this.clickRegister();
  }

  verifyLoginPageTitle() {
    cy.get(this.loginTitle).should('be.visible');
  }

  verifySuccessMessage() {
    cy.get(this.successMessage).should('be.visible');
  }

  verifyErrorMessage() {
    cy.get(this.errorMessage).should('be.visible');
  }

  checkRememberMe() {
    cy.get(this.rememberMeCheckbox).check();
  }

  clickForgotPassword() {
    cy.get(this.forgotPasswordLink).click();
  }
}
