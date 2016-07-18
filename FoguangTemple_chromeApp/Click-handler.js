// ------------------   index link to sunrise page  ------------------

var indexbutton = $('#indexbutton');
indexbutton.click(function() {
    // After the tab has been created, open a window to inject the tab into it.
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('chap1_intro.html',
        {
            type:       "panel",
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
            focused: true
        });
});
// ------------------   index link to sunrise page end ------------------

// ------------------   sunrise link to timeline page  ------------------

var sunrisebutton = $('#sunrisebutton');
sunrisebutton.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('chap1_timeline.html',
        {
            type:       "panel",
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
            focused: true
        });
});
// ------------------   sunrise link to sunrise page end ------------------

// ------------------   timeline link to chapter2 page  ------------------

var timelinebutton = $('#timelinebutton');
timelinebutton.click(function() {
    // After the tab has been created, open a window to inject the tab into it.
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('chap2_second.html',
        {
            type:       "panel",
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
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
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
            focused: true
        });
});

var tabchap2 = $('#tab-chap2');
tabchap2.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('chap2_second.html',
        {
            type:       "panel",
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
            focused: true
        });
});

var tabchap3 = $('#tab-chap3');
tabchap3.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('pan_scene6.html',
        {
            type:       "panel",
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
            focused: true
        });
});

var tabchap4 = $('#tab-chap4');
tabchap4.click(function() {
    setTimeout(function(){chrome.app.window.current().close();}, 3000);
    chrome.app.window.create('pan_scene1.html',
        {
            type:       "panel",
            bounds: { width: 1280, height: 720},
            minWidth:800, minHeight: 450,
            focused: true
        });
});
// ------------------   ALL Tab links ------------------

var buttonToChap3 = $('#to-chap3');
buttonToChap3.click(function(){
  setTimeout(function(){chrome.app.window.current().close();}, 300);
  console.log("function called");
  chrome.app.window.create('pan_scene6.html',
      {
          type:       "panel",
          bounds: { width: 1280, height: 720},
          minWidth:800, minHeight: 450,
          focused: true
      });
});
