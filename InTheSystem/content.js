chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "InTheSystem") {

        setTimeout(() => {
            
            document.querySelector('span[class="grownfacekolyaax-pv-status-icon font-icon grownfacekolyaax-lm-parsable grownfacekolyaax-exists"]').click()
    
        }, 1000);

        setTimeout(() => {

            document.querySelector('[class="grownfacekolyaax-app-container"]').style.inset = '0 0 0 0'
            
        }, 15000);

        setTimeout(() => {

            document.querySelector('[class="pure-form pure-form-aligned"]').children[0].children[1].children[1].children[0].children[1].click()
            
        }, 17000);


    }
})