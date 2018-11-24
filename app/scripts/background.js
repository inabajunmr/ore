chrome.browserAction.onClicked.addListener(function(tab) {
	console.log("send")
	chrome.tabs.sendMessage(tab.id, "parrotize");
});

// https://github.com/dai0304/pegmatite/blob/1.2.0/pegmatite/background.js

function fetchImage(uri, callback) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", uri, true);
	xhr.responseType = "arraybuffer";
	xhr.onload = function() {
		var contentType = xhr.getResponseHeader("Content-Type");
		var unicode = toUnicodeString(xhr.response);
		var base64 = encodeBase64(unicode);
		var dataUri = "data:" + contentType + ";base64," + base64;
		callback(dataUri);
	};

	xhr.send();
}

function toUnicodeString(arrayBuffer) {
	var bytes = new Uint8Array(arrayBuffer);
	var binaryString = "";
	for(var i = 0; i < bytes.byteLength; i++) {
		binaryString += String.fromCharCode(bytes[i]);
	}
	return binaryString;
}

function encodeBase64(string) {
	return window.btoa(string);
}

function onMessage(message, sender, callback) {
	if(message.action == "parrotize") {
		fetchImage(message.url, callback);
	}
	return true;
}

chrome.runtime.onMessage.addListener(onMessage);