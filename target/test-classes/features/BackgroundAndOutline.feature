Feature: Combine Outline and Background

Background:
  Given User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" is registered
  When User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" logs in
  And User  "johnDoe@gmail.com" should be navigated to HomePage
@smoke
  Scenario Outline: Apple Store Buy
    Given Apple store has <amount> "<item>"
    When User buys <buyAmount> "<item>"
    Then User should have <buyAmount> "<item>"
    And Apple Store should have <currentAppleStoreAmount> "<item>"
    Examples:
      | amount | item    | buyAmount | currentAppleStoreAmount |
      | 100    | Iphone  | 10        | 90                      |
      | 50     | Ipad    | 5         | 45                      |
      | 80     | Watches | 10        | 70                      |
      | 11     | Mac     | 10        | 1                       |

    @smoke
  Scenario: Integer Params -Buy functionality

    And User Buys 20 "Iphones"
    Then User should have 20 "Iphones"
