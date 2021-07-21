chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    messageToBeSent = `\n\nopa , como vai?\n\nJonathan da White Prompt aqui, uma empresa de desenvolvimento de software norte-americana.\n\nEstamos buscando devs Java com inglês avançado. Pagamos em USD (dólar) no contrato PJ de 8hs diárias. Entre 3k e 5k USD.\n\nMe avise se te interessar, daí te mando mais detalhes.`

    // scroll button functions
    if (request == "connect") {

        // get first name
        try {

            let profileName = document.querySelector("div.ph5.pb5 > div.display-flex.justify-space-between.pt2 > div > div:nth-child(1) > h1").innerText

            firstName = profileName.substr(0, profileName.indexOf(' '));

        } catch (error) { document.querySelector('[class="application-outlet "]').style.backgroundColor = "red" }


        // click on connect request
        try {

            setTimeout(() => {

                document.querySelector('[class="pvs-profile-actions__action artdeco-button artdeco-button--2 artdeco-button--primary ember-view"]').click()

            }, 2000);

        } catch (error) { document.querySelector('[class="application-outlet "]').style.backgroundColor = "yellow" }


        // add note on connection invite
        try {

            setTimeout(() => {
                document.querySelector('[class="mr1 artdeco-button artdeco-button--muted artdeco-button--3 artdeco-button--secondary ember-view"]').click()
            }, 4000);

        } catch (error) { document.querySelector('[class="application-outlet "]').style.backgroundColor = "blue" }


        // insert message
        try {

            setTimeout(() => {
                document.querySelector('[class="ember-text-area ember-view connect-button-send-invite__custom-message mb3"]').value = `Olá ${firstName}, como vai?` + ' ' + messageToBeSent
            }, 6000);

        } catch (error) { document.querySelector('[class="application-outlet "]').style.backgroundColor = "pink" }

        // insert message
        try {

            setTimeout(() => {
                document.querySelector('[class="ember-text-area ember-view connect-button-send-invite__custom-message mb3"]').click()
            }, 8000);

        } catch (error) { document.querySelector('[class="application-outlet "]').style.backgroundColor = "pink" }




        // click send
        // try {

        //     setTimeout(() => {
        //         document.querySelector('[class="ml1 artdeco-button artdeco-button--3 artdeco-button--primary ember-view"]').click()
        //     }, 8000);

        // } catch (error) {document.querySelector('[class="application-outlet "]').style.backgroundColor = "black"}


    }
})
