chrome.contextMenus.create({ 
    id: 'renderDoggo',
    title: 'Show Me A Doggo!',
    contexts: ['all']
});

chrome.contextMenus.onClicked.addListener(() => {
    chrome.tabs.query({active: true, currentWindow: true}, tabs => {
        chrome.tabs.sendMessage(tabs[0].id, {type: 'renderDoggo'});
    });
});