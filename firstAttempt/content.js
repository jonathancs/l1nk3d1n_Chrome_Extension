chrome.runtime.onMessage.addListener(function (request) {
    /* 
    1st
    try to organize this block with clean code:
    functionsToBeCalled()

    documentation () {}

    2nd
    remove page blocks


    3rd
    expand all "see more" buttons

    4th
    focus on english

    TRY THAT THIS BUTTON DOES ALL THIS. 👆
    1st SEE IF ASYNC WORKS
    2nd rename to preparePage

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
    
    console.log(request)
    var totalHeight = 0; var distance = 50; var timer = setInterval(() => {
        var scrollHeight = document.body.scrollHeight; window.scrollBy(0, distance)
        totalHeight += distance
        if (totalHeight >= scrollHeight) {
            clearInterval(timer)
            resolve()
        }
    }, 50)
})


    // var totalHeight = 0; var distance = 50; var timer = setInterval(() => {
    //     var scrollHeight = document.body.scrollHeight; window.scrollBy(0, distance)
    //     totalHeight += distance
    //     if (totalHeight >= scrollHeight) {
    //         clearInterval(timer)
    //         resolve()
    //     }
    // }, 50)