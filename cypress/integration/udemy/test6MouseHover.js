/// <reference types="Cypress"/>

const { nonEmptyText } = require("wd/lib/asserters");

//describe is test suite level
describe('My Second Test Suite', ()=>{

    it('My first test case', function(){

//------------------------------------------------------------------------------
//test steps
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
// cy.get('.mouse-hover-content').invoke('show') 
        //with the help of JQuerry we can handle Mouse Hover but only things that you need to know is
        //invoke('show') will show you hiding element

cy.contains('Top').click({force : true})
        //you can forcibily click that element
        //cypress will look hidden element
        //without opening the menu with invoke.



    })

})