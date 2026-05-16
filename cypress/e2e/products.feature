Feature: Product Browsing and Selection

  Background:
    Given I navigate to the home page

  Scenario: View product listings on home page
    Then I should see product listings
    And I should see "Sort" text
    And URL should contain "/"

  Scenario: Search for a specific product
    When I search for "Pliers"
    Then I should see product listings
    And I should see "Pliers" text
    And URL should contain "/"

  Scenario: View product detail page
    When I click on product at index 0
    Then I should see product detail
    And I should see "Add to cart" text
    And URL should contain "/product/"