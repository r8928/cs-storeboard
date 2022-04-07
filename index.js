const { getBrowser, getIframe, screenshot, setValue, type, getText, click, goto, sleep, } = require('./ppt'); // prettier-ignore
const { env } = require('./.env');
const { options, selectors } = require('./options');
const { msg } = require('./msg');
const puppeteer = require('puppeteer');
const { downloadRanker } = require('./downloadRanker');

async function run() {
  const debug = false;

  page = (await getBrowser(debug)).page;
  await page._client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: env.downloadPath,
  });

  await login(page);
  await onDashboard(page);
}

async function login() {
  msg.step('login');
  // await screenshot(page);

  await goto(page, options.DASHBOARD_URL);

  if (String(await page.url()).includes(options.LOGIN_DOMAIN)) {
    msg.substep('onLoginPage');
    await onLoginPage();
  }

  if (String(await page.url()).includes(options.POSTAUTH_DOMAIN)) {
    msg.substep('onPostAuthPage');
    await onPostAuthPage();
  }

  async function onLoginPage() {
    await type(page, selectors.LOGIN.USER, env.username);
    await type(page, selectors.LOGIN.PASSWORD, env.password);
    await click(page, selectors.LOGIN.SUBMIT);

    try {
      await page.waitForSelector('#errorMessage', {
        timeout: 2000,
        visible: true,
      });

      msg.error('PASSWORD ERROR');
    } catch (error) {}
  }

  async function onPostAuthPage() {
    await page.waitForSelector(selectors.POSTAUTH.CONTINUE);
    await click(page, selectors.POSTAUTH.CONTINUE);
  }
}

/** @param {puppeteer.Page} page */
async function onDashboard(page) {
  await page.waitForSelector(selectors.DASHBOARD.PROFILE);
  msg.step('onDashboard');
  const resultHandle = await page.evaluate(downloadRanker);
  TopModels = await resultHandle;
}

run();
