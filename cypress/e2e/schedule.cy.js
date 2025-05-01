describe('新規スケジュール画面', () =>{

it('ID001 レイアウト確認', ()=>{        
    cy.visit('http://127.0.0.1:8000/month_with_schedule/')
    cy.get('a[href="/mycalendar/2025/5/9/"]').click();
    cy.get('#id_start_datetime').should('have.value', '2025-05-09T00:00');
})
// it('ID004 スケジュール登録', ()=>{        
//     cy.visit('http://127.0.0.1:8000/month_with_schedule/')
//     cy.contains('document.querySelector("body > div > table > tbody > tr:nth-child(2) > td:nth-child(6) > a > div")').click();
//     cy.contains('2025-04-09T00:00');
// })
// it('ID001 レイアウト確認', ()=>{        
//     cy.visit('http://127.0.0.1:8000/month_with_schedule/')
//     cy.get('input[name="email"]').type('rakuraku@example.com')
//     cy.get('input[name="password"]').type('Testtest1')
//     cy.get('button').contains('Sign in').click();
//     cy.get('label').should('be.visible').and('contain', 'メールアドレス、パスワードのいずれかが間違っています。');
// })
})