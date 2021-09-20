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

            try { document.querySelector('[class="pv-content__right-rail"]').remove() } catch (error) { 1 + 1 }
            try { document.querySelector('[class="pv-profile-section pv-recent-activity-section-v2 artdeco-card p5 mt4 ember-view"]').remove() } catch (error) { 1 + 1 }
            try { document.querySelector('[class="pv-profile-section pv-recommendations-section artdeco-container-card artdeco-card ember-view"]').remove() } catch (error) { 1 + 1 }
            try { document.querySelector('[class="pv-profile-section pv-interests-section artdeco-card mt4 p5 ember-view"]').remove() } catch (error) { 1 + 1 }
            try { document.querySelector('[class="artdeco-container-card pv-profile-section pab-featured-section pab-featured-section--multi-item pab-featured-section--with-pagination  artdeco-card ember-view"]').remove()} catch (error) { 1 + 1 }
            
            // destaques
            try { document.querySelector('[class="pv-deferred-area__content"]').remove() } catch (error) { 1 + 1 }
            try { document.querySelector('[class="artdeco-container-card pv-profile-section pab-featured-section pab-featured-section--multi-item pab-featured-section--with-pagination  artdeco-card ember-view"]') } catch (error) {1+1}
            
            // em destaque (activities' highlight)
            try { document.querySelector('[class="artdeco-container-card pv-profile-section pab-featured-section pab-featured-section--multi-item  artdeco-card ember-view"]').remove() } catch (error) { 1 + 1 }

        }, 5000);


        // expand all fields
        setTimeout(() => {

            
            // job experiences - VISUALIZE MORE EXPERIENCES
            try {document.querySelector('[class="pv-experience-section__see-more pv-profile-section__actions-inline ember-view"]').children[0].click()} catch (error) {1+1}
            
            // job experiences - same company progression
            try {document.querySelector('[class="inline-show-more-text__button inline-show-more-text__button--light link"]').click()} catch (error) {1+1}
            
            // job experiences - SEE MORE job descriptions
            try {document.querySelectorAll('.inline-show-more-text__button').forEach(element => element.click())} catch (error) {1+1}
            
            // languages - expand
            try {document.querySelector("#languages-title").nextElementSibling.click()} catch (error) {1+1}

            // skills and competences
            try {document.querySelector('[class="pv-profile-section__card-action-bar pv-skills-section__additional-skills artdeco-container-card-action-bar artdeco-button artdeco-button--tertiary artdeco-button--3 artdeco-button--fluid artdeco-button--muted"]').click()} catch (error) {1+1}
            
        }, 6000);

        
        // focus screen on LANGUAGES
        setTimeout(() => {

            try {function rollToEnglishBlock(obj) {var curtop = 0;if (obj.offsetParent) {do {curtop += obj.offsetTop;} while (obj = obj.offsetParent);return [curtop];}}; window.scroll(0, rollToEnglishBlock(document.querySelector("#languages-title")));} catch (error) {1+1}
        }, 7000);
        


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
