// listen for messages
chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // NEED TO open already in the system, open zoho page.
    
    if (request == 'add') {

        // click add to zoho button
        document.querySelector('div.display-flex.justify-space-between.pt2 > div > div:nth-child(1) > lnsection > span > nav > ul > li > a').click()

    }
});