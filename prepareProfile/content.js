chrome.runtime.onMessage.addListener(function (request) {

	console.log(request)

	if (request == "prepareProfile") {
		let hasExpSubPage = ''
		let expSubPageURL = ''
		let wholeHTML = document.getElementById('main').outerHTML
		let profileEnglishLevel = ''


		function scroll() {

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
					mainPageSelector = document.getElementById('main')
					mainPageSelector.nextElementSibling.remove()
				} catch (error) { 1 + 1 }



				// remove useless sections
				try { sectionsList = document.querySelectorAll('section.artdeco-card.ember-view.break-words') } catch (error) { 1 + 1 }

				//in highlight
				regexDestaques = /<!---->destaques<!---->/gmi

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

				//trabalho voluntario
				regexVoluntario = /<!---->Trabalho voluntário<!---->/gmi

				//licenças e certificados
				regexCertificados = /<!---->Licenças e Certificados<!---->/gmi

				//formação acadêmica
				regexFormacaoAcademica = /<!---->Formação Acadêmica<!---->/gmi
				
				//formação acadêmica
				regexCompetencias = /<!---->Competências<!---->/gmi

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
					if (loopedElement.outerHTML.match(regexVoluntario)) { loopedElement.remove() }
					if (loopedElement.outerHTML.match(regexCertificados)) { loopedElement.remove() }
					if (loopedElement.outerHTML.match(regexFormacaoAcademica)) { loopedElement.remove() }
					if (loopedElement.outerHTML.match(regexCompetencias)) { loopedElement.remove() }

				}
			}, 1500)


			// expand all fields
			setTimeout(() => {


				// job experiences - same company progression
				try { document.querySelector('[class="inline-show-more-text__button inline-show-more-text__button--light link"]').click() } catch (error) { 1 + 1 }

				// job experiences - SEE MORE job descriptions

				document.querySelectorAll('.inline-show-more-text__button').forEach(element => element.click())

			}, 2000);


		}

		function checkWhitePrompt() {
			companyRegex = /<span.class="visually-hidden"><!---->([\s\S]*?)</gm;
			
			result = getMatches(wholeHTML, companyRegex)

			function colorize() {

				setInterval(() => {
					
					arrayOfColors = ['yellow', 'red', 'green', 'pink']
					
					randomColor = arrayOfColors[Math.floor(Math.random() * arrayOfColors.length)]
			
					document.querySelector('div[class="body"]').style.background = randomColor
			
					
				}, 1200);
			}
		
			for (let r of result) {if (r.match(/White Prompt/igm)) {colorize()}}
		}

		function checkIfAdvancedEnglish() {

			// Para "níveis" de inglês:
			regex1 = /<!---->(?:inglês|english|ingles|inglés).*<!---->[\s\S]{1,300}Nível (.*?)</im

			// Para inglês fluente ou nativo:
			regex2 = /<!---->(?:inglês|english|ingles|inglés).*<!---->[\s\S]{1,300}(Fluente.ou.nativo)/im

			firstRegexTest = wholeHTML.match(regex1)
			secondRegexTest = wholeHTML.match(regex2)
			englishCounter = 0

			try { if (firstRegexTest[1].match(/avançado/im)) { englishCounter++ } } catch (error) { }
			try { if (secondRegexTest[1].match(/fluente/im)) { englishCounter++ } } catch (error) { }

			if (englishCounter > 0) { profileEnglishLevel = 'avançado' } else { profileEnglishLevel = 'intermediario' }
			return profileEnglishLevel

		}

		function checkIfMoreThan5EXPs() {

			verifyMoreEXPs_Regex = /<span class="pvs-navigation__text">[\s]{1,10}Exibir todas as \d* experiências[\s]{1,10}<\/span>/gmi

			hasExpSubPage = getMatches(wholeHTML, verifyMoreEXPs_Regex)

			if (hasExpSubPage) { return true } else { return false }

		}

		function getExpSubPageURL(URL_forEXPSubPage) {

			getExperienceSubPageURL_Regex = /https:\/\/www\.linkedin\.com\/in\/[^\/]*[a-z][^\/]*\/details\/experience/gmi
			URL_forEXPSubPage = getMatches(wholeHTML, getExperienceSubPageURL_Regex)

			return URL_forEXPSubPage

		}

		function getProfileName() {

			let nameRegex = /Compartilhar.perfil.de.([\s\S]*?).por.mensagem/gmi;
			let nameResult = getMatches(wholeHTML, nameRegex);
			return nameResult;

		}

		function getLocation() {

			let locationRegex = /<span class="text-body-small inline t-black--light break-words">[\s\S]{1,7}([a-z].*)/gmi
			let locationResult = getMatches(wholeHTML, locationRegex);
			return locationResult;

		}

		function getTitle() {
			profileTitleRegex = /<div class="text-body-medium break-words">[\s]{1,10}([^\<]*)<\/div>/gmi
			profileTitle_text = getMatches(wholeHTML, profileTitleRegex)
			return profileTitle_text
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

		function accessEXP_SUBpage() {

			setTimeout(() => {

				document.querySelector('div[class="pvs-list__footer-wrapper"]').children[0].children[0].children[0].click() 
			
			}, 4000);

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

		// end.

		// standard functions
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

		// function to wait
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


		///////
		// all functions to be executed
		///////

		scroll()
		/**/ waitThreeSeconds()

		englishLevel = checkIfAdvancedEnglish()
		/**/ waitHalfSecond();
		try {document.querySelector('div[id="languages"]').parentElement.remove()} catch (error) {1+1}

		moreThanFiveEXPS = checkIfMoreThan5EXPs() // if morethanfive is =! 
		/**/ waitHalfSecond();
		
		subPageURL = getExpSubPageURL(expSubPageURL)
		/**/ waitHalfSecond();
		
		nameData = getProfileName()
		locationData = getLocation()
		titleData = getTitle()
		/**/ waitHalfSecond();
		
		injectHTML()
		
		prepareInformation_on_TextArea()
		
		
		
		setTimeout(() => {
			
			if (checkIfMoreThan5EXPs) {accessEXP_SUBpage()} 

		}, 3200);
		
		
		setTimeout(() => {
			checkWhitePrompt()
		}, 3000);
		
		/////////end

	}

})