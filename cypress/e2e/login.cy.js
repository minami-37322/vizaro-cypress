describe('ログイン画面', () =>{
    
    it('1ログイン画面が表示されること', ()=>{
        cy.visit('/toLogin')
        cy.get('button').should('be.visible').and('contain','Sign in');
    })

    it('2 企業アカウントでログイン', ()=>{
        cy.visit('/toLogin')
        cy.get('input[name="email"]').type('test1@example.com')
        cy.get('input[name="password"]').type('Testtest1')
        cy.get('button').contains('Sign in').click();
        cy.get('body > main > div > p.error').should('be.visible').and('contain', '');
    })

    //  it('3 メールアドレス不正の場合エラーメッセージが出る1', ()=>{
    //     // //データベースを初期化
    //     // cy.visit('http://localhost:8080/db/init?file=test.sql')
    //     cy.visit('/toLogin')
    //     cy.get('input[name="email"]').type('test1@example.com')
    //     cy.get('input[name="password"]').type('Testtest1')
    //     cy.get('button').contains('Sign in').click();
    //     cy.get("h1").should('be.visible').and('contain', 'master top page')
    //     cy.get('body > header > div > div.header_nav > ul > li:nth-child(7) > a').click()
    //      cy.get('body > main > section.members > div > div > div:nth-child(2) > form > button').click()
    //      cy.get('select[name="pmRole"]').select('true')
    //      cy.get('button').contains('update detail').click()
    //      cy.get('button').contains('log out').click()

    // })

     it('4 メンバーアカウントでログインができる' , ()=>{
         cy.visit('/toLogin')
         cy.get('input[name="email"]').type('test1_1@example.com')
         cy.get('input[name="password"]').type('Testtest1')
         cy.get('button').contains('Sign in').click();
         cy.get("h1").should('be.visible').and('contain', 'member top page');
     })

//     it('5 パスワードが空の場合エラーメッセージが出る', ()=>{
    // 個人利用が実装前のため不可
//         cy.visit('/toLogin')
//         cy.get('input[name="email"]').type('test@example.com')
//         cy.get('input[name="password"]').clear();
//         cy.get('button').contains('ログイン').click();
//         cy.get("label").should('be.visible').and('contain', 'メールアドレス、またはパスワードが間違っています');
//     })

    it('6 メアドが空でログインできない', ()=>{
        cy.visit('/toLogin')
        cy.get('input[name="email"]').clear()
        cy.get('input[name="password"]').type('Testtest1')
        cy.get('button').contains('Sign in').click();
        cy.get('body > main > form > div.login_forms > label:nth-child(1) > p.login_error').should('be.visible').and('contain', 'メールアドレスを入力してください。');
    })

    it('7 メアドが半角空欄のみでログインできない', ()=>{
       cy.visit('/toLogin')
       cy.get('input[name="email"]').type(' ')
       cy.get('input[name="password"]').type('Testtest1')
       cy.get('button').contains('Sign in').click();
       cy.get('body > main > form > div.login_forms > label:nth-child(1) > p.login_error').should('be.visible').and('contain', 'メールアドレスを入力してください。');
})

    it('8 メアドが全角空欄のみでログインできない', ()=>{
        cy.visit('/toLogin')
        cy.get('input[name="email"]').type('　')
        cy.get('input[name="password"]').type('Testtest1')
        cy.get('button').contains('Sign in').click();
        cy.get('label').should('be.visible').and('contain', 'メールアドレスを入力してください。');
    })

    it('9 パスワード空でログインできない', ()=>{
        cy.visit('/toLogin')
        cy.get('input[name="email"]').type('test1_1@example.com')
        cy.get('input[name="password"]').clear()
        cy.get('button').contains('Sign in').click();
        cy.get('label').should('be.visible').and('contain', 'パスワードを入力してください。');
    })

   it('10 パスワード半角空欄でログインできない', ()=>{
    cy.visit('/toLogin')
    cy.get('input[name="email"]').type('test1_1@example.com')
    cy.get('input[name="password"]').type(' ')
    cy.get('button').contains('Sign in').click();
    cy.get('label').should('be.visible').and('contain', 'パスワードを入力してください。');
})

    it('11 メアドが全角空欄でログインできない', ()=>{        
        cy.visit('/toLogin')
        cy.get('input[name="email"]').type('test1_1@example.com')
        cy.get('input[name="password"]').type('　')
        cy.get('button').contains('Sign in').click();
        cy.get('label').should('be.visible').and('contain', 'パスワードを入力してください。');
    })

    it('12 メールアドレスが紐づいていない', ()=>{        
        cy.visit('/toLogin')
        cy.get('input[name="email"]').type('rakuraku@example.com')
        cy.get('input[name="password"]').type('Testtest1')
        cy.get('button').contains('Sign in').click();
        cy.get('label').should('be.visible').and('contain', 'メールアドレス、パスワードのいずれかが間違っています。');
    })

    it('13 パスワードが紐づいていない', ()=>{        
        cy.visit('/toLogin')
        cy.get('input[name="email"]').type('test1_1@example.com')
        cy.get('input[name="password"]').type('1234@bcd')
        cy.get('button').contains('Sign in').click();
        cy.get('label').should('be.visible').and('contain', 'メールアドレス、パスワードのいずれかが間違っています。');
    })

    it('14 sign up', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('body > main > div > p:nth-child(1)').should('be.visible').and('contain', '登録に使用するメールアドレスを入力してください。');
        cy.get('body > main > div > p:nth-child(2)').should('be.visible').and('contain', '入力されたメールアドレスに6桁の認証番号を送ります。');
    })

    // it('15 edgeでテスト', ()=>{        
    //     cy.visit('/toLogin')
    //     cy.get('body > main > form > div.login_btns > a').click();
    //     cy.get('body > main > div > p:nth-child(1)').should('be.visible').and('contain', '登録に使用するメールアドレスを入力してください。');
    //     cy.get('body > main > div > p:nth-child(2)').should('be.visible').and('contain', '入力されたメールアドレスに6桁の認証番号を送ります。');
    // })

    it.only('16 SQLインジェクション', ()=>{        
        cy.visit('/toLogin')
        cy.get('input[name="email"]').type("' OR 1=1--")
        cy.get('input[name="password"]').type('Testtest1')
        cy.get('button').contains('Sign in').click();
        cy.get('label').should('be.visible').and('contain', 'メールアドレス、パスワードのいずれかが間違っています。');
    })


})
