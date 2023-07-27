function injectCode() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs.length > 0) {
      chrome.scripting.executeScript({
        target: {tabId: tabs[0].id},
        files: ['dist/main.js']
      });
    }
  });
}

document.getElementById('inject-button').addEventListener('click', injectCode);
