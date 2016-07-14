chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html", {
    bounds: { width: 1280, height: 720},
    minWidth:960, minHeight: 540,
    state: "fullscreen"
  });
});


// chrome.commands.onCommand.addListener(function(command) {
//   console.log("Command triggered: " + command);
//   if (command == "cmdNew") {
//     chrome.app.window.create("index.html", {
//       frame: "chrome", bounds: { width: 500, height: 900}, minWidth:500, minHeight: 900
//     });
//   }
// });
