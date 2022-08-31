describe('frist tests', () => {
  beforeEach(() => {
    cy.viewport("iphone-x");
  });

  it('show home page', () => {
    cy.visit('/');
    cy.wait(200);
    cy.screenshot();
  });

  it('show info page', () => {
    cy.visit('/info');
    cy.wait(200);
    cy.screenshot();
    cy.contains("Informacje");
  });

  it('show form page', () => {
    cy.visit('/form');
    cy.wait(200);
    cy.screenshot();
    cy.contains("Formularz");
  });

  it('what_it_does', function() {

    cy.visit('/')
 
    cy.get('#main > .ion-page > .md > .md > .item:nth-child(2)').click()
 
    cy.get('.md > .md > .ion-untouched > .ng-untouched > .native-input').click()
 
    cy.get('.md > .md > .item-interactive > .ng-untouched > .native-input').type('100')
 
    cy.get('#main > .ion-page > .md > .md > .md:nth-child(3)').click()
 
    cy.screenshot();
 })
})