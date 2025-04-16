describe('Vizaro用テスト　テスト月間週間画面' , ()=>{
    
    it('週表示に切り替えを押下' , () =>{

     //本来であれば各ロールでログインする
     //  cy.visit()
     //  cy.get('').type('')
     //  cy.get('').type('')
     //  cy.get('').click()

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > a").click()
        cy.contains('前週')
    })

    it('前年を押下', ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span:nth-child(1) > a:nth-child(1)").click()
        cy.contains('2024年04月')

    })

    it('前年を押下→前年を押下' , () =>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span:nth-child(1) > a:nth-child(1)").click()
        cy.get("body > div > div > span:nth-child(1) > a:nth-child(1)").click()
        cy.contains('2023年04月')
    })

    it('来年を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span:nth-child(1) > a:nth-child(2)").click()
        cy.contains('2026年04月')
    })

    it('来年を押下→来年を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span:nth-child(1) > a:nth-child(2)").click()
        cy.get("body > div > div > span:nth-child(1) > a:nth-child(2)").click()
        cy.contains('2027年04月')
    })

    it('１月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(1)").click()
        cy.contains('2025年01月')
    })

    it('２月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(2)").click()
        cy.contains('2025年02月')
    })

    it('３月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(3)").click()
        cy.contains('2025年03月')
    })

    it('４月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(4)").click()
        cy.contains('2025年04月')
    })

    it('５月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(5)").click()
        cy.contains('2025年05月')
    })

    it('６月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(6)").click()
        cy.contains('2025年06月')
    })

    it('７月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(7)").click()
        cy.contains('2025年07月')
    })

    it('８月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(8)").click()
        cy.contains('2025年08月')
    })

    it('９月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(9)").click()
        cy.contains('2025年09月')
    })

    it('１０月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(10)").click()
        cy.contains('2025年10月')
    })

    it('１１月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(11)").click()
        cy.contains('2025年11月')
    })

    it('１２月を押下' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(12)").click()
        cy.contains('2025年12月')
    })

    it('２０２５年１月の月曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(1)").click()
        cy.contains('2025年01月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年２月の火曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(2)").click()
        cy.contains('2025年02月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年３月の水曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(3)").click()
        cy.contains('2025年03月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年４月の木曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(4)").click()
        cy.contains('2025年04月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(5) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年５月の金曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(5)").click()
        cy.contains('2025年05月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(6) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年６月の土曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(6)").click()
        cy.contains('2025年06月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(7) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年７月の日曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(7)").click()
        cy.contains('2025年07月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年１月の月曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(1)").click()
        cy.contains('2025年01月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年２月の火曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(2)").click()
        cy.contains('2025年02月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年３月の水曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(3)").click()
        cy.contains('2025年03月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(4) > a > div").click()
        cy.contains('タイトル')
    })


    it('２０２５年４月の木曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(4)").click()
        cy.contains('2025年04月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(5) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年５月の金曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(5)").click()
        cy.contains('2025年05月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(6) > a > div").click()
        cy.contains('タイトル')
    })


    it('２０２５年６月の土曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(6)").click()
        cy.contains('2025年06月')
        cy.get("body > div > table > tbody > tr:nth-child(1) > td:nth-child(7) > a > div").click()
        cy.contains('タイトル')
    })

    it('２０２５年７月の日曜日の空欄を押下→スケジュール追加画面へ遷移' , ()=>{

        cy.visit('http://127.0.0.1:8000/month_with_schedule/2025/4/')
        cy.get("body > div > div > span.month_link > a:nth-child(7)").click()
        cy.contains('2025年07月')
        cy.get("body > div > table > tbody > tr:nth-child(2) > td:nth-child(1) > a > div").click()
        cy.contains('タイトル')
    })

    



    











})