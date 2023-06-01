describe('E2E Login to inventory', () => {

  it('input valid username dan password then Login', () => {

    cy.visit('https://www.saucedemo.com')

    cy.get('#user-name').type("standard_user")

    cy.get('#password').type("secret_sauce")

    cy.contains("Login").click()

  })

})

