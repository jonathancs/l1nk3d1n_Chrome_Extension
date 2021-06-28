document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('[class="connect"]').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'connect')
            }
        )

    }

}, false)