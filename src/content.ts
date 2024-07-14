const capturedScreen = document.documentElement.outerHTML;

chrome.runtime.sendMessage({ content: capturedScreen })