var contextList = ['selection', 'page', 'link', 'image'];
for (var eachContext in contextList) {
    var title = "Twitter Toolkit: Share your " + contextList[eachContext] + " to you twitter profile.";
    chrome.contextMenus.create({
        title: title,
        contexts: [contextList[eachContext]],
        onclick: function(object) {
            switch (object.menuItemId) {
                case 'selection':
                    chrome.windows.create({
                        url: 'https://twitter.com/intent/tweet?text=' + encodeURIComponent(object.selectionText),
                        type: 'panel'
                    });
                    break;
                case 'page':
                    break;
                case 'link':
                    break;
                case 'image':
                    break;
                default:
                    break;
            }
        },
        id: contextList[eachContext]
    }, function() {
        // CALL WHEN CONTEXT MENU CREATE SUCCESSFULLY
    });
}
