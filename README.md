# Cypress BDD Test Suite

A comprehensive Behavior-Driven Development (BDD) test suite using Cypress and Cucumber for automated testing of the Practice Software Testing website.

## Project Overview

This project implements automated testing using:
- **Cypress**: E2E testing framework
- **Cucumber**: BDD syntax with Gherkin language
- **TypeScript**: Type-safe test configuration
- **Page Object Model**: Maintainable test architecture

## Tech Stack

- **Node.js**: 18.x
- **Cypress**: ^13.0.0
- **@badeball/cypress-cucumber-preprocessor**: ^20.0.0
- **@bahmutov/cypress-esbuild-preprocessor**: ^2.2.0
- **TypeScript**: ^5.0.0

## Project Structure

```
cypress-tests/
├── cypress/
│   ├── e2e/                          # Feature files
│   │   ├── account.feature
│   │   ├── authentication.feature
│   │   ├── contact.feature
│   │   ├── products.feature
│   │   └── shopping-cart.feature
│   ├── support/
│   │   ├── pom/                      # Page Object Models
│   │   │   ├── account-pom.js
│   │   │   ├── authentication-pom.js
│   │   │   ├── cart-pom.js
│   │   │   ├── contact-pom.js
│   │   │   ├── navigations-pom.js
│   │   │   └── product-pom.js
│   │   ├── step_definitions/
│   │   │   └── steps.js              # Gherkin step implementations
│   │   ├── e2e.js                    # Cypress support file
│   │   └── commands.js               # Custom Cypress commands
│   ├── screenshots/                  # Test failure screenshots
│   ├── videos/                       # Test recordings
│   └── reports/                      # Cucumber HTML reports
├── .github/
│   └── workflows/
│       └── cypress-tests.yml         # GitHub Actions CI/CD
├── cypress.config.ts                 # Cypress configuration
├── tsconfig.json                     # TypeScript configuration
├── .cypress-cucumber-preprocessorrc.json
├── .gitignore
├── package.json
└── README.md
```

## Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd cypress-tests
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Verify installation**
   ```bash
   npx cypress --version
   ```

## Running Tests

### Open Cypress Interactive Mode
```bash
npm run cy:open
```

### Run All Tests Headless
```bash
npm run cy:run
```

### Run Tests in Headed Mode
```bash
npm run cy:run:headed
```

### Run Specific Feature File
```bash
npx cypress run --spec "cypress/e2e/authentication.feature"
```

### Run Tests with Video Recording
Tests automatically record videos - check `cypress/videos/` for output.

## Test Features

### Implemented Test Scenarios

#### Authentication (9 scenarios)
- Login with valid/invalid credentials
- User registration with validation
- Password requirements

#### Products (11 scenarios)
- Browse product listings
- Filter by category
- Sort by price
- Search functionality
- View product details
- Add to cart from listing/detail page

#### Shopping Cart (11 scenarios)
- Add/remove products
- Update quantities
- Apply coupon codes
- Proceed to checkout
- Complete purchase
- View order confirmation

#### Contact Form (8 scenarios)
- Submit contact form with validation
- Category selection
- Email validation
- Required field verification

#### Account Management (6 scenarios)
- View account profile
- Update user information
- Change password
- View order history
- Update complete profile

**Total: 45+ Test Scenarios**

## Page Object Model Architecture

Each page has a dedicated POM class with:
- **Selectors**: CSS selectors for page elements
- **Methods**: User interaction methods
- **Verification**: Assertion helper methods

### POM Classes

1. **NavigationPOM**: Navigation elements and menu interactions
2. **AuthenticationPOM**: Login and registration flows
3. **ProductPOM**: Product browsing and filtering
4. **CartPOM**: Shopping cart and checkout operations
5. **ContactPOM**: Contact form interactions
6. **AccountPOM**: User profile and account management

## Step Definitions

The `steps.js` file contains 60+ Gherkin step implementations mapping BDD syntax to POM methods.

### Step Categories

- **Navigation**: Home, Products, Contact, Login pages
- **Authentication**: Login, Registration, Password validation
- **Products**: Browse, Filter, Sort, Search, Add to cart
- **Cart**: Manage items, Checkout, Apply coupons
- **Contact**: Form submission, Validation
- **Account**: Profile updates, Password change, Order history

## Configuration

### Cypress Config (cypress.config.ts)

- **baseUrl**: https://practicesoftwaretesting.com
- **viewport**: 1280x800
- **timeouts**: 8s command, 30s page load
- **retries**: 1 in run mode, 0 in open mode
- **screenshots**: On failure
- **videos**: Always recorded

### Gherkin Configuration

Located in `.cypress-cucumber-preprocessorrc.json`:
- Step definitions: `cypress/support/step_definitions/**/*.{js,ts}`
- HTML reports: `cypress/reports/cucumber-report.html`

## CI/CD Integration

GitHub Actions workflow automatically:
- Runs on push to main/master/develop branches
- Runs on pull requests
- Schedules daily runs at 2 AM UTC
- Uploads test artifacts (screenshots, videos, reports)

See [CI-CD-PIPELINE.md](CI-CD-PIPELINE.md) for details.

## Reporting

### Cucumber HTML Reports

After test execution:
```bash
# Report location
cypress/reports/cucumber-report.html
```

### Screenshots & Videos

- **Screenshots**: `cypress/screenshots/` (on failure)
- **Videos**: `cypress/videos/` (all tests)

## Best Practices

1. **Use Page Object Models**: Always interact through POMs
2. **Wait for Elements**: Use Cypress implicit waits
3. **Clear Data**: Use test data that doesn't pollute the database
4. **Descriptive Scenarios**: Write meaningful Gherkin syntax
5. **One Assertion Per Step**: Keep steps focused and readable

## Debugging

### View Test Execution
```bash
npm run cy:open
```

### Debug Single Test
```bash
npx cypress run --spec "cypress/e2e/authentication.feature" --headed --no-exit
```

### View Console Logs
Check browser console in Cypress Test Runner

### Check Network
Inspect Network tab in Cypress Test Runner

## Troubleshooting

### Tests Timing Out
- Increase `defaultCommandTimeout` in cypress.config.ts
- Check if element selectors are correct

### Element Not Found
- Verify selector in POM class
- Use Cypress Test Runner to inspect element
- Check if page has loaded completely

### Failed Cucumber Preprocessing
- Ensure feature files are in `cypress/e2e/` directory
- Verify file extension is `.feature`
- Check step_definitions path in configuration

## Dependencies

- cypress: E2E testing framework
- @badeball/cypress-cucumber-preprocessor: BDD support
- @bahmutov/cypress-esbuild-preprocessor: TypeScript compilation
- ts-loader: TypeScript loader
- typescript: TypeScript compiler

## Contributing

1. Create feature file for new functionality
2. Write step definitions in steps.js
3. Create/update POM classes
4. Run tests locally before pushing
5. Ensure CI/CD pipeline passes

## License

This project is created for educational purposes.

## Support

For issues or questions, refer to:
- [Cypress Documentation](https://docs.cypress.io)
- [Cucumber BDD Guide](https://cucumber.io/docs)
- [Page Object Model Pattern](https://www.guru99.com/page-object-model-pom-selenium-tutorial.html)

## Version History

- **v1.0.0**: Initial test suite setup
  - 5 feature files
  - 6 POM classes
  - 60+ step definitions
  - GitHub Actions CI/CD integration
