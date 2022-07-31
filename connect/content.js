messageText = `Hi , how you doing?

i'm looking for Python developers with advanced english. 

We're paying between 4k and 7k USD (dollar).

let me know if i can send you further details. thanks!!
`

messageHeader = `❗4k to 7k usd

`

chrome.runtime.onMessage.addListener(function (request) {
    console.log(request)

    // scroll button functions
    if (request == "connect") {

        croppedText = messageText.substring(3)

        // get name
        candidateFullName = document.querySelector('h1[class="text-heading-xlarge inline t-24 v-align-middle break-words grownfacekolyaax-pv-captured"]').innerText
        candidateFirstName = candidateFullName.split(' ')[0]
        
        // validate if not EMOJI
        if (candidateFirstName.length < 3) {candidateFirstName = candidateFullName.split(' ')[1]}

        // message + candidate name
        readyMessage = messageHeader + 'Hi ' + candidateFirstName + croppedText

        connectButton = document.querySelector('button[class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view pvs-profile-actions__action"]')
        addNotePopup = document.querySelector('button[class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view mr1"]')

        // click CONNECT
        if (connectButton) {
            setTimeout(() => {
                document.querySelector('button[class="artdeco-button artdeco-button--2 artdeco-button--primary ember-view pvs-profile-actions__action"]').click()
            }, 50);
        }

        // click ADD NOTE
            setTimeout(() => {
                document.querySelector('button[class="artdeco-button artdeco-button--muted artdeco-button--2 artdeco-button--secondary ember-view mr1"]').click()
            }, 2000);

        // add message
        setTimeout(() => {
            document.querySelector('textarea[class="ember-text-area ember-view connect-button-send-invite__custom-message mb3"]').value = readyMessage
        }, 3000);
        
        


    }
})
