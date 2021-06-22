/*

Applause - 863-Applause (BE-JS-Node) - BE
Bl3ndLabs - 916-Bl3ndLabs (MO-Hybrid-RN)
Blanket - 928-Blanket (BE-JS-NODE,FE-JS-REACT)
Divante - 856-Divante (FE-JS-Vue)
Faust - 827-Faust (FE-JS-React)
Kyros - 926-Kyros (FE-JS-REACT)
Lennd - 782-Lennd (BE-JS-Node,INF-CS-AWS)
Maven Clinic - 912-Maven Clinic (BE-Python-Flask)
Maven Clinic - 919-Maven Clinic (FE-JS-React)
Maven Clinic - 920-Maven Clinic (QA-MA)
PMG-Koddi - 922-PMG-Koddi (QA-AU-Selenium)
QWire - 914-Qwire (FE-JS-React)
QWire - 918-Qwire (BE-JS-Node,FE-JS-React)
Swimlane - 851-Swimlane (BE-Python)
The Feature - 867-The Feature (FE-JS-React)
Verifi Media - 873-Verifi Media (QA-AU-Cypress)
White Prompt - 835-White Prompt (UX-Visual)
White Prompt Inc. - 930-White Prompt (BE-JS-Node)
YieldStreet - 729-YieldStreet (BE-Java)
YieldStreet - 854-YieldStreet (FE-JS-React)
YieldStreet - 917-YieldStreet (INF)

*/

// um jeito melhor é com o match do numero.

// listen for messages
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    
    let aimedPosition = `
    PMG-Koddi - 922-PMG-Koddi (QA-AU-Selenium)
    `

    if (msg.content == 'hi') {

        document.querySelector('[class="pure-css-dropdown madblock-lm-background"]').children[0].children[0].children[0].click()

        setTimeout(() => {
            document.querySelector('[class="madblock-app-container"]').style.inset = "0 0 0 0"
        }, 10000);

        setTimeout(() => {
            document.querySelector('[class="multiform_new_control"]').click()
        }, 12000);

        setTimeout(() => {

            let allPositions = document.querySelectorAll('[style="background-color: white; font-weight: normal;"]')

            allPositions.forEach(element => {
                if (element.innerText == aimedPosition) { element.click() }

            });

        }, 13500);





    }
});