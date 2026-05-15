class AuthenticationPOM
{
    fillEmail(email){
        cy.fillField('[data-test="email"]', email);
    }
    fillPassword(password){
        cy.fillField('[data-test="password"]', password);
    }
    clickLogin(){
        cy.clickElement('[data-test="login-submit"]');
    }
    login(email, password){
        cy.login(email, password);
    }
    fillFirstName(firstName){
        cy.fillField('[data-test="first-name"]', firstName);
    }
    fillLastName(lastName){
        cy.fillField('[data-test="last-name"]', lastName);
    }
    fillRegisterEmail(email){
        cy.fillField('[data-test="email"]', email);
    }
    fillRegisterPassword(password){
        cy.fillField('[data-test="password"]', password);
    }
    fillConfirmPassword(password){
        cy.fillField('[data-test="confirm-password"]', password);
    }
    checkAgreeTerms(){
        cy.get('[data-test="agree-terms"]').check();
    }
    clickRegister(){
        cy.clickElement('[data-test="register-submit"]');
    }
    register(firstName, lastName, email, password){
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillRegisterEmail(email);
        this.fillRegisterPassword(password);
        this.fillConfirmPassword(password);
        this.checkAgreeTerms();
        this.clickRegister();
    }
    verifyLoginPageTitle(){
        cy.verifyUrl('/auth/login');
        cy.verifyVisible('[data-test="login-submit"]');
        cy.verifyVisible('h3');
    }
    verifySuccessMessage(){
        cy.verifyUrl('account');
        cy.verifyVisible('[data-test="nav-menu"]');
        cy.get('body').should('not.contain', 'Invalid credentials');
    }
    verifyErrorMessage(){
        cy.verifyVisible('.alert-danger');
        cy.get('.alert-danger').should('not.be.empty');
        cy.verifyUrl('/auth/login');
    }
}
export default AuthenticationPOM
