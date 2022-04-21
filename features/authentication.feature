Feature: Authentication

  Scenario: Valid Credentials
    Given User has valid credentials
    When User logs in
    Then User has a valid session
