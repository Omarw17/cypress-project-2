class ProductPOM
{
    verifyProductsDisplayed(){
        cy.get('[data-test="product-name"]').should('have.length.greaterThan', 0);
        cy.verifyVisible('.card');
        cy.get('body').should('not.contain', 'No products found');
    }
    verifyNoProductsMessage(){
        cy.get('body').should('contain', 'No results found');
        cy.get('[data-test="product-name"]').should('not.exist');
        cy.get('.card').should('not.exist');
    }
    clickProduct(index){
        cy.get('[data-test="product-name"]').eq(index).click();
    }
    clickProductByName(productName){
        cy.contains(productName).click();
    }
    addProductToCart(index){
        cy.get('[data-test="product-name"]').eq(index).click();
        cy.clickElement('[data-test="add-to-cart"]');
        cy.go('back');
    }
    setQuantity(quantity){
        cy.fillField('[data-test="quantity"]', quantity);
    }
    clickAddToCartFromDetail(){
        cy.clickElement('[data-test="add-to-cart"]');
    }
    addToCartWithQuantity(quantity){
        cy.fillField('[data-test="quantity"]', quantity);
        cy.clickElement('[data-test="add-to-cart"]');
    }
    filterByCategory(category){
        cy.contains(category).click();
        cy.verifyVisible('.card');
    }
    sortByPrice(sortOption){
        const map = { 'low-to-high':'price,asc', 'high-to-low':'price,desc' };
        cy.get('[data-test="sort"]').select(map[sortOption] || sortOption);
    }
    verifyProductDetailVisible(){
        cy.verifyVisible('[data-test="product-name"]');
        cy.verifyVisible('[data-test="unit-price"]');
        cy.get('[data-test="add-to-cart"]').should('exist');
    }
    verifyProductPrice(price){
        cy.verifyText('[data-test="unit-price"]', price);
    }
}
export default ProductPOM
