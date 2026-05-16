class ContactPOM {

    submitContactForm(firstName, lastName, email, subject, message) {
        cy.get('[data-test="first-name"]', { timeout: 10000 }).should('be.visible').clear().type(firstName);
        cy.get('[data-test="last-name"]').clear().type(lastName);
        cy.get('[data-test="email"]').clear().type(email);
        cy.get('[data-test="subject"]', { timeout: 10000 }).should('be.visible').select(subject);
        cy.get('[data-test="message"]').clear().type(message);
        this.clickSubmit();
    }

    clickSubmit() {
        cy.get('[data-test="contact-submit"]', { timeout: 10000 }).should('be.visible').click();
    }

    verifyContactPageVisible() {
        cy.url().should('include', '/contact');
        cy.get('[data-test="contact-submit"]', { timeout: 10000 }).should('be.visible');
    }

    verifySuccessMessage() {
        cy.get('.alert-success', { timeout: 10000 }).should('be.visible')
            .and('contain.text', 'Thanks for your message');
    }

    verifyErrorMessage() {
        cy.get('[data-test="first-name-error"], [data-test="last-name-error"], [data-test="email-error"], [data-test="subject-error"], [data-test="message-error"]', { timeout: 8000 })
            .first().should('be.visible');
    }

}

export default ContactPOM;
