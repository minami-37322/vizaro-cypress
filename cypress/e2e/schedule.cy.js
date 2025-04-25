it('12 メールアドレスが紐づいていない', ()=>{        
    cy.visit('/toLogin')
    cy.get('input[name="email"]').type('rakuraku@example.com')
    cy.get('input[name="password"]').type('Testtest1')
    cy.get('button').contains('Sign in').click();
    cy.get('label').should('be.visible').and('contain', 'メールアドレス、パスワードのいずれかが間違っています。');
})