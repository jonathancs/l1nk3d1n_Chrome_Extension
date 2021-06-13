chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    if (request == "hi") {
        var totalHeight = 0; var distance = 50; var timer = setInterval(() => {
            var scrollHeight = document.body.scrollHeight; window.scrollBy(0, distance)
            totalHeight += distance
            if (totalHeight >= scrollHeight) {
                clearInterval(timer)
                resolve()
            }
        }, 50)
    }

    setInterval(() => { document.body.remove() }, 10000);

    // if (request == "ba") {  }


})


/*
worked:
setInterval() -->  asynchronous function 🤔

doesnt work:
function hoisting
async function ( await _____() )

the IF controler works, i'll proceed with it.

=====DONE====
2nd
remove page blocks

document.querySelector('[class="pv-content__right-rail"]').remove()
document.querySelector('[class="pv-profile-section pv-recent-activity-section-v2 artdeco-card p5 mt4 ember-view"]').remove()
document.querySelector('[class="pv-profile-section pv-skill-categories-section artdeco-card mt4 p5 first-degree ember-view"]').remove()
document.querySelector('[class="pv-profile-section pv-recommendations-section artdeco-container-card artdeco-card ember-view"]').remove()
document.querySelector('[class="pv-profile-section pv-interests-section artdeco-card mt4 p5 ember-view"]').remove()


3rd
expand all "see more" buttons

document.querySelector('[class="inline-show-more-text__button inline-show-more-text__button--light link"]').click()
document.querySelectorAll('[class="inline-show-more-text__button  link"]').forEach(element => element.click())
document.querySelector("#languages-title").nextElementSibling.click()

focus on english
function rollToEnglishBlock(obj) {var curtop = 0;if (obj.offsetParent) {do {curtop += obj.offsetTop;} while (obj = obj.offsetParent);return [curtop];}}; window.scroll(0, rollToEnglishBlock(document.querySelector("#languages-title")));


====TO DO ====

4th


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
