describe('2段階認証（番号認証）', () =>{
    it('1 レイアウト', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.get('body > main > div > p:nth-child(1)').should('be.visible').and('contain', 'メールに記載されている6桁の認証番号を');
        cy.get('body > main > div > p:nth-child(2)').should('be.visible').and('contain', '下の欄に入力してください。');
    })


    it('2 ユーザー登録選択形式画面に遷移する', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.wait(2000); // メール届くまで少し待つ（必要なら）

        // 最新メール取得→認証コード抽出→ページ遷移→入力
        cy.request('GET', 'http://localhost:8025/api/v1/messages')
          .then((res) => {
            const messages = res.body.messages;
            expect(messages.length).to.be.greaterThan(0);
            const latestId = messages[0].ID;
            return cy.request(`http://localhost:8025/api/v1/message/${latestId}`);
          })
          .then((msgRes) => {
            const emailContent = msgRes.body.Text || msgRes.body.HTML;
            console.log('メール本文:', emailContent);
        
            const codeMatch = emailContent.match(/\b\d{6}\b/);
            if (!codeMatch) throw new Error('認証コードが見つかりませんでした');
        
            const authCode = codeMatch[0];
            console.log('認証コード:', authCode);
            return authCode; // ← この値を次の `.then()` に渡す
          })
          .then((authCode) => {
            cy.get('body > main > div > form > input[type=number]:nth-child(2)', { timeout: 10000 }).should('be.visible').type(authCode);
            cy.get('button').contains('Confirm').click(); // ここを 'confirm' に修正
          });

          cy.get('body > main > section > p').should('be.visible').and('contain', '下記項目に目を通し、登録方法を選択した上でユーザー登録を行なってください。');
        
    })

    it('3 2段階認証未入力', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        
        cy.get('button').contains('Confirm').click(); // ここを 'confirm' に修正
        cy.get('body > main > div > p.error').should('be.visible').and('contain','入力された数字が異なります。再度ご確認ください。')
    })

    it('4 2段階認証半角空欄入力', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.get('input[name="checkNum"]').type(' ')
        cy.get('button').contains('Confirm').click(); // ここを 'confirm' に修正
        cy.get('body > main > div > p.error').should('be.visible').and('contain','入力された数字が異なります。再度ご確認ください。')
    })

    it('5 2段階認証全角空欄入力', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.get('input[name="checkNum"]').type('　')
        cy.get('button').contains('Confirm').click(); // ここを 'confirm' に修正
        cy.get('body > main > div > p.error').should('be.visible').and('contain','入力された数字が異なります。再度ご確認ください。')
    })

    // it('6 全角で数字を入力（やり方が分からない）', ()=>{  
    // })  

    it('7 2段階認証ひらがな入力', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.get('input[name="checkNum"]').type('ああああああ')
        cy.get('button').contains('Confirm').click(); // ここを 'confirm' に修正
        cy.get('input[name="checkNum"]').should('be.visible').and('contain','clear')
    })

    it('8 2段階認証ひらがなと数字入力', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.get('input[name="checkNum"]').type('あああ１１１')
        cy.get('button').contains('Confirm').click(); // ここを 'confirm' に修正
        cy.get('input[name="checkNum"]').should('be.visible').and('contain','')
    })

    it('9 2段階認証送信された数字と違う数字を入力' , ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click()
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.get('input[name="checkNum"]').type('123456')
        cy.get('button').contains('Confirm').click(); // ここを 'confirm' に修正
        cy.get('body > main > div > p.error').should('be.visible').and('contain','入力された数字が異なります。再度ご確認ください。')
    })

    it('9 BACKで戻る' , ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click()
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.get('body > main > div > form > div > a').click()
        cy.get('body > main > div > p:nth-child(1)').should('be.visible').and('contain', '登録に使用するメールアドレスを入力してください。');
        cy.get('body > main > div > p:nth-child(2)').should('be.visible').and('contain', '入力されたメールアドレスに6桁の認証番号を送ります。');
    })

    it('10 SQLインジェクション', ()=>{        
        cy.visit('/toLogin')
        cy.get('body > main > form > div.login_btns > a').click();
        cy.get('input[name="email"]').type('test15@test')
        cy.get('button').contains('Send').click()
        cy.get('input[name="checkNum"]').type("' OR 1=1 '")
        cy.get('button').contains('Confirm').click(); // ここを 'confirm' に修正
        cy.get('input[name="checkNum"]').should('be.visible').and('contain','')
    })



})