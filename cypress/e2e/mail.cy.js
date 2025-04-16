describe('2段階認証（メールアドレス）', () =>{
it('1 レイアウト', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('body > main > div > p:nth-child(1)').should('be.visible').and('contain', '登録に使用するメールアドレスを入力してください。');
    cy.get('body > main > div > p:nth-child(2)').should('be.visible').and('contain', '入力されたメールアドレスに6桁の認証番号を送ります。');
})

it('2 正常値（最大）', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('raku$raku-rakurakurakurakurakurakuraku@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p:nth-child(1)').should('be.visible').and('contain','メールに記載されている6桁の認証番号を')
    cy.get('body > main > div > p:nth-child(2)').should('be.visible').and('contain','下の欄に入力してください。')
})

it('3 正常値（最小）', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('r_@e.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p:nth-child(1)').should('be.visible').and('contain','メールに記載されている6桁の認証番号を')
    cy.get('body > main > div > p:nth-child(2)').should('be.visible').and('contain','下の欄に入力してください。')
})

it('4 未入力', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').clear()
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','入力必須項目です。')
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
    cy.get('body > main > div > p.error').should('be.visible').and('contain','8文字以上、50文字以内で入力してください。')
})

it('5 半角空欄', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type(' ')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','入力必須項目です。')
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
    cy.get('body > main > div > p.error').should('be.visible').and('contain','8文字以上、50文字以内で入力してください。')
})

it('6 全角空欄', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('　')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','入力必須項目です。')
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
    cy.get('body > main > div > p.error').should('be.visible').and('contain','8文字以上、50文字以内で入力してください。')
})

it('7 最小値以下', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('r@e.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','8文字以上、50文字以内で入力してください。')
})

it('8 最大値以上', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('raku$raku-rakurakurakurakurakurakurakus@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','8文字以上、50文字以内で入力してください。')
})

it('9 形式不正', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('rakus@@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','メールアドレスの型が異なります。')
})

it('10 形式不正', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('らくす@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
})

it('11 形式不正 ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('rakus@-example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','メールアドレスの型が異なります。')
})

it('12 形式不正 ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('rakus@example.com.')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','メールアドレスの型が異なります。')
})

it('13 形式不正 ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('rakus@example*com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
})

it('14 重複 ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('test1_1@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','入力されたメールアドレスは既に使用されています。')
})

it('15 使用不可の文字種  ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('rakus!@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
})

it('16 使用不可の文字種  ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('rakus&@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
})
it('17 使用不可の文字種  ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('rakus~@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
})


it('18 回数制限  ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('input[name="email"]').type('rakus10@example.com')
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','メール送信回数が10回を超えました。しばらくしてから再度お試しください。')
    
})

it.only('19 バックボタン押下  ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click()
    cy.get('body > main > div > form > div > a').click()
    cy.get('body > main > form > h2').should('be.visible').and('contain','Login for ViZaro')
})

it('20 SQLインジェクション ', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type("' OR 1=1 '")
    cy.get('button').contains('Send').click()
    cy.get('body > main > div > p.error').should('be.visible').and('contain','使用可能文字種は大小半角英数字、@.$_-のみです。')
    cy.get('body > main > div > p.error').should('be.visible').and('contain','メールアドレスの型が異なります。')
})



})
