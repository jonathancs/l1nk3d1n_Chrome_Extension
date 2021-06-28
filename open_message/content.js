chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "open_message") {

        // close minimized messages popup
        try {
            document.querySelector('[class="msg-overlay-bubble-header__control artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"]').click()
        } catch (error) {1+1}

        try {
            setTimeout(() => {
                document.querySelector('[class="msg-overlay-bubble-header__control artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"]').click()
            }, 1000);
        } catch (error) {1+1}

        try {
            setTimeout(() => {
                document.querySelector('[class="msg-overlay-bubble-header__control artdeco-button artdeco-button--circle artdeco-button--muted artdeco-button--1 artdeco-button--tertiary ember-view"]').click()
            }, 2000);
        } catch (error) {1+1}

        // open message popup
        try {
            setTimeout(() => {
                document.querySelector('[class="message-anywhere-button pvs-profile-actions__action artdeco-button "]').click()
            }, 3000);
        } catch (error) {1+1}
        
        // extend chat message
        try {
            setTimeout(() => {
                document.querySelector('[class="msg-overlay-bubble-header msg-overlay-conversation-bubble--header flex-shrink-zero pl2"]').parentElement.style.height = "1000px"
            }, 5000);
        } catch (error) {1+1}


    }
})
