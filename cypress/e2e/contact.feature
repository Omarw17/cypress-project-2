Feature: Contact Form Submission
  As a visitor to the website
  I want to be able to contact the company
  So that I can submit inquiries or feedback

  Background:
    Given I navigate to the home page

  Scenario: Submit contact form with valid data
    When I navigate to the contact page
    And I fill contact form "John", "Doe", "john@example.com", "Product Inquiry", "I would like more information about your products"
    Then I should see contact form success message

  Scenario: Submit contact form with all fields including phone
    When I navigate to the contact page
    And I fill full contact form "Jane", "Smith", "jane@example.com", "1234567890", "General Inquiry", "Support Request", "I need assistance with my order"
    Then I should see contact form success message

  Scenario: Contact form with empty required fields
    When I navigate to the contact page
    And I click submit button
    Then I should see contact form error message

  Scenario: Contact form with invalid email
    When I navigate to the contact page
    And I fill first name as "Test"
    And I fill last name as "User"
    And I fill email as "invalid-email"
    And I fill subject as "Test Subject"
    And I fill message as "This is a test message"
    And I click submit button
    Then I should see contact form error message

  Scenario: Contact form with missing first name
    When I navigate to the contact page
    And I fill last name as "Smith"
    And I fill email as "test@example.com"
    And I fill subject as "Test Subject"
    And I fill message as "Test message"
    And I click submit button
    Then I should see contact form error message

  Scenario: Contact form with missing email
    When I navigate to the contact page
    And I fill first name as "John"
    And I fill last name as "Doe"
    And I fill subject as "Test Subject"
    And I fill message as "Test message"
    And I click submit button
    Then I should see contact form error message

  Scenario: Contact form with category selection
    When I navigate to the contact page
    And I fill first name as "Bob"
    And I fill last name as "Johnson"
    And I fill email as "bob@example.com"
    And I select category "Support"
    And I fill subject as "Order Support"
    And I fill message as "I need help with my recent order"
    And I click submit button
    Then I should see contact form success message

  Scenario: Verify contact page is displayed
    When I navigate to the contact page
    Then I should see the contact page
    And I should see "Contact Us" text
