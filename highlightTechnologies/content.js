chrome.runtime.onMessage.addListener(function (request) {

    console.log(request)

    // scroll button functions
    if (request == "highlightTechnologies") {

        function doSearch(text, backgroundColor) {
            if (window.find && window.getSelection) {
                document.designMode = "on";
                var sel = window.getSelection();
                sel.collapse(document.body, 0);
        
                while (window.find(text)) {
                    document.execCommand("HiliteColor", false, backgroundColor);
                    sel.collapseToEnd();
                }
                document.designMode = "off";
            }
        }
        
        // // frontend
        // doSearch('js', 'pink')
        // doSearch('front', 'pink')
        // doSearch('javascript', 'pink')
        // doSearch('react', 'pink')
        // doSearch('native', 'pink')
        // doSearch('vue', 'pink')
        // doSearch('angular', 'pink')
        // doSearch('web components', 'pink')
        // doSearch('vuex', 'pink')
        // doSearch('tomatoux', 'pink')
        // doSearch('graphql', 'pink')
        // doSearch('jquery', 'pink')
        
        
        doSearch('full stack', 'orange')
        doSearch('fullstack', 'orange')


        //devops and slc
        // doSearch('devops', 'dodgerblue')
        // doSearch('junit', 'dodgerblue')
        // doSearch('adonis', 'dodgerblue')
        // doSearch('GCP', 'dodgerblue')
        // doSearch('AWS', 'dodgerblue')
        // doSearch('docker', 'dodgerblue')
        // doSearch('cloud', 'dodgerblue')
        
        // test
        doSearch('cypress', 'tomato')
        doSearch('mockito', 'tomato')
        doSearch('cucumber', 'tomato')
        doSearch('selenium', 'tomato')
        
        // backend
        doSearch('backend', 'mediumseagreen')
        doSearch('back end', 'mediumseagreen')
        doSearch('node', 'mediumseagreen')
        doSearch('express', 'mediumseagreen')
        doSearch('.net', 'mediumseagreen')
        doSearch('C#', 'mediumseagreen')
        doSearch('python', 'mediumseagreen')
        doSearch('django', 'mediumseagreen')
        doSearch('flask', 'mediumseagreen')
        doSearch('golang', 'mediumseagreen')
        doSearch(' go ', 'mediumseagreen')
        doSearch('go lang', 'mediumseagreen')
        doSearch('java', 'mediumseagreen')
        doSearch('appium', 'mediumseagreen')
        doSearch('php', 'mediumseagreen')
        doSearch('wordpress', 'mediumseagreen')
        
        
        doSearch('CI/CD', 'dodgerblue')
        doSearch('CI/CL', 'dodgerblue')
        doSearch('jenkins', 'dodgerblue')
        doSearch('kuberne', 'dodgerblue')
        doSearch('SOLID', 'dodgerblue')
        doSearch('tdd', 'dodgerblue')
        doSearch('bdd', 'dodgerblue')
    }
})