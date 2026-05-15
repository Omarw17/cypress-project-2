Feature: User Authentication
  As a user of the practice testing website
  I want to login and register
  So that I can access my account and make purchases

  Background:
    Given I navigate to the home page

  Scenario: Successful login with valid credentials
    When I navigate to the login page
    And I login with email "test@example.com" and password "Test@123"
    Then I should be on "account" page
    And I should see a success message

  Scenario: Failed login with invalid email
    When I navigate to the login page
    And I enter email "invalid@example.com"
    And I enter password "Test@123"
    And I click the login button
    Then I should see an error message

  Scenario: Failed login with invalid password
    When I navigate to the login page
    And I enter email "test@example.com"
    And I enter password "WrongPassword"
    And I click the login button
    Then I should see an error message

  Scenario: Failed login with empty credentials
    When I navigate to the login page
    And I click the login button
    Then I should see an error message

  Scenario: User registration with valid data
    When I navigate to the registration page
    And I register with "John", "Doe", "john.doe@example.com", "Test@123"
    Then I should see a success message
    And I should see the login page title

  Scenario: User registration with existing email
    When I navigate to the registration page
    And I register with "Jane", "Smith", "test@example.com", "Test@123"
    Then I should see an error message

  Scenario: User registration with invalid password
    When I navigate to the registration page
    And I register with "Test", "User", "test.user@example.com", "weak"
    Then I should see an error message

  Scenario: Verify login page elements
    When I navigate to the login page
    Then I should see the login page title
    And I should see "Email" text
    And I should see "Password" text

  Scenario: Remember me functionality
    When I navigate to the login page
    And I enter email "test@example.com"
    And I enter password "Test@123"
    Then I should see "Remember me" text
