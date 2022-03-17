/// <reference types="Cypress"/>
/// <reference types="cypress-iframe"/>

// const { nonEmptyText } = require("wd/lib/asserters");

//describe is test suite level
describe('My Second Test Suite', ()=>{

    it('My first test case', function(){

//------------------------------------------------------------------------------
//test steps
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.frameLoaded('#courses-iframe')
cy.iframe().find('a[href="mentorship"]').eq(0).click()


    })

})