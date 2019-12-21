chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	var requestJson = JSON.parse(request)
	if (requestJson.command == "ore") {
		ore(requestJson.imageUrl);
	}
});

function ore(imageUrl) {
	imgs = document.querySelectorAll("img")
	imgs.forEach(function(element) {
		element.setAttribute("src", imageUrl)
		element.removeAttribute("srcset")
		});
}
