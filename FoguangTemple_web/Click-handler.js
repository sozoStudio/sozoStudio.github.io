// ------------------   index link to sunrise page  ------------------
document.getElementById("indexbutton").addEventListener("click", sunrisebutton);

function sunrisebutton() {
    // After the tab has been created, open a window to inject the tab into it.
    chrome.app.window.current().close();
    chrome.app.window.create('chap1_timeline.html',
        {
            type:       "panel",
            bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600,
            focused: true
        });
}
