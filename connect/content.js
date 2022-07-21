chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "connect") {

        setTimeout(() => {
            
            try {
    
                document.querySelector('[class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view pvs-profile-actions__action"]').click()
                
            } catch (error) {1+1}

        }, 1000);


    }
})
