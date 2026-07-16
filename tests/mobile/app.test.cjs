const { expect } = require('@wdio/globals');

describe('Mobile Web Testing', () => {
    it('should show the mock app correctly on a mobile browser', async () => {
        // Appium sẽ mở Chrome trên device giả lập
        await browser.url('http://10.0.2.2:3000');
        
        const title = await browser.getTitle();
        expect(title).toMatch(/Mock App/);

        const btn = await $('#clickMeBtn');
        await btn.click();

        const msg = await $('#message');
        expect(await msg.getText()).toEqual('Button was clicked!');
    });
});
