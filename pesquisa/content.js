chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "pesquisa") {

        if (document.querySelector('.htmlInject')) {1+1} else {

            setTimeout(() => {

                htmlInject = document.createElement("textarea")
                
            }, 200);
    
            setTimeout(() => {
    
                htmlInject.classList = "htmlInject"
                
            }, 400);
    
            setTimeout(() => {
    
                document.body.appendChild(htmlInject)
                
            }, 600);
    
            setTimeout(() => {
    
                htmlInject.style = "height: 300px;width: 650px;background-color: red;position: absolute;top: 20px;left: 20px;padding-left: 20px;padding-top: 20px; z-index:999999"
                
            }, 800);

        }

        

        
        setTimeout(() => {
            
            linksArray = document.querySelectorAll('[class="display-flex align-items-center"]')

            for (let i = 0; i < linksArray.length; i++) {
                const currentLink = linksArray[i]

                let textURL = currentLink.children[0].href

                cleanedTextURL = textURL.split('?')[0] + '/'

                htmlInject.append(cleanedTextURL + `\n`)
                
            }
            
            
            
        }, 1000);


        setTimeout(() => {
            
            document.querySelector('button[aria-label="Avançar"]').click()
            
        }, 1200);



    }
})