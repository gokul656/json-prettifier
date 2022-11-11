console.log("RUNNING");

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (tab.url?.startsWith("chrome://")) return undefined;

  chrome.scripting.insertCSS(
    {
        target: { tabId: tabId },
        files: ["stylesheet.css"]
    }
  );
  
//   chrome.scripting.executeScript({
//     target: { tabId: tabId },
//     func: () => (document.body.style.backgroundColor = "orange"),
//     args: [],
//   });
});
console.log("RUNNING FINISHED");
