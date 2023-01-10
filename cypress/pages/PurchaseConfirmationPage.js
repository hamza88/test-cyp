class PurchaseConfirmationPage {
  orderConfirmationPageDispalyed(name) {
    const text = `Thank you ${name}!`;
    cy.get('[data-test="order-confirmation-heading"]').should(
      "have.text",
      text
    );
  }
}
export default PurchaseConfirmationPage;
