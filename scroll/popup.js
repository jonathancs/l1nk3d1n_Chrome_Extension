document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('[class="scroll"]').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'scroll')
            }
        )

    }

    document.querySelector('[class="add"]').addEventListener('click', add, false)
    function add() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, 'add')
            }
        )

    }
}, false)
