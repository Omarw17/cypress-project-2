Feature: Shopping Cart and Checkout
  As a customer
  I want to add products to cart, manage items, and checkout
  So that I can purchase products and complete my order

  Background:
    Given I navigate to the home page

  Scenario: Add single product to cart
    When I navigate to the products page
    And I add product at index 0 to cart
    Then I should see a success message

  Scenario: Add multiple products to cart
    When I navigate to the products page
    And I add product at index 0 to cart
    And I add product at index 1 to cart
    And I go to shopping cart
    Then my cart should not be empty

  Scenario: View shopping cart with items
    When I navigate to the products page
    And I add product at index 0 to cart
    And I go to shopping cart
    Then my cart should not be empty

  Scenario: Empty shopping cart
    When I go to shopping cart
    Then my cart should be empty

  Scenario: Update product quantity in cart
    When I navigate to the products page
    And I add product at index 0 to cart
    And I go to shopping cart
    And I update item at index 0 quantity to 5
    Then my cart should not be empty

  Scenario: Remove product from cart
    When I navigate to the products page
    And I add product at index 0 to cart
    And I add product at index 1 to cart
    And I go to shopping cart
    And I remove item at index 0
    Then my cart should not be empty

  Scenario: Proceed to checkout
    When I navigate to the products page
    And I add product at index 0 to cart
    And I go to shopping cart
    And I proceed to checkout
    Then I should see checkout form

  Scenario: Complete purchase with shipping and payment
    When I navigate to the products page
    And I add product at index 0 to cart
    And I go to shopping cart
    And I proceed to checkout
    And I complete checkout with "John", "Doe", "john@example.com", "1234567890", "123 Main St", "New York", "NY", "10001", "4532015112830366", "12/25", "123"
    Then I should see order confirmation

  Scenario: Apply coupon code
    When I navigate to the products page
    And I add product at index 0 to cart
    And I go to shopping cart
    And I apply coupon code "SAVE10"
    Then my cart should not be empty

  Scenario: Continue shopping from cart
    When I navigate to the products page
    And I add product at index 0 to cart
    And I go to shopping cart
    And I continue shopping
    Then I should be on "products" page

  Scenario: View order confirmation and order number
    When I navigate to the products page
    And I add product at index 0 to cart
    And I go to shopping cart
    And I proceed to checkout
    And I fill shipping address "Jane", "Smith", "jane@example.com", "9876543210", "456 Oak Ave", "Los Angeles", "CA", "90001"
    And I fill payment info "4532015112830366", "12/25", "123"
    And I click place order
    Then I should see order confirmation
    And I should see an order number

  Scenario: Cart persists after navigation
    When I navigate to the products page
    And I add product at index 0 to cart
    And I click on the products link
    And I go to shopping cart
    Then my cart should not be empty
