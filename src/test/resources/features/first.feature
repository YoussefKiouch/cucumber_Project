Feature: Amazon e-commerce Login
  Scenario: Login with valid username and valid password
    Given User JohnDoe with password abc123 is registered
    When User JohnDoe with password abc123 logs in
    Then User JohnDoe should be navigated to HomePage


    Scenario: Login with valid username and invalid password
      Given User JohnDoe with password abc123 logs in
      When User JohnDoe with password wrongPass logs in
      Then User should be given login error message

      Scenario: Login with valid work email and weak password
        Given User tim@apple.com with password timceo is registered
        When User tim@apple.com with password timceo logs in
        Then User tim@apple.com should be navigated to Homepage