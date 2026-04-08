describe('Login Tests', () => {
  const baseUrl = 'https://the-internet.herokuapp.com/login';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('Login de usuário com sucesso', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/secure');
    cy.get('.flash.success')
      .should('be.visible')
      .and('contain', 'You logged into a secure area!');

    cy.screenshot('login-success');
  });

  it('Login com senha inválida', () => {
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('wrongPassword');
    cy.get('button[type="submit"]').click();

    cy.get('.flash.error')
      .should('be.visible')
      .and('contain', 'Your password is invalid!');

    cy.screenshot('login-invalid-password');
  });

  it('Campos obrigatórios', () => {
    // Nenhum campo preenchido
    cy.get('button[type="submit"]').click();
    cy.get('.flash.error')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
    cy.screenshot('login-empty-fields');

    // Apenas usuário preenchido
    cy.get('#username').type('tomsmith');
    cy.get('button[type="submit"]').click();
    cy.get('.flash.error')
      .should('be.visible')
      .and('contain', 'Your password is invalid!');
    cy.screenshot('login-missing-password');

    // Limpar e preencher apenas senha
    cy.get('#username').clear();
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('button[type="submit"]').click();
    cy.get('.flash.error')
      .should('be.visible')
      .and('contain', 'Your username is invalid!');
    cy.screenshot('login-missing-username');
  });
});