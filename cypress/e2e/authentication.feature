Feature: User Authentication

  Background:
    Given I navigate to the login page

  Scenario: Successful login with valid credentials
    When I login with email "customer@practicesoftwaretesting.com" and password "welcome01"
    Then I should see a success message
    And I should see "Account" text
    And URL should contain "account"

  Scenario: Failed login with invalid credentials
    When I enter email "wrong@example.com"
    And I enter password "wrongpass"
    And I click the login button
    Then I should see an error message
    And I should see "Invalid" text
    And URL should contain "login"

  Scenario: Login page elements are visible
    Then I should see the login page title
    And I should see "Email" text
    And I should see "Password" text
