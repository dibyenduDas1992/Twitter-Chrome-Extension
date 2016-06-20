var contextList = ['selection', 'page', 'link', 'image'];
for (var eachContext in contextList) {
    var title = "Twitter Toolkit: Share your " + contextList[eachContext] + " to you twitter profile;
    chrome.contextMenus.create({
        title: title,
        contexts: [contextList[eachContext]],
        onclick: function(object, tab) {
            switch (object.menuItemId) {
                case 'selection':
                    chrome.windows.create({
                        url: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(object.selectionText),
                        type: 'panel'
                    });
                    break;
                case 'page':
                    chrome.windows.create({
                        url: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(tab.title) + "&url=" + encodeURIComponent(object.pageUrl),
                        type: 'panel'
                    });
                    break;
                case 'link':
                    chrome.windows.create({
                        url: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(object.linkUrl),
                        type: 'panel'
                    });
                    break;
                case 'image':
                    chrome.windows.create({
                        url: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(object.srcUrl),
                        type: 'panel'
                    });
                    break;
                default:
                    chrome.windows.create({
                        url: 'https://twitter.com/intent/tweet?url=' + encodeURIComponent(object.pageUrl),
                        type: 'panel'
                    });
                    break;
            }
        },
        id: contextList[eachContext]
    }, function() {
        // CALL WHEN CONTEXT MENU CREATE SUCCESSFULLY
    });
}
