class AccountPOM
{
    verifyAccountPageVisible(){
        cy.verifyUrl('/account');
        cy.verifyVisible('body');
        cy.get('app-account').should('exist');
    }
    clickEditProfile(){
        cy.clickElement('[data-test="edit-profile"]');
    }
    updateFirstName(firstName){
        cy.fillField('[data-test="first-name"]', firstName);
    }
    updateLastName(lastName){
        cy.fillField('[data-test="last-name"]', lastName);
    }
    updateEmail(email){
        cy.fillField('[data-test="email"]', email);
    }
    updatePhone(phone){
        cy.fillField('[data-test="phone"]', phone);
    }
    updateAddress(address){
        cy.fillField('[data-test="address"]', address);
    }
    updateCity(city){
        cy.fillField('[data-test="city"]', city);
    }
    updateState(state){
        cy.fillField('[data-test="state"]', state);
    }
    updateZip(zip){
        cy.fillField('[data-test="postcode"]', zip);
    }
    clickSaveProfile(){
        cy.clickElement('[data-test="update-profile-submit"]');
    }
    updateFullProfile(firstName, lastName, email, phone, address, city, state, zip){
        this.clickEditProfile();
        this.updateFirstName(firstName);
        this.updateLastName(lastName);
        this.updateEmail(email);
        this.updatePhone(phone);
        this.updateAddress(address);
        this.updateCity(city);
        this.updateState(state);
        this.updateZip(zip);
        this.clickSaveProfile();
    }
    clickChangePassword(){
        cy.clickElement('[data-test="change-password"]');
    }
    fillCurrentPassword(password){
        cy.fillField('[data-test="current-password"]', password);
    }
    fillNewPassword(password){
        cy.fillField('[data-test="new-password"]', password);
    }
    fillConfirmPassword(password){
        cy.fillField('[data-test="confirm-password"]', password);
    }
    clickUpdatePassword(){
        cy.clickElement('[data-test="update-password-submit"]');
    }
    changePassword(currentPassword, newPassword){
        this.clickChangePassword();
        this.fillCurrentPassword(currentPassword);
        this.fillNewPassword(newPassword);
        this.fillConfirmPassword(newPassword);
        this.clickUpdatePassword();
    }
    verifyOrderHistoryVisible(){
        cy.get('[data-test="order-history"]').should('exist');
        cy.verifyVisible('body');
        cy.verifyUrl('/account');
    }
    verifyOrderIsDisplayed(orderNumber){
        cy.verifyText('[data-test="order-history"]', orderNumber);
        cy.get('body').should('contain', orderNumber);
    }
}
export default AccountPOM
