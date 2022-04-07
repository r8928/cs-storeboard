module.exports.downloadRanker = async () => {
  var GET = async ({ body, filename }) => {
    return fetch(
      'https://www.e-access.att.com/DayBreak/apis/processRequest?HierachyId=148274400&HierachyLevel=0&masterDealerId=3898&channel=AUTHORIZED%20RETAIL',
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
      .concat(new Date().toISOString().replace(/\D+/g, '-'))
      .concat('-')
      .concat(filename)
      .concat('.xlsx');
    document.body.appendChild(a); // we need to append the element to the dom -> otherwise it will not work in firefox
    a.click();
    a.remove();
  };

  var dict = {
    RANKER_2_LOCATION: {
      body: 'cmd=histAnalysisExport&addlData=%7B%22hierarchyId%22%3A148274400%2C%22masterDealerId%22%3A%223898%22%2C%22detailLevelId%22%3A%227%22%2C%22kpiIdList%22%3A%222497%2C1907%2C1911%2C1915%2C1673%2C2381%2C2029%2C1691%2C1692%2C1677%2C6%2C144%2C1171%2C787%2C2387%2C2613%2C2618%2C2355%2C2354%2C1507%2C1504%22%2C%22startPeriod%22%3A27%2C%22endPeriod%22%3A27%2C%22timeScenario%22%3A2%2C%22goalType%22%3A%22goalType_3%22%2C%22showHierarchy%22%3Afalse%2C%22showValueChange%22%3Afalse%2C%22showPercentChange%22%3Afalse%2C%22showYoYValueChange%22%3Afalse%2C%22showYoYPercentChange%22%3Afalse%2C%22showAttainment%22%3Afalse%2C%22showLocId%22%3Afalse%2C%22showDlrCode%22%3Afalse%2C%22showCenters%22%3A%22N%22%2C%22autoExport%22%3Atrue%7D&secondLkupId=',
      filename: 'RANKER_2_LOCATION',
    },
    RANKER_2_RAE: {
      body: 'cmd=histAnalysisExport&addlData=%7B%22hierarchyId%22%3A148274400%2C%22masterDealerId%22%3A%223898%22%2C%22detailLevelId%22%3A%226%22%2C%22kpiIdList%22%3A%222497%2C1907%2C1911%2C1915%2C1673%2C2381%2C2029%2C1691%2C1692%2C1677%2C6%2C144%2C1171%2C787%2C2387%2C2613%2C2618%2C2355%2C2354%2C1507%2C1504%22%2C%22startPeriod%22%3A27%2C%22endPeriod%22%3A27%2C%22timeScenario%22%3A2%2C%22goalType%22%3A%22goalType_3%22%2C%22showHierarchy%22%3Afalse%2C%22showValueChange%22%3Afalse%2C%22showPercentChange%22%3Afalse%2C%22showYoYValueChange%22%3Afalse%2C%22showYoYPercentChange%22%3Afalse%2C%22showAttainment%22%3Afalse%2C%22showLocId%22%3Afalse%2C%22showDlrCode%22%3Afalse%2C%22showCenters%22%3A%22N%22%2C%22autoExport%22%3Atrue%7D&secondLkupId=',
      filename: 'RANKER_2_RAE',
    },
    RANKER_1_RAE: {
      body: 'cmd=histAnalysisExport&addlData=%7B%22hierarchyId%22%3A148274400%2C%22masterDealerId%22%3A%223898%22%2C%22detailLevelId%22%3A%226%22%2C%22kpiIdList%22%3A%222082%2C76%2C1483%2C1939%2C2000%2C96%2C1674%2C1799%2C2388%2C68%2C1801%2C1800%2C1196%2C1908%2C1909%2C1910%2C1912%2C1913%2C1914%2C1904%2C1905%2C1906%2C2290%2C1435%2C2352%2C2357%2C1531%2C2621%22%2C%22startPeriod%22%3A27%2C%22endPeriod%22%3A27%2C%22timeScenario%22%3A2%2C%22goalType%22%3A%22goalType_3%22%2C%22showHierarchy%22%3Afalse%2C%22showValueChange%22%3Afalse%2C%22showPercentChange%22%3Afalse%2C%22showYoYValueChange%22%3Afalse%2C%22showYoYPercentChange%22%3Afalse%2C%22showAttainment%22%3Afalse%2C%22showLocId%22%3Afalse%2C%22showDlrCode%22%3Afalse%2C%22showCenters%22%3A%22N%22%2C%22autoExport%22%3Atrue%7D&secondLkupId=',
      filename: 'RANKER_1_RAE',
    },
    RANKER_1_LOCATION: {
      body: 'cmd=histAnalysisExport&addlData=%7B%22hierarchyId%22%3A148274400%2C%22masterDealerId%22%3A%223898%22%2C%22detailLevelId%22%3A%227%22%2C%22kpiIdList%22%3A%222082%2C76%2C1483%2C1939%2C2000%2C96%2C1674%2C1799%2C2388%2C68%2C1801%2C1800%2C1196%2C1908%2C1909%2C1910%2C1912%2C1913%2C1914%2C1904%2C1905%2C1906%2C2290%2C1435%2C2352%2C2357%2C1531%2C2621%22%2C%22startPeriod%22%3A27%2C%22endPeriod%22%3A27%2C%22timeScenario%22%3A2%2C%22goalType%22%3A%22goalType_3%22%2C%22showHierarchy%22%3Afalse%2C%22showValueChange%22%3Afalse%2C%22showPercentChange%22%3Afalse%2C%22showYoYValueChange%22%3Afalse%2C%22showYoYPercentChange%22%3Afalse%2C%22showAttainment%22%3Afalse%2C%22showLocId%22%3Afalse%2C%22showDlrCode%22%3Afalse%2C%22showCenters%22%3A%22N%22%2C%22autoExport%22%3Atrue%7D&secondLkupId=',
      filename: 'RANKER_1_LOCATION',
    },
  };

  await GET(dict.RANKER_2_RAE);
  console.log('RANKER_2_RAE');
  await GET(dict.RANKER_2_LOCATION);
  console.log('RANKER_2_LOCATION');
  await GET(dict.RANKER_1_RAE);
  console.log('RANKER_1_RAE');
  await GET(dict.RANKER_1_LOCATION);
  console.log('RANKER_1_LOCATION');

  const div = document.createElement('div');
  div.id = 'DOWNLOAD_COMPLETED';
  document.body.appendChild(div);
  console.log('DOWNLOAD_COMPLETED');

  return 'DOWNLOAD_COMPLETED';
};
