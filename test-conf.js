let spawn = require('child_process').spawn;
let updateWebdriverManager = spawn('node node_modules/protractor/bin/webdriver-manager update', {
    stdio: 'inherit',
    shell: true
});
updateWebdriverManager.on('close', function (wmUpdateExitCode) {
    let waitForWebdriverStartTimeout = 2000;
    let tests;
    if (wmUpdateExitCode !== 0) {
        process.exit(1);
    }
    spawn('node node_modules/protractor/bin/webdriver-manager start', { // будет висеть в фоне, пока не пройдут тесты
        shell: true
    });
    setTimeout(function () {
        tests = spawn('node node_modules/protractor/bin/protractor protractor.conf.js', { // замените название конфигурационного файла на свое, если оно отличается от предложенного
            stdio: 'inherit',
            shell: true
        });
    }, waitForWebdriverStartTimeout);
});