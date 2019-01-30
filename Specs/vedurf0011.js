let userRegistrationForm = require('../PO/UserRegistrationForm');
let tableOfUsers = require('../PO/TableOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0011: Во время редактировании данных, если нажать “Reset Form” будут доступны первоначальные данные ' +
    'выбранного пользователя', function () {
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
        'кнопка “Edit” в данной строке для нажатия', function () {
        user = tableOfUsers.getDataFromRowByIndex(dataForTest.vedurf0011.rowIndex);
        // Comparison of expected and actual results
        tableOfUsers.buttonEditIsEnabled(user);
    });

    it('4. Нажмите данную кнопку', function () {
        tableOfUsers.buttonEditClick(user);
    });

    it('5. Проверьте, что выбранные данные доступны в полях формы FormName', function () {
        // Comparison of expected and actual results
        userRegistrationForm.inputNameCheckValue(user.name.getText());
        userRegistrationForm.inputAddressCheckValue(user.address.getText());
        userRegistrationForm.inputEmailCheckValue(user.email.getText());
    });

    it('6. Проверьте, что кнопка “Reset Form” недоступна для нажатия', function () {
        // Comparison of expected and actual results
        userRegistrationForm.buttonResetFormIsDisabled();
    });

    it('7. Отредактируйте любое поле формы FormName', function () {
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0011.user.address);
    });

    it('8. Проверьте, что кнопка “Reset Form” доступна для нажатия', function () {
        // Comparison of expected and actual results
        userRegistrationForm.buttonResetFormIsEnabled();
    });

    it('9. Нажмите “Reset Form”', function () {
        userRegistrationForm.buttonResetFormClick();
        // Comparison of expected and actual results
        expect(userRegistrationForm.inputNameCheckValue(''));
        expect(userRegistrationForm.inputAddressCheckValue(''));
        expect(userRegistrationForm.inputEmailCheckValue(''));
    });
});