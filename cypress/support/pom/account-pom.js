/**
 * Account POM Class
 * Handles user account management, profile updates, and order history
 */

export class AccountPOM {
  // Account page selectors
  accountPageTitle = 'h1:contains("Account")';
  userProfileSection = '.user-profile';
  userName = '.user-name';
  userEmail = '.user-email';
  editProfileButton = 'button[id="edit-profile"]';
  saveProfileButton = 'button[id="save-profile"]';
  cancelButton = 'button[id="cancel"]';

  // Profile edit selectors
  firstNameInput = 'input[name="firstName"]';
  lastNameInput = 'input[name="lastName"]';
  emailInput = 'input[name="email"]';
  phoneInput = 'input[name="phone"]';
  addressInput = 'input[name="address"]';
  cityInput = 'input[name="city"]';
  stateInput = 'input[name="state"]';
  zipInput = 'input[name="zip"]';

  // Password change selectors
  changePasswordButton = 'button[id="change-password"]';
  currentPasswordInput = 'input[name="currentPassword"]';
  newPasswordInput = 'input[name="newPassword"]';
  confirmPasswordInput = 'input[name="confirmPassword"]';
  updatePasswordButton = 'button[id="update-password"]';

  // Order history selectors
  orderHistorySection = '.order-history';
  orderItem = '.order-item';
  orderNumber = '.order-number';
  orderDate = '.order-date';
  orderTotal = '.order-total';
  orderStatus = '.order-status';
  viewOrderButton = 'button[id*="view-order"]';

  // Account methods
  verifyAccountPageVisible() {
    cy.get(this.accountPageTitle).should('be.visible');
  }

  clickEditProfile() {
    cy.get(this.editProfileButton).click();
  }

  updateFirstName(firstName) {
    cy.get(this.firstNameInput).clear().type(firstName);
  }

  updateLastName(lastName) {
    cy.get(this.lastNameInput).clear().type(lastName);
  }

  updateEmail(email) {
    cy.get(this.emailInput).clear().type(email);
  }

  updatePhone(phone) {
    cy.get(this.phoneInput).clear().type(phone);
  }

  updateAddress(address) {
    cy.get(this.addressInput).clear().type(address);
  }

  updateCity(city) {
    cy.get(this.cityInput).clear().type(city);
  }

  updateState(state) {
    cy.get(this.stateInput).clear().type(state);
  }

  updateZip(zip) {
    cy.get(this.zipInput).clear().type(zip);
  }

  clickSaveProfile() {
    cy.get(this.saveProfileButton).click();
  }

  clickCancelEdit() {
    cy.get(this.cancelButton).click();
  }

  updateFullProfile(firstName, lastName, email, phone, address, city, state, zip) {
    this.clickEditProfile();
    this.updateFirstName(firstName);
    this.updateLastName(lastName);
    this.updateEmail(email);
    this.updatePhone(phone);
    this.updateAddress(address);
    this.updateCity(city);
    this.updateState(state);
    this.updateZip(zip);
    this.clickSaveProfile();
  }

  // Password change methods
  clickChangePassword() {
    cy.get(this.changePasswordButton).click();
  }

  fillCurrentPassword(password) {
    cy.get(this.currentPasswordInput).clear().type(password);
  }

  fillNewPassword(password) {
    cy.get(this.newPasswordInput).clear().type(password);
  }

  fillConfirmPassword(password) {
    cy.get(this.confirmPasswordInput).clear().type(password);
  }

  clickUpdatePassword() {
    cy.get(this.updatePasswordButton).click();
  }

  changePassword(currentPassword, newPassword) {
    this.clickChangePassword();
    this.fillCurrentPassword(currentPassword);
    this.fillNewPassword(newPassword);
    this.fillConfirmPassword(newPassword);
    this.clickUpdatePassword();
  }

  // Order history methods
  verifyOrderHistoryVisible() {
    cy.get(this.orderHistorySection).should('be.visible');
  }

  getOrderCount() {
    return cy.get(this.orderItem).length;
  }

  viewOrder(orderIndex) {
    cy.get(this.viewOrderButton).eq(orderIndex).click();
  }

  verifyOrderIsDisplayed(orderNumber) {
    cy.get(this.orderNumber).contains(orderNumber).should('be.visible');
  }

  getOrderStatus(orderIndex) {
    return cy.get(this.orderStatus).eq(orderIndex).invoke('text');
  }

  getOrderDate(orderIndex) {
    return cy.get(this.orderDate).eq(orderIndex).invoke('text');
  }
}
