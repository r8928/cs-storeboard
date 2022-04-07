const { getBrowser, getIframe, screenshot, setValue, type, getText, click, goto, sleep, } = require('./ppt'); // prettier-ignore
const { env } = require('./.env');
const { options, selectors } = require('./options');
const { msg } = require('./msg');

/** @var {puppeteer.Page} page */
var page;

async function run() {
  const debug = false;

  page = (await getBrowser(debug)).page;
  await page._client.send('Page.setDownloadBehavior', {
    behavior: 'allow',
    downloadPath: env.downloadPath,
  });
  await login();

  await sleep(10000);
}

async function login() {
  msg.step('login');
  // await screenshot(page);

  await goto(page, options.DASHBOARD_URL);

  await page.waitForNavigation({ waitUntil: 'networkidle0' });

  const cur_page = await page.url();
  msg.substep(cur_page);

  if (String(cur_page).includes(options.LOGIN_DOMAIN)) {
    msg.substep('onLoginPage');
    await onLoginPage();
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
  }

  if (String(cur_page).includes(options.POSTAUTH_DOMAIN)) {
    msg.substep('onPostAuthPage');
    await onPostAuthPage();
    await page.waitForNavigation({ waitUntil: 'networkidle0' });
  }

  if (String(cur_page).includes(options.DASHBOARD_URL)) {
    msg.substep('onDashboard');
    await onDashboard();
  }

  async function onLoginPage() {
    await page.waitForSelector(selectors.LOGIN.SUBMIT);

    await setValue(page, selectors.LOGIN.USER, env.username);
    await setValue(page, selectors.LOGIN.PASSWORD, env.password);
    await click(page, selectors.LOGIN.SUBMIT);
  }

  async function onPostAuthPage() {
    await page.waitForSelector(selectors.POSTAUTH.CONTINUE);
    await click(page, selectors.POSTAUTH.CONTINUE);
  }
}

async function onDashboard() {
  console.log('goooood to gooooo');
}
run();
