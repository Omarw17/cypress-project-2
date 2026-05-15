Feature: Contact Form Submission

  Background:
    Given I navigate to the contact page

  Scenario: Submit contact form with valid data
    When I fill contact form "John", "Doe", "john@example.com", "Customer service", "I need help with my order"
    Then I should see contact form success message
    And URL should contain "contact"
    And I should see "Contact" text

  Scenario: Submit contact form with empty fields
    When I click submit button
    Then I should see contact form error message
    And URL should contain "contact"
    And I should see "Contact" text

  Scenario: Contact page loads correctly
    Then I should see the contact page
    And I should see "Contact" text
    And URL should contain "contact"
