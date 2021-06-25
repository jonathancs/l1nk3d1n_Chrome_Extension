// listen for messages
chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)
    
    let aimedPosition = `PMG-Koddi - 922-PMG-Koddi(QA-AU-Selenium)`

    if (request == 'add') {

        // add to zoho
        document.querySelector('[class="pure-css-dropdown madblock-lm-background"]').children[0].children[0].children[0].click()

        // move to top left
        setTimeout(() => {
            document.querySelector('[class="madblock-app-container"]').style.inset = "0 0 0 0"
        }, 10000);

        // check if contains email && TERMINATE if negative
        setTimeout(() => {
            try {if (document.querySelector('[class="input_field 0 applied_suggestion_off"]').value == "" ) {document.body.remove()}} catch (error) {1+1}
            
        }, 12000);

    }
});