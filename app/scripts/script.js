chrome.extension.onMessage.addListener(function(request, sender, sendResponse) {
	if (JSON.parse(request.command) == "ore") {
		ore(request.imageUrl);
	}
	console.log(request)
});

function ore(imageUrl) {
	console.log("ore")
	imgs = document.querySelectorAll("img")
	imgs.forEach(function(element) {
		element.setAttribute("src", imageUrl)
		element.removeAttribute("srcset")
		});
}
