chrome.runtime.onMessage.addListener(function (request) {

    function waitOneSecond() {
        setTimeout(() => {
            1+1
        }, 1000);
    }

    console.log(request)

    sendMessageButtons_List = document.querySelectorAll('div:nth-child(1) > button.message-anywhere-button.artdeco-button.artdeco-button--secondary')

    connection_Name = document.querySelectorAll('span.mn-connection-card__name.t-16.t-black.t-bold')

    for (let i = 0; i < sendMessageButtons_List.length; i++) {
        const loopedSendMessageButton = sendMessageButtons_List[i];
        const loopedConnection_Name = connection_Name[i];
        const connectionFirstName = loopedConnection_Name.substr(0, loopedConnection_Name.indexOf(' '))

        loopedSendMessageButton.click()

        waitOneSecond()
        waitOneSecond()
        waitOneSecond()
        waitOneSecond()

        // check if the last message is mine, then

        messageWindowText = document.querySelector('div.msg-form__contenteditable.t-14.t-black--light.t-normal.flex-grow-1.full-height.notranslate > p')

        messageWindowText.innerHTML = `opa ${connectionFirstName}, fica pra uma próxima?`


    }



})
