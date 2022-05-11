# This is a cucumber feature files that explain each senerios functionality step definition file

Feature: Sorting of items under all gadgets

    Feature involves clicking on TV, Appliances and Electronics

    Background: I am on amazon page
        Given I click on hamburger module

    Scenario: clicking fields under Hamburger Module
        When I click on tv, appliance and electronics
        And I sort product by feature
        Then I log the about text to console