Feature: Avoiding Repetition

  Background:
    Given User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" is registered
    When User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" logs in
    And User  "johnDoe@gmail.com" should be navigated to HomePage
@smoke
  Scenario: Integer Params -Buy functionality

    And User Buys 20 "Iphones"
    Then User should have 20 "Iphones"


  Scenario: Double Params -Buy functionality

    When User Buys 20 "Iphones"
    Then User total should be $2000.55

  Scenario: Char Params -Buy functionality

    When User Buys 20 "Iphones"
    Then User total should be $2000.55
    And User credit standing should be 'A'