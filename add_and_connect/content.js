// listen for messages
chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)
    
    if (request == 'add') {

        // click add to zoho button
        document.querySelector('div.display-flex.justify-space-between.pt2 > div > div:nth-child(1) > lnsection > span > nav > ul > li > a').click()

        // move popup window to top left
        setTimeout(() => {
            document.querySelector('[class="madblock-app-container"]').style.inset = "0 0 0 0"
        }, 15000);

        // check if contains email && TERMINATE if negative
        setTimeout(() => {
            try {if (document.querySelector('[class="input_field 0 applied_suggestion_off"]').value == "" ) {document.querySelector("div.scaffold-layout.scaffold-layout--breakpoint-none.scaffold-layout--main-aside.scaffold-layout--static").remove()}} catch (error) {1+1}
            
        }, 17000);

    }
});