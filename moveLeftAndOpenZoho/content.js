// listen for messages
chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // NEED TO open already in the system, open zoho page.

    // move popup window to top left
    document.querySelector('[class="madblock-app-container"]').style.inset = '0 0 0 0'

    // open zoho profile
    setTimeout(() => {

        try { document.querySelectorAll('[class="link-cont__link"]')[1].click() } catch (error) { 1 + 1 }

    }, 2000);

});