class CheckOutPage {
  clickCheckOutBtn() {
    cy.get("a[href='/checkout']").scrollIntoView().click();
  }

  fillCustomerEmail(email) {
    cy.get("#email").type(email);
  }

  selectPrivacyPolicy() {
    cy.get("[for='privacyPolicy']").click();
  }

  clickCustomerContinueBtn() {
    cy.get(".loadingOverlay").should("not.exist");
    cy.get("#checkout-customer-continue").should("be.visible").click();
  }

  fillShippingDetails(
    country,
    firstName,
    lastName,
    address,
    building,
    companyName,
    city,
    state,
    postalCode,
    phoneNumber
  ) {
    cy.get("[data-test='countryCodeInput-select']").select(country);
    cy.get("[data-test='firstNameInput-text']").type(firstName);
    cy.get("[data-test='lastNameInput-text']").type(lastName);
    cy.get("[data-test='addressLine1Input-text']").type(address);
    cy.get("[data-test='addressLine2Input-text']").type(building);
    cy.get("[data-test='companyInput-text']").type(companyName);
    cy.get("[data-test='cityInput-text']").type(city);
    cy.get("[data-test='provinceCodeInput-select']").select(state);
    cy.get("[data-test='postCodeInput-text']").type(postalCode);
    cy.get("[data-test='phoneInput-text']").type(phoneNumber);
  }

  fillOrderComment(comment) {
    cy.get("[name='orderComment']").type(comment);
  }

  clickShippingContinueBtn() {
    cy.get(".loadingOverlay").should("not.exist");
    cy.get("#checkout-shipping-continue").should("be.visible").click();
  }

  fillPaymentDetails(cardNumber, mmYY, name, cvv) {
    cy.get("[name='ccNumber']").type(cardNumber);
    cy.get("[name='ccExpiry']").type(mmYY);
    cy.get("[name='ccName']").type(name);
    cy.get("[name='ccCvv']").type(cvv);
  }

  clickPlaceOrderBtn() {
    cy.get("#checkout-payment-continue").click();
  }
}
export default CheckOutPage;
