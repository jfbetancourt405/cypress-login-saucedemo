describe('Prueba de navegación', () => {
  it('Carga la página principal', () => {
    cy.visit('https://example.cypress.io')

    cy.contains('Kitchen Sink')
    cy.get('h1').should('contain', 'Kitchen Sink')
    cy.url().should('include', 'example.cypress.io')

    cy.contains('Commands').trigger('mouseover')
    cy.contains('Querying').click()
    cy.url().should('include', '/commands/querying')
  })
})