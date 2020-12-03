cy.log('Sign In');
        signInPage.authorization(testData.Account1[0], testData.Account1[1]);
        projectPage.urlProjectPage();
        projectPage.gravatarIsPresent();
        cy.log('Select project');
        projectPage.selectProject(testData.Account1[2]);
        // cy.log('Check Analysis page is opened');
        // cy.log('Navigation tab Corrent Iteration / Code Quality / Activity');
        // cy.log('Check Developers page is opened');
        // cy.log('Check Commits page is opened');
        // commonPages.clickDashboardCommitsMenu();
        // commonPages.selectOverAllDate();
        // // commitsPage.checkMetricsInCommitsList();
        // commitsPage.checkMetricsInCommitsList1();
        // cy.log('Check Violations page is opened');
        // cy.log('Check Overview page is opened');

// it.only('Test Dashboard matrics / navigation dash', () => {
    //     signInPage.authorization(testData.Account1[0], testData.Account1[1]);
    //     projectPage.urlProjectPage();
    //     projectPage.gravatarIsPresent();
    //     cy.log('Select project');
    //     projectPage.selectProject(testData.Account1[2]);
    //     cy.log('Check Analysis page is opened');
    //     cy.log('Navigation tab Corrent Iteration / Code Quality / Activity');
    //     cy.log('Check Developers page is opened');
    //     cy.log('Check Commits page is opened');
    //     commonPages.clickDashboardCommitsMenu();
    //     commonPages.selectOverAllDate();
    //     commitsPage.checkMetricsInCommitsList();
    //     commitsPage.checkMetricsInCommitsList1();
    //     cy.log('Check Violations page is opened');
    //     cy.log('Check Overview page is opened');
    // })
        

        // if(body) {
            
        // } else if (cy.get(exitPopUp_selector, {timeout: 3000}).should('be.visible')) {
        //     cy.get(closeExitPopUp_selector).click();
        // }

        // .then(() => {
        //     cy.get('body').then((body) => {
        //         if(body.find(exitPopUp_selector)){
        //         cy.get(exitPopUp_selector).click();
        //     }})
        // })


	const privateKey = // OK
	`-----BEGIN PRIVATE KEY-----
	MIGfMA0GCSqGSIb2DQEBAQUAA4GNADCBiQKBgQC/tzdtXKXcX6F3v3hR6+uYyZpI
	eXhhLflJkY2eILLQfAnwKlT5xIHW5QZcHQV9sCyZ8qSdPGif7PwgMbButMbByiZh
	CSugUFb6vjVqoktmslYF4LKHiDgvmlwuJW0TvynxBLzDCwrRP+gpRT8wuAortWAx
	/03POTw7Mzi2cIPNsQIDAQAB
	-----END PUBLIC KEY-----`


        const close_exitPopUp_selector = '.exit-close-control';
const exitPopUp_selector = 'div[class="modal-content modal-exit-content"]';

        // openModalWindowAndClose() {
    //     cy.get('body').trigger('mouseout', { 'force': true, 'eventListener': true });
    //     cy.get(exitPopUp_selector).should('be.visible');
    //     cy.get(close_exitPopUp_selector).should('be.visible').click();
    // }