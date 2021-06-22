document.querySelector('button').addEventListener('click', function () {
    chrome.runtime.sendMessage({content: 'hi'})
})