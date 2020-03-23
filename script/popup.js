let slideShow = document.getElementById('slideShow');

slideShow.onclick = function (element) {
  chrome.tabs.executeScript(null, {
    file: 'script/getPageSource.js'
  }, function () {
    if (chrome.runtime.lastError) {}
  });
};

chrome.runtime.onMessage.addListener(function (request, sender) {
  if (request.action == 'getSource') {
    chrome.tabs.create({
      url: '../carousel.html',
      active: false
    }, (tab) => {
      chrome.tabs.onUpdated.addListener(function (tabId, info) {
        if (tabId == tab.id && info.status == 'complete')
          chrome.tabs.sendMessage(tab.id, {
            images: request.source
          });
      });
    });
  }
});