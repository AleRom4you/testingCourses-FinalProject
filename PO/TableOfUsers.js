'use strict';

let TableOfUsers = function() {
    let tableBody = element(by.tagName('tbody')),
        tableRows = tableBody.all(by.tagName('tr')),
        modalDialog = element(by.className('modal-dialog ')),
        buttonOk = modalDialog.element(by.id('ok'));

    this.tableBodyIsNotEmpty = function () {
        expect(tableRows.count()).toBeGreaterThan(0);
    };

    this.getDataFromRowByIndex = function (index) {
        let row = tableRows.get(index);

        return {
            name: row.element(by.binding('u.userName')),
            address: row.element(by.binding('u.address')),
            email: row.element(by.binding('u.email')),
            buttonEdit: row.element(by.id('edit')),
            buttonRemove: row.element(by.id('remove'))
        }
    };

    this.getDataFromRow = function (row) {
        return {
            name: row.element(by.binding('u.userName')),
            address: row.element(by.binding('u.address')),
            email: row.element(by.binding('u.email')),
            buttonEdit: row.element(by.id('edit')),
            buttonRemove: row.element(by.id('remove'))
        };
    };

    this.getNumberOfRowsOfTable = function () {
        return tableRows.count();
    };

    this.tableRowDataCheckByRowIndex = function (index, name, address, email) {
        let user = this.getDataFromRowByIndex(index);

        expect(user.name.getText()).toEqual(name);
        expect(user.address.getText()).toEqual(address);
        expect(user.email.getText()).toEqual(email);
    };

    this.tableLastRowDataCheck = function (name, address, email) {
        let user = this.getDataFromRow(tableRows.last());

        expect(user.name.getText()).toEqual(name);
        expect(user.address.getText()).toEqual(address);
        expect(user.email.getText()).toEqual(email);
    };

    this.isTableNotContainRowByName = function (name) {
        expect(tableRows.all(by.cssContainingText('.user-name-td', name)).count()).toBeGreaterThanOrEqual(1);
    };

    this.isTableNotContainsDuplicateRowByName = function (name) {
        expect(tableRows.all(by.cssContainingText('.user-name-td', name)).count()).toEqual(1);
    };

    this.buttonEditIsEnabled = function (user) {
        expect(user.buttonEdit.isEnabled()).toBe(true);
    };

    this.buttonEditClick = function (user) {
        user.buttonEdit.click();
    };

    this.buttonRemoveIsEnabled = function (user) {
        expect(user.buttonRemove.isEnabled()).toBe(true);
    };

    this.buttonRemoveIsDisabled = function (user) {
        expect(user.buttonRemove.isEnabled()).toBe(false);
    };

    this.buttonRemoveClick = function (user) {
        user.buttonRemove.click();
    };

    this.buttonOkIsEnabled = function () {
        expect(buttonOk.isEnabled()).toBe(true);
    };

    this.buttonOkClick = function () {
        buttonOk.click();
    };
};
module.exports = new TableOfUsers();