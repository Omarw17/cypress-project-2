Feature: Browse Product Categories

  Background:
    Given I navigate to the home page

  Scenario: Browse hand tools category
    When I click on hand tools category
    Then I should see product listings
    And I should see "Category: Hand Tools" text
    And URL should contain "hand-tools"

  Scenario: Browse power tools category
    When I click on power tools category
    Then I should see product listings
    And I should see "Category: Power Tools" text
    And URL should contain "power-tools"

  Scenario: Browse other category
    When I click on other category
    Then I should see product listings
    And I should see "Category: Other" text
    And URL should contain "other"
