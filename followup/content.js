chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "followUp") {

        // get name
        let candidateFullName = document.getElementById("thread-detail-jump-target").innerText
        
        let candidateFirstName = candidateFullName.split(' ')[0];
        
        setTimeout(() => {
            console.log(candidateFirstName)
        }, 500);
        
        // write message
        let textOnMessageBox = document.querySelector('div[class="flex-grow-1"]').children[0].children[0]

        setTimeout(() => {

            textOnMessageBox.innerText = `Ooi ${candidateFirstName}, fica pra uma próxima?`
            
        }, 700);

        // click on LOAD MORE MESSAGES IF PRESENT
        setTimeout(() => {

            try {
                let loadMoreMessages = document.querySelector('li[class="p3"]')

                loadMoreMessages.click()

            } catch (error) {console.log(error)}
            
        }, 800);

    }
})



