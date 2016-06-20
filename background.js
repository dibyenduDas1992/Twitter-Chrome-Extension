chrome.contextMenus.create({
    title: "Twitter social toolkit",
    contexts: ["selection"],
    onclick: function() {
        alert('You just clicked me folk!');
    }
}, function() {});
