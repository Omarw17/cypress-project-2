// Custom Cypress commands for the test suite

// Command to login a user
Cypress.Commands.add('login', (email, password) => {
  cy.visit('https://practicesoftwaretesting.com/login');
  cy.get('input[name="email"]').type(email);
  cy.get('input[name="password"]').type(password);
  cy.get('button[type="submit"]').click();
  cy.url().should('not.include', '/login');
});

// Command to add product to cart
Cypress.Commands.add('addToCart', (productIndex = 0) => {
  cy.get('.product-item').eq(productIndex).within(() => {
    cy.get('button:contains("Add to cart")').click();
  });
});

// Command to navigate to page
Cypress.Commands.add('navigateTo', (page) => {
  const urls = {
    home: '/',
    products: '/products',
    contact: '/contact',
    login: '/login',
    register: '/register',
    cart: '/cart',
    account: '/account'
  };
  cy.visit(`https://practicesoftwaretesting.com${urls[page]}`);
});

// Command to wait for element to be visible
Cypress.Commands.add('waitForElement', (selector) => {
  cy.get(selector).should('be.visible');
});

// Command to fill form field
Cypress.Commands.add('fillField', (selector, value) => {
  cy.get(selector).clear().type(value);
});

// Command to click element safely
Cypress.Commands.add('clickElement', (selector) => {
  cy.get(selector).should('be.visible').click();
});

// Command to verify element text
Cypress.Commands.add('verifyText', (selector, text) => {
  cy.get(selector).should('contain', text);
});

// Command to get element text
Cypress.Commands.add('getElementText', (selector) => {
  return cy.get(selector).invoke('text');
});

// Command to scroll to element
Cypress.Commands.add('scrollTo', (selector) => {
  cy.get(selector).scrollIntoView();
});

// Command to check if element exists
Cypress.Commands.add('elementExists', (selector) => {
  cy.get(selector).should('exist');
});

// Command to clear and type in input
Cypress.Commands.add('clearAndType', (selector, text) => {
  cy.get(selector).clear().type(text);
});

// Command to submit form
Cypress.Commands.add('submitForm', (formSelector) => {
  cy.get(formSelector).submit();
});

// Override visit command to handle network errors
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  return originalFn(url, {
    ...options,
    onBeforeLoad: (win) => {
      win.handleFromServiceWorker = () => true;
    }
  });
});

// Add command to take screenshot on failure
Cypress.on('test:after:run', (test, runnable) => {
  if (test.state === 'failed') {
    // Screenshot already taken by Cypress config
    console.log('Test failed - screenshot captured');
  }
});
