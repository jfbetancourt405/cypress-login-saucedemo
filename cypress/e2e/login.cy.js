describe('Login Sauce Demo', () => {
  it('Login exitoso con credenciales válidas', () => {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#login-button').should('be.visible')

    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')

    cy.get('#login-button').click()

    cy.url().should('include', '/inventory.html')
    cy.contains('Products').should('be.visible')
    // aquí irá el flujo paso a paso
  })
    it('Login fallido con credenciales inválidas', () => {
      cy.visit('https://www.saucedemo.com/')

      cy.get('#user-name').type('usuario_invalido')
      cy.get('#password').type('password_invalido')
      cy.get('#login-button').click()

      cy.contains('Epic sadface').should('be.visible')
    })
})