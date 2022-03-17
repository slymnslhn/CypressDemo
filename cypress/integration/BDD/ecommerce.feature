Feature: E2E Testing

Scenario: Testing Dropdowns


    Given I open Ecommerce Page
    When I add items to Cart
    And I validate total prices
    Then Select the country submit and verify Thank You Message