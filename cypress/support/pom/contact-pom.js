class ContactPOM
{
    verifyContactPageVisible(){
        cy.verifyUrl('/contact');
        cy.verifyVisible('h3');
        cy.get('[data-test="contact-submit"]').should('exist');
    }
    fillFirstName(firstName){
        cy.fillField('[data-test="first-name"]', firstName);
    }
    fillLastName(lastName){
        cy.fillField('[data-test="last-name"]', lastName);
    }
    fillEmail(email){
        cy.fillField('[data-test="email"]', email);
    }
    fillPhone(phone){
        cy.fillField('[data-test="phone"]', phone);
    }
    fillSubject(subject){
        cy.fillField('[data-test="subject"]', subject);
    }
    fillMessage(message){
        cy.fillField('[data-test="message"]', message);
    }
    selectCategory(category){
        cy.get('[data-test="category"]').select(category);
    }
    clickSubmit(){
        cy.clickElement('[data-test="contact-submit"]');
    }
    submitContactForm(firstName, lastName, email, subject, message){
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillEmail(email);
        this.fillSubject(subject);
        this.fillMessage(message);
        this.clickSubmit();
    }
    submitFullContactForm(firstName, lastName, email, phone, category, subject, message){
        this.fillFirstName(firstName);
        this.fillLastName(lastName);
        this.fillEmail(email);
        this.fillPhone(phone);
        this.selectCategory(category);
        this.fillSubject(subject);
        this.fillMessage(message);
        this.clickSubmit();
    }
    verifySuccessMessage(){
        cy.verifyVisible('.alert-success');
        cy.get('.alert-success').invoke('text').should('not.be.empty');
        cy.verifyUrl('/contact');
    }
    verifyErrorMessage(){
        cy.verifyVisible('.alert-danger, .help-block');
        cy.get('.alert-danger, .help-block').should('not.be.empty');
        cy.get('[data-test="contact-submit"]').should('exist');
    }
}
export default ContactPOM
