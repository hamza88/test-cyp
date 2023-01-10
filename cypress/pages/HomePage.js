class HomePage {
  clickSearchBtn() {
    cy.get('[data-search="quickSearch"]').click();
  }
}
export default HomePage;
