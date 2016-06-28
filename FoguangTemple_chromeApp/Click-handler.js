// ------------------   index link to sunrise page  ------------------

var indexbutton = $('#indexbutton');
indexbutton.click(function() {
    // After the tab has been created, open a window to inject the tab into it.
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('chap1_intro.html',
        {
            type:       "panel",
            bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600,
            focused: true
        });
});
// ------------------   index link to sunrise page end ------------------

// ------------------   sunrise link to sunrise page  ------------------

var sunrisebutton = $('#sunrisebutton');
sunrisebutton.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('chap1_timeline.html',
        {
            type:       "panel",
            bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600,
            focused: true
        });
});
// ------------------   sunrise link to sunrise page end ------------------

// ------------------   timeline link to sunrise page  ------------------

var timelinebutton = $('#timelinebutton');
timelinebutton.click(function() {
    // After the tab has been created, open a window to inject the tab into it.
    chrome.app.window.create('chap2_second.html',
        {
            type:       "panel",
            bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600,
            focused: true
        });
});
// ------------------   timeline link to sunrise page end ------------------


// ------------------   ALL Tab links ------------------
var tabchap1 = $('#tab-chap1');
tabchap1.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('chap1_timeline.html',
        {
            type:       "panel",
            bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600,
            focused: true
        });
});

var tabchap2 = $('#tab-chap2');
tabchap2.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('chap2_second.html',
        {
            type:       "panel",
            bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600,
            focused: true
        });
});

var tabchap3 = $('#tab-chap3');
tabchap3.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('pan_scene6.html',
        {
            type:       "panel",
            bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600,
            focused: true
        });
});

var tabchap4 = $('#tab-chap4');
tabchap4.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('pan_scene1.html',
        {
            type:       "panel",
            bounds: { width: 800, height: 600}, minWidth:800, minHeight: 600,
            focused: true
        });
});
// ------------------   ALL Tab links ------------------
