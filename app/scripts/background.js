chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("send")
	chrome.tabs.sendMessage(tab.id, "parrotize");
});
