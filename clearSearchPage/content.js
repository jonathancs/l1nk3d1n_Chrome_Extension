chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "clear") {

        setTimeout(() => {
            
            try {
    
                let inTheSystemProfilesArray = document.querySelectorAll('.grownfacekolyaax-exists')

                for (let i = 0; i < inTheSystemProfilesArray.length; i++) {
                    element = inTheSystemProfilesArray[i]
                    
                    element.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.parentElement.remove() }
    
            } catch (error) {1+1}

           

        }, 1000);


        setTimeout(() => {
            
            try {
    
                let pendingConnectionProfileArray = document.querySelectorAll('[class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary artdeco-button--disabled ember-view"]')
            
                for (let i = 0; i < pendingConnectionProfileArray.length; i++) {
                    element = pendingConnectionProfileArray[i]
                    
                    element.parentElement.parentElement.parentElement.parentElement.parentElement.remove()}
            
            } catch (error) {1+1}

           

        }, 1200);


    }
})



