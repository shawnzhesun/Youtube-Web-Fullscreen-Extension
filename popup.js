chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {

  var stripThis = "https://www.youtube.com/watch?v=";
  var currentUrl = tabs[0].url;
  var smallUrl = currentUrl.substring(stripThis.length, currentUrl.length);

  var myNewUrl = "https://www.youtube.com/watch_popup?v=" + smallUrl;
  //Update the url here.
  chrome.tabs.update(null, {url: myNewUrl});
});
