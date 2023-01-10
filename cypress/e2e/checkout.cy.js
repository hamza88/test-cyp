/// <reference types="cypress" />

import CheckOutPage from "../pages/CheckoutPage";
import HomePage from "../pages/HomePage";
import PurchaseConfirmationPage from "../pages/PurchaseConfirmationPage";
import SearchPage from "../pages/searchPage";

describe("Open Ecommerce site", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Checkout Process", () => {
    const homePage = new HomePage();
    const searchPage = new SearchPage();
    const checkOutPage = new CheckOutPage();
    const purchaseConfirmationPage = new PurchaseConfirmationPage();
    homePage.clickSearchBtn();
    searchPage.search("Oak Cheese Grater");
    searchPage.clikAddToCartBtn();
    checkOutPage.clickCheckOutBtn();
    const email =
      "hamza" + Math.random().toString(36).substring(2, 7) + "@hamza.com";
    checkOutPage.fillCustomerEmail(email);
    checkOutPage.selectPrivacyPolicy();
    checkOutPage.clickCustomerContinueBtn();
    const name = "Hamza";
    checkOutPage.fillShippingDetails(
      "United States",
      name,
      name,
      "143-378 road",
      "Building",
      "Hamza Enterprise",
      "Alaska",
      "Alaska",
      "123456",
      "1234567890"
    );

    checkOutPage.fillOrderComment("Comment");
    checkOutPage.clickShippingContinueBtn();
    const cardNumber = "4111 1111 1111 1111";
    const cvv = Math.floor(Math.random() * (999 - 100 + 1) + 100);
    const mmYY = "12/30";
    checkOutPage.fillPaymentDetails(cardNumber, mmYY, name, cvv);
    checkOutPage.clickPlaceOrderBtn();
    purchaseConfirmationPage.orderConfirmationPageDispalyed(name);
  });
});
