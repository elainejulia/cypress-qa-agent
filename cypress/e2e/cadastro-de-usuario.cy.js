describe('Cadastro de Usuários', () => {
  const url = 'https://front.serverest.dev/cadastrarusuarios';

  it('Deve cadastrar usuário com sucesso', () => {
    cy.visit(url);
    cy.get('input[placeholder="nome"]').type('Elaine Julia');
    cy.get('input[placeholder="email"]').type('elainejulia@gmail.com');
    cy.get('input[placeholder="password"]').type('@Admin123');
    cy.get('button[type="submit"]').click();

    cy.contains('Cadastro realizado com sucesso').should('be.visible');
    cy.screenshot('cadastro-sucesso');
  });

  it('Deve validar campos obrigatórios', () => {
    cy.visit(url);
    cy.get('button[type="submit"]').click();

    cy.contains('nome é obrigatório').should('be.visible');
    cy.contains('email é obrigatório').should('be.visible');
    cy.contains('senha é obrigatório').should('be.visible');
    cy.screenshot('campos-obrigatorios');
  });
});