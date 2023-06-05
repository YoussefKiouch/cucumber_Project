Feature: Test with data Table

  Scenario: No Data table
    Given user creates the invoice with amount 200.00 and name "spoon"
    And user creates the invoice with amount 222.00 and name "Iphone"
    When user sends the above invoices
    Then user should have 422 in total invoices report


  Scenario: No Data table 2
    Given user creates the invoice with amount 200.00 and name "spoon"
    And user creates the invoice with amount 222.00 and name "Iphone"
    When user sends the above invoices
    Then user should have 422 in total invoices report
@smoke
  Scenario: Data table  -Great
    Given the following invoices are created
      | amount | name   |
      | 200    | spoon  |
      | 222    | Iphone |
      | 100    | Ipad   |
    When user sends the above invoices
    Then user should have 522 in total invoices report