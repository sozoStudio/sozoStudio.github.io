chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create("index.html#/home", {
    frame: "chrome", bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600
  });
});

var winID;
chrome.contextMenus.onClicked.addListener(function proccess_interested(info, tab){

    chrome.tabs.create({active: false}, function(newTab) {

    // After the tab has been created, open a window to inject the tab into it.
    chrome.windows.create(
        {
            tabId:      newTab.id,
            type:       "popup",
            url:        chrome.extension.getURL('chap1_intro.html'),
            focused: true
        },function(window){
                 winID = newWindow.id;
          });
    });
})

chrome.extension.onMessage.addListener(function(Msg, sender, sendResponse) {

if(Msg.close_comment_win){
    chrome.windows.remove(winID, function(){});
}
});
// chrome.commands.onCommand.addListener(function(command) {
//   console.log("Command triggered: " + command);
//   if (command == "cmdNew") {
//     chrome.app.window.create("index.html", {
//       frame: "chrome", bounds: { width: 500, height: 900}, minWidth:500, minHeight: 900
//     });
//   }
// });
