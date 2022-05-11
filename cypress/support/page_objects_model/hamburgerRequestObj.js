// Page Object Model file

export class hamburgerRequest {
  
  // Element id for All icon at the left hand side of the screen
  hamburgerAll() {
    return cy.get('#nav-hamburger-menu');
  }

  // Element id for TV, Appliance and Electronics on the menu side
  tvApplianceElectronics() {
    return cy.get(':nth-child(16) > .hmenu-item > div');
  }

  // Element id for Television on the menu side
  television() {
    return cy.get('.hmenu-visible > :nth-child(3) > .hmenu-item').eq(1);
  }

  // Element id for clicking samsung checkbox on the menu side
  brandSamsung() {
    return cy.get('.sl-sobe-carousel-sub-card-image').eq(3);
  }

  // Element id for clicking on sort by feature to see the list of items on the drop-down
  sortByFeature() {
    return cy.get('#a-autoid-0-announce');
  }

  // Element id for selecting on High To Low from the drop-down
  selectHighToLow() {
    return cy.get('#s-result-sort-select_2');
  }

  // Element id for clicking on the samsung tv for maximization 
  imageWindowSwitch() {
    return cy.get('[class="a-link-normal s-no-outline"]')
  }

  // Element id for login the about text to console
  logAboutThisItem() {
    return cy.get('.a-size-base-plus');
  }
}


