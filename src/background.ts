const handleCapturedContent = (content: string) => {
    chrome.tabs.create({ url: "viewer.html" })
        .then((tab: any) => {
            chrome.scripting.executeScript({
                target: {tabId: tab.id},
                files: ["viewer.js"],
                args: [content]
            })
        })
}

chrome.runtime.onMessage.addListener((message) => {
    if(message.content) {
        handleCapturedContent(message.content)
    }
})
