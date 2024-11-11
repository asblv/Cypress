describe('Покупка аватара', function () {

    it(' e2e автотест для покемонов: на покупку нового аватара для своего тренера', function () {
         cy.visit('https://pokemonbattle.ru/login'); // Зашли на сайт
         cy.get(':nth-child(1) > .auth__input').type('LOGIN'); // Ввели верный логин
         cy.get('#password').type('PASSWORD'); // Ввели верный логин
         cy.get('.auth__button').click(); // Нажал войти
         cy.wait(3000);
         cy.visit('https://pokemonbattle.ru/shop'); // Зашли в магазин
         cy.get('.available > button').first().click({ force: true }); // Нажали купить
         cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('282435222948242861'); // Ввели номер карты
         cy.get(':nth-child(1) > .pay_base-input-v2').type('12/25'); // Ввели дату
         cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125'); // Ввели CVV
         cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ivan ivanov'); // Ввели имя владельца
         cy.get('.pay-btn').click(); // Нажал Оплатить
         cy.get('#cardnumber').type('56456'); // Код из пуша
         cy.get('.payment__submit-button').click(); // Нажал Отправить
         cy.contains('Покупка прошла успешно').should('be.visible'); //Проверяем сообщение
         cy.get('.payment__adv').click(); // Возвращаемся в магазин
     })
    })
 
     
 
 
 // запуск через терминал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
 