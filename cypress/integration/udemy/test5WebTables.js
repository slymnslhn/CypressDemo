/// <reference types="Cypress"/>

const { nonEmptyText } = require("wd/lib/asserters");

//describe is test suite level
describe('My Second Test Suite', ()=>{

    it('My first test case', function(){

//------------------------------------------------------------------------------
//test steps
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

cy.get('tr td:nth-child(2)').each(($el,index,$list)=>{
    const text=$el.text();
    if(text.includes('Phyton')){
        //this will catch Phyton in second row list
        cy,get('tr td:nth-child(2)').eq(index).next().then(function(price){ //this will takephyton then it'll take next row with the help of next()
            
           const priceText= price.text(); //in order to put the price in const use then(). function

           expect(priceText).to.equal('25'); // this will assert 
        })
    }

})
    })

})