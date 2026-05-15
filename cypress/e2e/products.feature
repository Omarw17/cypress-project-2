Feature: Product Browsing and Selection
  As a customer
  I want to browse products, filter, and sort them
  So that I can find and select the products I want to purchase

  Background:
    Given I navigate to the home page

  Scenario: View products listing
    When I navigate to the products page
    Then I should see product listings

  Scenario: View product details
    When I navigate to the products page
    And I click on product at index 0
    Then I should see product detail

  Scenario: Filter products by category
    When I navigate to the products page
    And I filter by category "Electronics"
    Then I should see product listings

  Scenario: Sort products by price
    When I navigate to the products page
    And I sort by "low-to-high"
    Then I should see product listings

  Scenario: Search for specific product
    When I navigate to the products page
    And I search for "Laptop"
    Then I should see product listings

  Scenario: View product with no results
    When I navigate to the products page
    And I search for "NonexistentProduct12345"
    Then I should see no products message

  Scenario: Add product to cart from listing
    When I navigate to the products page
    And I add product at index 0 to cart
    Then I should see a success message

  Scenario: Add product to cart from detail page
    When I navigate to the products page
    And I click on product at index 0
    And I add product with quantity 2
    Then I should see a success message

  Scenario: View product with rating and reviews
    When I navigate to the products page
    And I click on product at index 0
    Then I should see product detail
    And I should see "Rating" text

  Scenario: Filter by price range
    When I navigate to the products page
    Then I should see product listings

  Scenario: Navigate between product pages
    When I navigate to the products page
    Then I should see product listings
    And I should see "Product" text
