describe('チャット画面', () =>{

    it.only('チャット画面No.1（レイアウト）', () =>{
        ////////////////////////////
        /////////テスト内容//////////
        cy.visit('http://localhost:5173/')
        cy.get('#root > div > form > div:nth-child(2) > input').type('test1_1@example.com')
        cy.get('#root > div > form > div:nth-child(3) > input').type('Testtest1')
        
        cy.contains('button','ログイン').click();
        
    
        //cy.get('#root > div > form > div:nth-child(2) > input').should('be.visible').and('contain', 'チャット一覧');
    
        
    })
})