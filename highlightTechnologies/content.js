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
        
        // frontend
        doSearch('js', 'pink')
        doSearch('javascript', 'pink')
        doSearch('react', 'pink')
        doSearch('vue', 'pink')
        doSearch('angular', 'pink')
        doSearch('web components', 'pink')
        doSearch('vuex', 'pink')
        doSearch('tomatoux', 'pink')
        doSearch('graphql', 'pink')
        doSearch('jquery', 'pink')

        //backend
        doSearch('node', 'dodgerblue')
        doSearch('express', 'dodgerblue')
        
        //devops and slc
        doSearch('devops', 'dodgerblue')
        doSearch('docker', 'dodgerblue')
        doSearch('CI/CD', 'dodgerblue')
        doSearch('CI/CL', 'dodgerblue')
        doSearch('jenkins', 'dodgerblue')
        doSearch('kuberne', 'dodgerblue')
        doSearch('SOLID', 'dodgerblue')
        doSearch('tdd', 'dodgerblue')
        doSearch('bdd', 'dodgerblue')
        doSearch('junit', 'dodgerblue')
        doSearch('adonis', 'dodgerblue')
        
        // test
        doSearch('cypress', 'tomato')
        doSearch('mockito', 'tomato')
        doSearch('cucumber', 'tomato')
        doSearch('selenium', 'tomato')
        
        // low codes
        doSearch('.net', 'orange')
        doSearch('C#', 'orange')
        doSearch('java', 'mediumseagreen')
        doSearch('appium', 'mediumseagreen')
        doSearch('php', 'mediumseagreen')
        doSearch('wordpress', 'mediumseagreen')


    }
})



