chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "scroll") {


        // scroll page
        var totalHeight = 0; var distance = 100; var timer = setInterval(() => {
            var scrollHeight = document.body.scrollHeight; window.scrollBy(0, distance)
            totalHeight += distance
            if (totalHeight >= scrollHeight) {
                clearInterval(timer)
                resolve()
            }
        }, 50)


        // remove unnecessary parts of the profile
        setTimeout(() => {

            // remove side scaffold of ads and similar profiles
            try {
                let mainPageSelector = document.getElementById('main')
                mainPageSelector.nextElementSibling.remove()
            } catch (error) { 1 + 1 }



            // remove useless sections
            try { sectionsList = document.querySelectorAll('section.artdeco-card.ember-view.break-words') } catch (error) { 1 + 1 }

            //in highlight
            regexDestaques = /<!---->Em destaque<!---->/gmi

            //activities
            regexAtividades = /<!---->Atividades<!---->/gmi

            //recomendations
            regexRecommendations = /<!---->Recomendações<!---->/gmi

            //causes she supports
            regexCauses = /<!---->Causas<!---->/gmi

            //interests
            regexInterests = /<!---->Interesses<!---->/gmi

            //cursos
            regexCursos = /<!---->cursos<!---->/gmi

            //projetos
            regexProjetos = /<!---->projetos<!---->/gmi

            //reconhecimentos e prêmios
            regexReconhecimentos = /<!---->reconhecimentos e prêmios<!---->/gmi
            
            //publicações
            regexPublicações = /<!---->Publicações<!---->/gmi

            // remove bottom messages popups
            let messagesRibbon = document.getElementById('msg-overlay')
            messagesRibbon.remove()

            for (let i = 0; i < sectionsList.length; i++) {
                const loopedElement = sectionsList[i];

                if (loopedElement.outerHTML.match(regexAtividades)) { loopedElement.remove() }
                if (loopedElement.outerHTML.match(regexDestaques)) { loopedElement.remove() }
                if (loopedElement.outerHTML.match(regexRecommendations)) { loopedElement.remove() }
                if (loopedElement.outerHTML.match(regexCauses)) { loopedElement.remove() }
                if (loopedElement.outerHTML.match(regexInterests)) { loopedElement.remove() }
                if (loopedElement.outerHTML.match(regexCursos)) { loopedElement.remove() }
                if (loopedElement.outerHTML.match(regexProjetos)) { loopedElement.remove() }
                if (loopedElement.outerHTML.match(regexReconhecimentos)) { loopedElement.remove() }
                if (loopedElement.outerHTML.match(regexPublicações)) { loopedElement.remove() }

            }
        }, 3000)


        // expand all fields
        setTimeout(() => {


            // job experiences - same company progression
            try { document.querySelector('[class="inline-show-more-text__button inline-show-more-text__button--light link"]').click() } catch (error) { 1 + 1 }

            // job experiences - SEE MORE job descriptions

            document.querySelectorAll('.inline-show-more-text__button').forEach(element => element.click())

        }, 3300);


    }

})


/*
====HISTORY LOG====
this worked:
setInterval() -->  asynchronous function 🤔

doesnt work:
function hoisting
async function ( await _____() )

the IF controler works, i'll proceed with it.

====TO DO ====

2nd button
[HAVE 2 FIELDS IN THE EXTENSION HTML: Xposition number, Xtag]
click Add Zoho,
fill Xposition
fill Xtag
click save
close

3rd button
[
have a 3RD field for message
THIS FIELD WILL ALSO WORK FOR MESSAGING IF ALREADY A CONNECTION
]
connect

4th button
send message
*/


