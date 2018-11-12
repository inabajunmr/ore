chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (request == "parrotize") {
		parrotize();
	}
});

function parrotize() {
    alert("Hello World");
}
