exports.config = {
    runner: 'local',

    // THÊM DÒNG NÀY: Xóa sạch các cờ chạy ngầm mà WebdriverIO cố tiêm vào Node.js
    execArgv: [],

    port: 4723,
    path: '/',
    specs: [
        './app.test.cjs'
    ],
    maxInstances: 1,

    // Giữ nguyên dòng tắt autoCompile này
    autoCompileOpts: {
        autoCompile: false
    },

    capabilities: [{
        platformName: 'Android',
        browserName: 'chrome',
        'appium:deviceName': 'emulator-5554',
        'appium:automationName': 'UiAutomator2',
        'appium:autoGrantPermissions': true,
        'appium:newCommandTimeout': 240, // Cho Appium thêm thời gian (240s) để không bị timeout

        'goog:chromeOptions': {
            args: [
                '--no-first-run',
                '--disable-fre',
                '--disable-popup-blocking',
                '--disable-notifications', // Chặn triệt để popup thông báo
                '--disable-search-engine-choice-screen' // Chặn màn hình chọn Google/Bing
            ]
        }
    }],
    logLevel: 'info',
    bail: 0,
    baseUrl: 'http://10.0.2.2:3000', // Đổi localhost thành 10.0.2.2
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: [
        ['appium', {
            args: {
                // Thêm tiền tố uiautomator2: vào trước
                allowInsecure: 'uiautomator2:chromedriver_autodownload'
            }
        }]
    ],
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}