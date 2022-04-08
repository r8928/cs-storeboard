const path = require('path');
const { getBrowser, getIframe, screenshot, setValue, type, getText, click, goto, sleep, } = require('./ppt'); // prettier-ignore
const { env } = require('./.env');
const { options, selectors } = require('./options');
const { msg } = require('./msg');
const puppeteer = require('puppeteer');
const { downloadRanker } = require('./downloadRanker');

async function run() {
  const debug = false;

  page = (await getBrowser(debug)).page;

  await login(page);
  await onDashboard(page);

  // msg.step('GOING TO SLEEP');
  // await sleep(30000);

  process.exit();
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
  await page.waitForNavigation({ waitUntil: 'networkidle0' });
  await sleep(10000);

  await page.waitForSelector(selectors.DASHBOARD.PROFILE, {
    timeout: 30000,
    visible: true,
  });
  msg.step('onDashboard');

  const downloadPath = path.resolve(env.downloadPath);
  msg.step(downloadPath);

  await page._client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath,
  });

  // await page.exposeFunction('downloadRanker', new downloadRanker());
  // const x = new downloadRanker();

  try {
    resultHandle = await page.evaluate(downloadRanker);

    msg.step(resultHandle);
  } catch (error) {
    msg.error('FILES NOT DOWNLOADED');
  }

  // msg.step("waitForSelector('#DOWNLOAD_COMPLETED'");
  await page.waitForSelector('#DOWNLOAD_COMPLETED');
  await sleep(3000);
}

run();
