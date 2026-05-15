Feature: User Account Management

  Background:
    Given I navigate to the login page

  Scenario: View account page after login
    When I login with email "customer@practicesoftwaretesting.com" and password "welcome01"
    And I click on the account link
    Then I should see account page
    And URL should contain "account"
    And I should see "Account" text

  Scenario: Update user profile information
    When I login with email "customer@practicesoftwaretesting.com" and password "welcome01"
    And I click on the account link
    And I click edit profile button
    And I update first name to "John"
    And I update last name to "Doe"
    And I click save profile button
    Then I should see a success message
    And URL should contain "account"
    And I should see "Account" text

  Scenario: View order history
    When I login with email "customer@practicesoftwaretesting.com" and password "welcome01"
    And I click on the account link
    Then I should see order history
    And URL should contain "account"
    And I should see "Account" text
