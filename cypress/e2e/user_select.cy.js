describe('登録選択形式', () =>{
it('1 レイアウト', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('testtest1@test')
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

it('2 所属会社でユーザー登録画面を押下', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('testtest1@test')
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

      cy.get('button').contains('所属会社でユーザー登録').click();

      cy.get('body > main > form > h1').should('be.visible').and('contain', 'Sign Up to ViZaro');
    
})

it('3 所属会社でユーザー登録画面にカーソルを合わせる', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('testtest1@test')
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

      cy.contains('button', '所属会社でユーザー登録').trigger('mouseover');

      cy.get('body > main > div.company > p').should('be.visible').and('contain', 'ご自身の会社名を記載の上、ユーザーの新規登録を行なってください。');
    
})

it('4 新規で会社を登録を押下', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('testtest1@test')
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

      cy.get('button').contains('新規で会社を登録').click();

      cy.get('body > main > form > h1').should('be.visible').and('contain', 'Sign Up to ViZaro');
    
})

it('5 新規で会社を登録にカーソルを合わせる', ()=>{        
    cy.visit('/toLogin')
    cy.get('body > main > form > div.login_btns > a').click();
    cy.get('input[name="email"]').type('testtest1@test')
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

      cy.contains('button', '所属会社でユーザー登録').trigger('mouseover');

      cy.get('body > main > div.new_company > p:nth-child(1)').should('be.visible').and('contain', 'ご自身の会社名を正式名称で記載の上、ユーザーの新規登録を行なってください。');
    
})



})