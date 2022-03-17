/// <reference types="Cypress"/>

const { nonEmptyText } = require("wd/lib/asserters");

//describe is test suite level
describe('My Second Test Suite', ()=>{

    it('My first test case', function(){

//------------------------------------------------------------------------------
//test steps
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

cy.get('#opentab').then(function(el){
    const url=el.prop()
    cy.visit(url)
        //rahulshetty.com/ it'll say your domains needs to be change
        //rahulshettyacademy.com/seleniumpractice is acceptable since you are on the same page
            //but qaclick.com is another domain so cypress is avoid that since it can be security issue

            
})


    })

})