class NavigationPOM
{
    clickHome(){
        cy.clickElement('[data-test="nav-home"]');
    }
    clickProducts(){
        cy.navigateTo('home');
    }
    clickContact(){
        cy.clickElement('[data-test="nav-contact"]');
    }
    clickSignIn(){
        cy.clickElement('[data-test="nav-sign-in"]');
    }
    clickCart(){
        cy.clickElement('[data-test="nav-cart"]');
    }
    clickAccount(){
        cy.clickElement('[data-test="nav-menu"]');
        cy.clickElement('[data-test="nav-my-account"]');
    }
    searchProduct(productName){
        cy.fillField('[data-test="search-query"]', productName);
        cy.clickElement('[data-test="search-submit"]');
    }
    verifyNavigation(pageName){
        const paths = { account:'/account', products:'/', contact:'/contact', login:'/auth/login', cart:'/checkout' };
        cy.verifyUrl(paths[pageName] || pageName);
        cy.verifyVisible('body');
        cy.document().its('readyState').should('eq', 'complete');
    }
}
export default NavigationPOM
