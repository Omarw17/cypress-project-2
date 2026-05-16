Feature: Sort Products

  Background:
    Given I navigate to the home page

  Scenario: Sort products by name A to Z
    When I sort products by "name,asc"
    Then I should see product listings
    And I should see "Sort" text
    And URL should contain "/"

  Scenario: Sort products by price low to high
    When I sort products by "price,asc"
    Then I should see product listings
    And I should see "Sort" text
    And URL should contain "/"

  Scenario: Sort products by price high to low
    When I sort products by "price,desc"
    Then I should see product listings
    And I should see "Sort" text
    And URL should contain "/"
