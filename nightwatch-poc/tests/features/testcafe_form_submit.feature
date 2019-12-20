Feature: As a user I want to submit form at testcafe home page

Background:
  Given User is at testcafe homepage

Scenario: coba
  When User enter "Populate" at testcafe page
  And User click "Submit" at testcafe page
  Then User can see final result in Result page