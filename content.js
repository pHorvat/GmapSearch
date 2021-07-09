  searchGoogleMaps = function(word){
    var query = word.selectionText;
    chrome.tabs.create({url: "https://www.google.com/maps/search/?api=1&query=" + query});
  };
  
  chrome.contextMenus.create({
    title: "Search in Google Maps",
    contexts:["selection"],
    onclick: searchGoogleMaps
  });

