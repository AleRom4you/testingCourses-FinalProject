let tableOfUsers = require('../PO/TableOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0009: Удаление данных зарегистрированного пользователя', function () {
    let user; // This variable contain object user, which got from row of users table

    it('1. Откройте HomePage', function () {
        browser.navigate().to(dataForTest.url);
        browser.waitForAngular();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual(dataForTest.url);
    });

    it('2. Проверьте наличие данных в таблице TableName', function () {
        // Comparison of expected and actual results
        tableOfUsers.tableBodyIsNotEmpty();
    });

    it('3. Выберите строку в таблице с заполненными данными, запомните её номер и проверьте доступна ли ' +
        'кнопка “Remove” в данной строке для нажатия', function () {
        user = tableOfUsers.getDataFromRowByIndex(dataForTest.vedurf0009.rowIndex);
        // Comparison of expected and actual results
        tableOfUsers.buttonRemoveIsEnabled(user);
    });

    it('4. Нажмите данную кнопку', function () {
        tableOfUsers.buttonRemoveClick(user);
    });

    it('5. В открывшемся диалоговом окне нажмите кнопку “OK”', function () {
        tableOfUsers.buttonOkIsEnabled();
        tableOfUsers.buttonOkClick();
        // Comparison of expected and actual results
        expect(tableOfUsers.getDataFromRowByIndex(dataForTest.vedurf0009.rowIndex)).not.toEqual(user);
    });
});