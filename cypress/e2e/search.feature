Feature: Search Products

  Background:
    Given I navigate to the home page

  Scenario: Search returns results for a valid term
    When I search for product "hammer"
    Then I should see search results
    And URL should contain "/"

  Scenario: Search results match the search term
    When I search for product "pliers"
    Then I should see search results
    And search results should contain "pliers"

  Scenario: Search then view product detail
    When I search for product "hammer"
    And I click on product at index 0
    Then I should see product detail
