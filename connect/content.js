chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "connect") {

        setTimeout(() => {
            
            try {
    
                document.querySelector('[class="pvs-profile-actions__action artdeco-button artdeco-button--2 artdeco-button--primary ember-view"]').click()
                
            } catch (error) {1+1}

        }, 1000);


        setTimeout(() => {
            
            try {
    
                document.querySelector('[class="mr1 artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--secondary ember-view"]').click()
                
            } catch (error) {1+1}
            
        }, 4000);


    }
})
