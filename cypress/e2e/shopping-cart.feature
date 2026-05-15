Feature: Shopping Cart and Checkout

  Background:
    Given I navigate to the home page

  Scenario: Add product to cart
    When I add product at index 0 to cart
    And I go to shopping cart
    Then my cart should not be empty
    And URL should contain "checkout"
    And I should see "cart" text

  Scenario: Empty cart shows correct message
    When I go to shopping cart
    Then my cart should be empty
    And URL should contain "checkout"
    And I should see "cart" text

  Scenario: Remove product from cart
    When I add product at index 0 to cart
    And I go to shopping cart
    And I remove item at index 0
    Then my cart should be empty
    And URL should contain "checkout"
    And I should see "cart" text
