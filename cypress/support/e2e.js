// Import commands.js using ES2015 syntax:
import './commands';

// Alternatively you can use CommonJS syntax:
// require('./commands')

// Hide fetch/XHR requests in the command log
const app = window.top;

if (!app.document.head.querySelector('[data-hide-command-log-request]')) {
  const style = app.document.createElement('style');
  style.innerHTML =
    '.command-name-request, .command-name-xhr { display: none }';
  style.setAttribute('data-hide-command-log-request', '');

  app.document.head.appendChild(style);
}

// Configure viewport
Cypress.config('viewportWidth', 1280);
Cypress.config('viewportHeight', 800);

// Set default timeout for commands
Cypress.config('defaultCommandTimeout', 8000);

// Disable uncaught exception handling for debugging
Cypress.on('uncaught:exception', (err, runnable) => {
  // Return false to prevent Cypress from failing the test
  return false;
});
