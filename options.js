module.exports.options = {
  LOGIN_DOMAIN: 'https://oidc.idp.elogin.att.com',
  DASHBOARD_URL:
    'https://www.e-access.att.com/salesdashboard/DayBreak/dashboardAction.do',
  POSTAUTH_DOMAIN: 'https://oidc.idp.elogin.att.com/postauth',
  DASHBOARD_DOMAIN: 'https://www.e-access.att.com/',
};

module.exports.selectors = {
  LOGIN: {
    USER: '#GloATTUID',
    PASSWORD: '#GloPassword',
    SUBMIT: '#GloPasswordSubmit',
  },
  POSTAUTH: {
    CONTINUE: '#successButtonId',
  },
  DASHBOARD: {
    PROFILE: ".profileText"
  }
};
