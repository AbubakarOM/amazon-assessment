// Step definition file

/// <reference types="cypress" />

// importing cucumber property 
import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";

// importing page object model class parameter
import {hamburgerRequest} from "../../support/page_objects_model/hamburgerRequestObj"

const hamburgerRequestModule = new hamburgerRequest();

Given("I click on hamburger module", () => {
  
  // Launching the web URL
  cy.visit("/");

  // clicking on ALL on the website
  hamburgerRequestModule.hamburgerAll().click({ force: true });
});

When("I click on tv, appliance and electronics", () => {

  // clicking on TV, Appliance and Electronics on the website
  hamburgerRequestModule.tvApplianceElectronics().should("be.visible").click();
});

And("I sort product by feature", () => {

  // clicking on Television on the website
  hamburgerRequestModule.television().click({ force: true });

  // clicking on Samsung checkbox under brand on the website
  hamburgerRequestModule.brandSamsung().click({ force: true });

  // clicking on sort by feature on the website to see the list 
  hamburgerRequestModule.sortByFeature().click({ force: true });

  // clicking on High to Low from the drop-down on the website
  hamburgerRequestModule.selectHighToLow().click({force: true});

  // clicking on the Television image on the website
  hamburgerRequestModule.imageWindowSwitch().eq(0)
  .should("have.attr", "href").then((link) => {
    cy.visit("/"+link)
  })
});

Then("I log the about text to console", () => {

  // Logging the about text to console from the website view
  cy.get("#feature-bullets").invoke("text").then((Aboutitem) =>{
    const value = Aboutitem
    cy.log(value)
  })
});
