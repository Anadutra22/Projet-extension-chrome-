chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.executeScript({
    });
    chrome.tabs.insertCSS({
        code: 'body {-webkit-filter: hue-rotate(180deg);}'
    });
});