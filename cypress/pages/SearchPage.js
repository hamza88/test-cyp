class SearchPage {
  search(searchTxt) {
    cy.get("#nav-quick-search").type(searchTxt);
  }

  clikAddToCartBtn() {
    cy.get("#quickSearch .card-figure [data-button-type='add-cart']")
      .invoke("show")
      .click();
  }
}
export default SearchPage;
