/**
 * Product POM Class
 * Handles product listing, filtering, and product detail interactions
 */

export class ProductPOM {
  // Product listing selectors
  productContainer = '.product-item';
  productTitle = '.product-title';
  productPrice = '.product-price';
  productImage = '.product-image';
  addToCartButton = 'button:contains("Add to cart")';
  filterByCategory = 'a[data-category]';
  filterByPrice = 'input[name="price"]';
  sortDropdown = 'select[name="sort"]';
  productCount = '.product-count';
  noProductsMessage = '.no-products';

  // Product detail selectors
  productDetailTitle = '.product-detail-title';
  productDetailPrice = '.product-detail-price';
  productDetailDescription = '.product-detail-description';
  productRating = '.product-rating';
  productReviews = '.product-reviews';
  quantityInput = 'input[name="quantity"]';
  addToCartDetailButton = 'button[id="add-to-cart"]';
  backButton = 'a[href="/products"]';

  // Filter and sort methods
  filterByCategory(category) {
    cy.get(`a[data-category="${category}"]`).click();
  }

  sortByPrice(sortOption) {
    cy.get(this.sortDropdown).select(sortOption);
  }

  filterByPriceRange(minPrice, maxPrice) {
    cy.get('input[name="minPrice"]').clear().type(minPrice);
    cy.get('input[name="maxPrice"]').clear().type(maxPrice);
  }

  // Product interaction methods
  clickProduct(productIndex) {
    cy.get(this.productContainer).eq(productIndex).click();
  }

  clickProductByName(productName) {
    cy.get(this.productTitle).contains(productName).parent().click();
  }

  addProductToCart(productIndex) {
    cy.get(this.productContainer).eq(productIndex).within(() => {
      cy.get(this.addToCartButton).click();
    });
  }

  setQuantity(quantity) {
    cy.get(this.quantityInput).clear().type(quantity);
  }

  clickAddToCartFromDetail() {
    cy.get(this.addToCartDetailButton).click();
  }

  addToCartWithQuantity(quantity) {
    this.setQuantity(quantity);
    this.clickAddToCartFromDetail();
  }

  // Verification methods
  verifyProductsDisplayed() {
    cy.get(this.productContainer).should('have.length.greaterThan', 0);
  }

  verifyNoProductsMessage() {
    cy.get(this.noProductsMessage).should('be.visible');
  }

  verifyProductDetailVisible() {
    cy.get(this.productDetailTitle).should('be.visible');
    cy.get(this.productDetailPrice).should('be.visible');
  }

  verifyProductPrice(expectedPrice) {
    cy.get(this.productDetailPrice).should('contain', expectedPrice);
  }

  getProductCount() {
    return cy.get(this.productContainer).length;
  }
}
