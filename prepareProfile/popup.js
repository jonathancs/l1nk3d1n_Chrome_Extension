document.addEventListener('DOMContentLoaded', function () {
    document.querySelector('[class="prepareProfileForSaving"]').addEventListener('click', onclick, false)
    function onclick() {
        chrome.tabs.query({ currentWindow: true, active: true },
            function (tabs) {
                chrome.tabs.sendMessage(tabs[0].id, "prepareProfileForSaving")
            }
        )

    }

}, false)