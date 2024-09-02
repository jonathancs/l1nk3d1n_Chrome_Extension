chrome.runtime.onMessage.addListener(function (request) {

    // o que custa menos processamento/memoria?
    // muda entre aplicar regex sobre uma string ENORME e uma section menor?
    
    // se usar sections, é mais regex pra quebrar e consertar.
    // talvez usar somente em casos que nao se consiga isolar
    // a captura do dado que se quer.

	console.log(request)

	if (request == "prepareProfileForSaving") {
		let wholeHTML = document.querySelector('[class="scaffold-layout__main"]').outerHTML

        experienceSectionHtml = getSection(wholeHTML, "experiência"); // TA RUIM AQUIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII
        languagesSectionHtml = getSection(wholeHTML, "idiomas");
        
        ///////////////////////
        // called functions //
        ///////////////////////
    
        scroll()
        /**/ waitThreeSeconds()
        /**/ waitHalfSecond();
        
        nameData = getProfileName()
        titleData = getTitle()
        locationData = getLocation()
        englishLevel = checkIfAdvancedEnglish()
        subPageURL = getExpSubPageURL()
        console.log(nameData)
        console.log(titleData)
        console.log(locationData)
        console.log(englishLevel)
        console.log(subPageURL)
        
        injectHTML()
        
        prepareInformation_on_TextArea()
        
        setTimeout(() => {
            
            if (checkIfMoreThan5EXPs()) {accessEXP_SUBpage()} 
    
        }, 3200);
        
        
        /////////////////////
        // functions block //
        /////////////////////
    
    
        function scroll() {

            // remove injected-html remain from previous page
            try {document.querySelector('textarea.htmlInject').remove()} catch (error) {1+1}
    
            // scroll page
            var totalHeight = 0; var distance = 100; var timer = setInterval(() => {
                var scrollHeight = document.body.scrollHeight; window.scrollBy(0, distance)
                totalHeight += distance
                if (totalHeight >= scrollHeight) {
                    clearInterval(timer)
                }
            }, 50)
    
    
            // remove unnecessary parts of the profile
            setTimeout(() => {
    
                // remove side scaffold of ads and similar profiles
                try { document.querySelector('aside.scaffold-layout__aside').remove() } catch (error) { 1 + 1 }
    
                // remove bottom messages popups
                let messagesRibbon = document.getElementById('msg-overlay')
                try {messagesRibbon.remove()} catch (error) {1+1}
    
                // remove useless sections
                try { sectionsList = document.querySelectorAll('section.artdeco-card')  } catch (error) { 1 + 1 }
    
                regexDestaques = /<!---->Highlights<!---->/gmi
                regexAtividades = /<!---->activity<!---->/gmi
                regexFormacaoAcademica = /<!---->education<!---->/gmi
                regexCertificados = /<!---->Licenses &amp; certifications<!---->/gmi
                regexCompetencias = /<!---->skills<!---->/gmi
                regexRecommendations = /<!---->recommendations<!---->/gmi
                regexInterests = /<!---->Interests<!---->/gmi
                regexCauses = /<!---->causes<!---->/gmi
                regexCursos = /<!---->courses<!---->/gmi
                regexProjetos = /<!---->projects<!---->/gmi
                regexReconhecimentos = /<!---->honors &amp; awards<!---->/gmi
                regexPublicações = /<!---->publications<!---->/gmi
                // regexVoluntario = /<!---->Trabalho voluntário<!---->/gmi
    
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
                    // if (loopedElement.outerHTML.match(regexVoluntario)) { loopedElement.remove() }
                    if (loopedElement.outerHTML.match(regexCertificados)) { loopedElement.remove() }
                    if (loopedElement.outerHTML.match(regexFormacaoAcademica)) { loopedElement.remove() }
                    if (loopedElement.outerHTML.match(regexCompetencias)) { loopedElement.remove() }
    
                }
    
                // provisorio
                // voltar mais tarde. procurar os cases acima.
                // try {document.querySelector('div[id="interests"]').parentElement.remove()} catch (error) {1+1}
    
            }, 1500)
    
    
            // expand all fields
            setTimeout(() => {
    
                let experienceSectionElement = document.querySelectorAll('section.artdeco-card.pv-profile-card.break-words.mt2')[4]
                let experienceSectionHTML = experienceSectionElement.outerHTML
    
                // confirm if experienceSection was correctly matched.
                let experienceSectionRegex = /<span aria-hidden="true"><!---->(Experience)<!---->/im
                let confirmedExperienceSection = experienceSectionHTML.match(experienceSectionRegex)
    
                if (confirmedExperienceSection) {
                    
                    // job experiences - multiple experiences in same company
                    try { experienceSectionElement.querySelector('[class="inline-show-more-text__button inline-show-more-text__button--light link"]').click() } catch (error) { 1 + 1 }
    
                    // job experiences - SEE MORE job descriptions
                    try { experienceSectionElement.querySelectorAll('.inline-show-more-text__button').forEach(element => element.click()) } catch (error) { 1 + 1 }
                }
    
            }, 2000);
    
    
        }
    
        function checkIfAdvancedEnglish() {

            let firstRegexTest = ''
            let nativeOrBilingualResult = ''
            let professionalProficiencyResult = ''
            let fullProfessionalProficiencyResult = ''
			let foundResult = ''
    
            // Para "níveis" de inglês:
            let regex1 = /<!---->(?:inglês|english|ingles|inglés).*<!---->[\s\S]{1,300}Nível (.*?)</im
    
            // Para inglês fluente ou nativo:
            let regexNativeOrBilingual = /<!---->(?:inglês|english|ingles|inglés)<!---->[\s\S]*?="true"><!---->(Native or bilingual proficiency)<!---->/im
            let regexFullProfessionalProficiency = /<!---->(?:inglês|english|ingles|inglés)<!---->[\s\S]*?="true"><!---->(Full Professional proficiency)<!---->/im
            let regexProfessionalProficiency = /<!---->(?:inglês|english|ingles|inglés)<!---->[\s\S]*?="true"><!---->(Professional working proficiency)<!---->/im

            try {
                firstRegexTest = wholeHTML.match(regex1)
                nativeOrBilingualResult = wholeHTML.match(regexNativeOrBilingual)
                professionalProficiencyResult = wholeHTML.match(regexProfessionalProficiency)
                fullProfessionalProficiencyResult = wholeHTML.match(regexFullProfessionalProficiency)
            } catch (error) {
                firstRegexTest = ''
                nativeOrBilingualResult = ''
            }

			if (firstRegexTest) { try {foundResult = firstRegexTest[1]} catch (error) { 1+1 }}
			if (nativeOrBilingualResult) { try {foundResult = nativeOrBilingualResult[1]} catch (error) { 1+1 }}
			if (professionalProficiencyResult) { try {foundResult = professionalProficiencyResult[1]} catch (error) { 1+1 }}
			if (fullProfessionalProficiencyResult) { try {foundResult = fullProfessionalProficiencyResult[1]} catch (error) { 1+1 }}
			if (foundResult == '') {foundResult = 'no english'}
            
            return foundResult
        }
    
        function checkIfMoreThan5EXPs() {
    
            let hasExpSubPage
            verifyMoreEXPs_Regex = /<span class="pvs-navigation__text">[\s]*show.all.\d*.experiences[\s]*<\/span>/gmi
    
            try {
              hasExpSubPage = getMatches(wholeHTML, verifyMoreEXPs_Regex);
            } catch (error) {
              hasExpSubPage = "";
            }
    
            if (hasExpSubPage[0]) {
              return true;
            } else {
              return false;
            }
    
        }
    
        function getExpSubPageURL() {
    
            getExperienceSubPageURL_Regex = /https:\/\/www\.linkedin\.com\/in\/[^\/]*[a-z][^\/]*\/details\/experience/gmi
            let result
            try { result = getMatches(wholeHTML, getExperienceSubPageURL_Regex) } catch (error) { result = '' }
            return result[0]
    
        }
    
        function getProfileName() {
    
            let nameRegex = /"Send ([\s\S]*?)’s? profile via message/gmi;
            let nameResult
            try { nameResult = getMatches(wholeHTML, nameRegex) } catch (error) { nameResult='' }
            return nameResult[0];
    
        }
    
        function getLocation() {
    
            let locationRegex = /<span class="text-body-small inline t-black--light break-words">[\s\S]{1,7}([\s\S]*?)<\//gmi
            let locationResult
            let locationResultTrimmed
            try { locationResult = getMatches(wholeHTML, locationRegex) } catch (error) { locationResult='' }
            try { locationResultTrimmed = locationResult[0].trim() } catch (error) { 1+1 }
            return locationResultTrimmed;
    
        }
    
        function getTitle() {
            profileTitleRegex = /<div class="text-body-medium break-words[\s\S]*?>([^\<]*)</gmi
            let profileTitle_textRaw
            let profileTitle_textTrimmed
            try { profileTitle_textRaw = getMatches(wholeHTML, profileTitleRegex) } catch (error) { profileTitle_textRaw='' }
            try { profileTitle_textTrimmed = profileTitle_textRaw[0].trim() } catch (error) {}
            return profileTitle_textTrimmed
        }
    
        function injectHTML() {
    
            setTimeout(() => {
    
                htmlInject = document.createElement("textarea")
                htmlInject.classList = "htmlInject"
                document.body.appendChild(htmlInject)
                htmlInject.style = `
                        height: 300px;
                        width: 650px;
                        background-color: red;
                        position: static;
                        top: 20px;
                        left: 20px;
                        padding-left: 20px;
                        padding-top: 20px;
                        `
    
            }, 3100);
    
        }
    
        function prepareInformation_on_TextArea() {
    
            setTimeout(() => {
                
                document.getElementsByClassName('htmlInject')[0].value = `
                name = ${nameData}<>\n
                title = ${titleData}<>\n
                location = ${locationData}<>\n
                englishLevel = ${englishLevel}<>\n
                `
    
            }, 3500);
    
        }
    
        function accessEXP_SUBpage() {
    
            setTimeout(() => {
    
                document.querySelector('div[class="pvs-list__footer-wrapper"]').children[0].children[0].children[0].click() 
            
            }, 4000);
    
        }

        function getSection(html, section) {
            let regex = null;
            switch (
            section // adicionar novos cases para diferentes seções
            ) {
                case "experiência":
                    regex =
                    /span aria-hidden="true"?><!---->Experience([\s\S]*?)<\/section/gm; // seção "Experiência" no html da página
                    break;
                case "idiomas":
                    regex =
                    /span aria-hidden="true"?><!---->Languages([\s\S]*?)<\/section/gm;
                    break;
                default:
                    regex = null;
            }
            return regex ? getMatches(html, regex)[0] : null;
        }
    
        // function to handle regex
        function getMatches(string, expression) {
            let matches;
            if (string === undefined) {
                return [];
            } else {
                matches = [...string.matchAll(expression)];
            }
    
            let result = [];
            for (let match of matches) {
                result.push(match[1]);
            }
            if (result[0] === undefined) {
                result = [];
                for (let match of matches) {
                    result.push(match[0]);
                }
            }
            // implementar verificação de erros
            return result;
        }
    
        function waitHalfSecond() {
            setTimeout(() => {
                1 + 1
            }, 500);
        }
    
        function waitThreeSeconds() {
            setTimeout(() => {
                1 + 1
            }, 3000);
        }
    
        //////// END
		
	}

})