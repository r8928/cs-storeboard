module.exports.downloadRanker = async () => {
  const hierachyId = loginDisplayNode.hierarchyIdPath.split('|')[0];

  const ranker1Metrics = encodeURIComponent(
    '2082,76,1483,1939,2000,96,1674,1799,2388,68,1801,1800,1196,1908,1909,1910,1912,1913,1914,1904,1905,1906,2290,1435,2352,2357,1531,2621',
  );
  const ranker2Metrics = encodeURIComponent(
    '1340,405,2497,1907,1911,1915,1673,2381,2029,1691,1692,1677,6,144,1171,787,2387,2613,2618,2355,2354,1507,1504,793,2421',
  );

  var GET = async ({ body, filename }) => {
    return fetch(
      'https://www.e-access.att.com/DayBreak/apis/processRequest?HierachyId=' +
        hierachyId +
        '&HierachyLevel=0&masterDealerId=3898&channel=AUTHORIZED%20RETAIL',
      {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          'upgrade-insecure-requests': '1',
        },
        referrer:
          'https://www.e-access.att.com/salesdashboard/DayBreak/dashboardAction.do',
        referrerPolicy: 'strict-origin-when-cross-origin',
        body,
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
      },
    )
      .then(response => response.blob())
      .then(blob => {
        downloadFile(blob, filename);
      });
  };

  var downloadFile = (blob, filename) => {
    var url = window.URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = 'AT&T MyResults - Historical Analysis'
      .concat('-')
      .concat(filename)
      .concat('.xlsx');
    document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
    a.click();
    a.remove();
  };

  var dict = [
    {
      body: 'cmd=histAnalysisExport&addlData=%7B%22hierarchyId%22%3A148274400%2C%22masterDealerId%22%3A%223898%22%2C%22detailLevelId%22%3A%227%22%2C%22kpiIdList%22%3A%22KPI_ID_LIST2%22%2C%22startPeriod%22%3A27%2C%22endPeriod%22%3A27%2C%22timeScenario%22%3A2%2C%22goalType%22%3A%22goalType_3%22%2C%22showHierarchy%22%3Afalse%2C%22showValueChange%22%3Afalse%2C%22showPercentChange%22%3Afalse%2C%22showYoYValueChange%22%3Afalse%2C%22showYoYPercentChange%22%3Afalse%2C%22showAttainment%22%3Afalse%2C%22showLocId%22%3Afalse%2C%22showDlrCode%22%3Afalse%2C%22showCenters%22%3A%22N%22%2C%22autoExport%22%3Atrue%7D&secondLkupId=',
      filename: 'RANKER_2_LOCATION',
    },
    {
      body: 'cmd=histAnalysisExport&addlData=%7B%22hierarchyId%22%3A148274400%2C%22masterDealerId%22%3A%223898%22%2C%22detailLevelId%22%3A%220%22%2C%22kpiIdList%22%3A%22KPI_ID_LIST2%22%2C%22startPeriod%22%3A27%2C%22endPeriod%22%3A27%2C%22timeScenario%22%3A2%2C%22goalType%22%3A%22goalType_3%22%2C%22showHierarchy%22%3Afalse%2C%22showValueChange%22%3Afalse%2C%22showPercentChange%22%3Afalse%2C%22showYoYValueChange%22%3Afalse%2C%22showYoYPercentChange%22%3Afalse%2C%22showAttainment%22%3Afalse%2C%22showLocId%22%3Afalse%2C%22showDlrCode%22%3Afalse%2C%22showCenters%22%3A%22N%22%2C%22autoExport%22%3Atrue%7D&secondLkupId=',
      filename: 'RANKER_2_NATIONAL',
    },
    {
      body: 'cmd=histAnalysisExport&addlData=%7B%22hierarchyId%22%3A148274400%2C%22masterDealerId%22%3A%223898%22%2C%22detailLevelId%22%3A%220%22%2C%22kpiIdList%22%3A%22KPI_ID_LIST1%22%2C%22startPeriod%22%3A27%2C%22endPeriod%22%3A27%2C%22timeScenario%22%3A2%2C%22goalType%22%3A%22goalType_3%22%2C%22showHierarchy%22%3Afalse%2C%22showValueChange%22%3Afalse%2C%22showPercentChange%22%3Afalse%2C%22showYoYValueChange%22%3Afalse%2C%22showYoYPercentChange%22%3Afalse%2C%22showAttainment%22%3Afalse%2C%22showLocId%22%3Afalse%2C%22showDlrCode%22%3Afalse%2C%22showCenters%22%3A%22N%22%2C%22autoExport%22%3Atrue%7D&secondLkupId=',
      filename: 'RANKER_1_NATIONAL',
    },
    {
      body: 'cmd=histAnalysisExport&addlData=%7B%22hierarchyId%22%3A148274400%2C%22masterDealerId%22%3A%223898%22%2C%22detailLevelId%22%3A%227%22%2C%22kpiIdList%22%3A%22KPI_ID_LIST1%22%2C%22startPeriod%22%3A27%2C%22endPeriod%22%3A27%2C%22timeScenario%22%3A2%2C%22goalType%22%3A%22goalType_3%22%2C%22showHierarchy%22%3Afalse%2C%22showValueChange%22%3Afalse%2C%22showPercentChange%22%3Afalse%2C%22showYoYValueChange%22%3Afalse%2C%22showYoYPercentChange%22%3Afalse%2C%22showAttainment%22%3Afalse%2C%22showLocId%22%3Afalse%2C%22showDlrCode%22%3Afalse%2C%22showCenters%22%3A%22N%22%2C%22autoExport%22%3Atrue%7D&secondLkupId=',
      filename: 'RANKER_1_LOCATION',
    },
  ];

  const months = [27];

  const d2 = new Date();

  if (d2.getDate() <= 7) {
    months.push(new Date(new Date().setDate(-1)));
    console.log(`months`, months);
  }

  for (let index = 0; index < months.length; index++) {
    const diff = months[index];

    const month = diff === 27 ? new Date() : new Date(new Date().setDate(0));

    const cur_dict = JSON.parse(JSON.stringify(dict));

    for (let j = 0; j < cur_dict.length; j++) {
      const d = cur_dict[j];

      d.body = d.body.replace(/Period%22%3A27/g, 'Period%22%3A' + diff);
      d.body = d.body.replace('148274400', hierachyId);
      d.body = d.body.replace('KPI_ID_LIST1', ranker1Metrics);
      d.body = d.body.replace('KPI_ID_LIST2', ranker2Metrics);

      const filename = '-' + month.toISOString().split('T').shift();

      d.filename = d.filename.concat(filename);

      await GET(d);
      console.log(d, month.toDateString(), diff);
    }
  }

  const div = document.createElement('div');
  div.id = 'DOWNLOAD_COMPLETED';
  document.body.appendChild(div);
  console.log('DOWNLOAD_COMPLETED');

  return 'DOWNLOAD_COMPLETED';
};
