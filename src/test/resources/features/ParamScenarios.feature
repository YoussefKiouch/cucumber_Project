Feature:  Login Scenarios Parameterized

  @smoke
  Scenario: Login With Params
    Given User "tim@apple.com" with password "timceo" is registered
    When User "tim@apple.com" with password "timceo" logs in
    Then User "tim@apple.com" should be navigated to Homepage

  Scenario: Login With Params 2
    Given User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" is registered
    When User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" logs in
    Then User  "johnDoe@gmail.com" should be navigated to HomePage


  Scenario: Negative
    Given User "bill@outlook.com" with password "helloworld123" is registered
    When User "bill@outlook.com" with password "helloworld123" logs in
    Then User should be given login error message

  Scenario: Integer Params -Buy functionality
    Given User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" is registered
    When User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" logs in
    And User  "johnDoe@gmail.com" should be navigated to HomePage
    And User Buys 20 "Iphones"


  Scenario: Double Params -Buy functionality
    Given User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" is registered
    And User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" logs in
    And User  "johnDoe@gmail.com" should be navigated to HomePage
    When User Buys 20 "Iphones"
    Then User total should be $2000.55

  Scenario: Char Params -Buy functionality
    Given User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" is registered
    And User "johnDoe@gmail.com" with password "ExtreamnelyHardPa$$" logs in
    And User  "johnDoe@gmail.com" should be navigated to HomePage
    When User Buys 20 "Iphones"
    Then User total should be $2000.55
    And User credit standing should be 'A'


