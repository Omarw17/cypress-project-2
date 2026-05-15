Feature: User Account Management
  As a registered user
  I want to manage my account profile and view order history
  So that I can keep my information up to date and track my orders

  Background:
    Given I navigate to the home page

  Scenario: View account page after login
    When I navigate to the login page
    And I login with email "test@example.com" and password "Test@123"
    And I click on the account link
    Then I should see account page

  Scenario: Update user profile information
    When I navigate to the login page
    And I login with email "test@example.com" and password "Test@123"
    And I click on the account link
    And I click edit profile button
    And I update first name to "John"
    And I update last name to "Doe"
    And I update phone to "1234567890"
    And I click save profile button
    Then I should see a success message

  Scenario: Update complete profile address
    When I navigate to the login page
    And I login with email "test@example.com" and password "Test@123"
    And I click on the account link
    And I update profile with "Jane", "Smith", "jane@example.com", "9876543210", "123 Main St", "New York", "NY", "10001"
    Then I should see a success message

  Scenario: Change password
    When I navigate to the login page
    And I login with email "test@example.com" and password "Test@123"
    And I click on the account link
    And I change password from "Test@123" to "NewPass@123"
    Then I should see a success message

  Scenario: View order history
    When I navigate to the login page
    And I login with email "test@example.com" and password "Test@123"
    And I click on the account link
    Then I should see order history

  Scenario: View specific order details
    When I navigate to the login page
    And I login with email "test@example.com" and password "Test@123"
    And I click on the account link
    Then I should see order history
