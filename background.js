var contextList = ['selection', 'page', 'link', 'image'];
for (var eachContext in contextList) {
    var title = "Twitter Toolkit: Share your " + contextList[eachContext] + " to you twitter profile.";
    chrome.contextMenus.create({
        title: title,
        contexts: [contextList[eachContext]],
        onclick: function(object) {
            alert(JSON.stringify(object));
        },
        id: contextList[eachContext]
    }, function() {
        // CALL WHEN CONTEXT MENU CREATE SUCCESSFULLY
    });
}
