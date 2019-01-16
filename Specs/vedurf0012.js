let userRegistrationForm = require('../PO/UserRegistrationForm');
let listOfUsers = require('../PO/ListOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0012: Нельзя удалить редактируемую в данный момент запись', function () {
    it('1. Откройте HomePage (http://localhost:8080/TestAppExample/index)', function () {
        userRegistrationForm.getHomePage();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });

    it('2. Проверьте наличие данных в таблице TableName', function () {
        // Comparison of expected and actual results
        listOfUsers.tableBodyIsNotEmpty();
    });

    it('3. Выберите строку в таблице с заполненными данными, запомните её номер и проверьте доступна ли ' +
        'кнопка “Edit” в данной строке для нажатия', function () {
        listOfUsers.getDataFromRowByIndex(dataForTest.vedurf0012.rowIndex);
        // Comparison of expected and actual results
        listOfUsers.buttonEditIsEnabled();
    });

    it('4. Проверьте доступна ли кнопка “Remove” в данной строке для нажатия', function () {
        // Comparison of expected and actual results
        listOfUsers.buttonRemoveIsEnabled();
    });

    it('5. Нажмите кнопку “Edit”', function () {
        listOfUsers.buttonEditClick();
        // Comparison of expected and actual results
        listOfUsers.buttonRemoveIsDisabled();
    });
});