/**
 * Contact POM Class
 * Handles contact form interactions and submissions
 */

export class ContactPOM {
  // Contact form selectors
  contactForm = '.contact-form';
  firstNameInput = 'input[name="firstName"]';
  lastNameInput = 'input[name="lastName"]';
  emailInput = 'input[name="email"]';
  subjectInput = 'input[name="subject"]';
  messageInput = 'textarea[name="message"]';
  submitButton = 'button[type="submit"]';
  contactPageTitle = 'h1:contains("Contact")';
  successMessage = '.alert-success';
  errorMessage = '.alert-danger';
  requiredFieldError = '.required-field-error';
  formFields = '.form-group';
  phoneInput = 'input[name="phone"]';
  categorySelect = 'select[name="category"]';

  // Contact methods
  fillFirstName(firstName) {
    cy.get(this.firstNameInput).clear().type(firstName);
  }

  fillLastName(lastName) {
    cy.get(this.lastNameInput).clear().type(lastName);
  }

  fillEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  fillPhone(phone) {
    cy.get(this.phoneInput).clear().type(phone);
  }

  fillSubject(subject) {
    cy.get(this.subjectInput).clear().type(subject);
  }

  fillMessage(message) {
    cy.get(this.messageInput).clear().type(message);
  }

  selectCategory(category) {
    cy.get(this.categorySelect).select(category);
  }

  clickSubmit() {
    cy.get(this.submitButton).click();
  }

  submitContactForm(firstName, lastName, email, subject, message) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillEmail(email);
    this.fillSubject(subject);
    this.fillMessage(message);
    this.clickSubmit();
  }

  submitFullContactForm(firstName, lastName, email, phone, category, subject, message) {
    this.fillFirstName(firstName);
    this.fillLastName(lastName);
    this.fillEmail(email);
    this.fillPhone(phone);
    this.selectCategory(category);
    this.fillSubject(subject);
    this.fillMessage(message);
    this.clickSubmit();
  }

  // Verification methods
  verifyContactPageVisible() {
    cy.get(this.contactPageTitle).should('be.visible');
  }

  verifySuccessMessage() {
    cy.get(this.successMessage).should('be.visible');
  }

  verifyErrorMessage() {
    cy.get(this.errorMessage).should('be.visible');
  }

  verifyRequiredFieldError(fieldName) {
    cy.get(this.requiredFieldError).should('contain', fieldName);
  }

  verifyFormDisplayed() {
    cy.get(this.contactForm).should('be.visible');
  }

  clearForm() {
    cy.get(this.contactForm).within(() => {
      cy.get('input[type="text"], input[type="email"], textarea').each(($el) => {
        cy.wrap($el).clear();
      });
    });
  }
}
