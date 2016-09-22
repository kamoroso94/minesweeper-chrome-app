chrome.app.runtime.onLaunched.addListener(function() {
	chrome.app.window.create("index.html", {
		frame: {
			color: "#FFFFFF"
		},
		resizable: false
	});
});