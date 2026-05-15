/**
 * Navigation POM Class
 * Handles all navigation elements and interactions
 */

export class NavigationPOM {
  // Navigation selectors
  homeLink = 'a[href="/"]';
  productsLink = 'a[href="/products"]';
  contactLink = 'a[href="/contact"]';
  signInLink = 'a[href="/login"]';
  signUpLink = 'a[href="/register"]';
  cartLink = 'a[href="/cart"]';
  accountLink = 'a[href="/account"]';
  logoutLink = 'a[href="/logout"]';
  navBar = '.navbar';
  navMenu = '.nav-menu';
  searchBox = 'input[placeholder*="Search"]';
  searchButton = 'button[type="submit"]';

  // Navigation methods
  clickHome() {
    cy.get(this.homeLink).click();
  }

  clickProducts() {
    cy.get(this.productsLink).click();
  }

  clickContact() {
    cy.get(this.contactLink).click();
  }

  clickSignIn() {
    cy.get(this.signInLink).click();
  }

  clickSignUp() {
    cy.get(this.signUpLink).click();
  }

  clickCart() {
    cy.get(this.cartLink).click();
  }

  clickAccount() {
    cy.get(this.accountLink).click();
  }

  clickLogout() {
    cy.get(this.logoutLink).click();
  }

  searchProduct(productName) {
    cy.get(this.searchBox).type(productName);
    cy.get(this.searchButton).click();
  }

  isNavBarVisible() {
    cy.get(this.navBar).should('be.visible');
  }

  verifyNavigation(expectedUrl) {
    cy.url().should('include', expectedUrl);
  }
}
