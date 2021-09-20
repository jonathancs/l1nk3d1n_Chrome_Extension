chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "pesquisa") {

    setTimeout(() => {

        htmlInject = document.createElement("div")
        
    }, 500);

    setTimeout(() => {

        htmlInject.classList = "htmlInject"
        
    }, 600);

    setTimeout(() => {

        document.body.appendChild(htmlInject)
        
    }, 700);

    setTimeout(() => {

        htmlInject.style = "height: 700px;width: 2000px;background-color: red;position: absolute;top: 20px;left: 20px;padding-left: 20px;padding-top: 20px; z-index:999999"
        
    }, 900);

    }
})