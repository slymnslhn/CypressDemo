/// <reference types="Cypress"/>
//describe is test suite level
describe('My First Test Suite', ()=>{

    it('My first test case', function(){
//test steps
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
cy.get('.search-keyword').type('ca');
cy.wait(1000)
cy.get('.product:visible').should('have.length',4);
        //if you pass 4 it'll give you an error 
        //but with the help of :visible you'll catch only 4 product
        //but instead of this you can use parent child chain which is in below
cy.get('.products').as('productLocator')
        //this will assign product locator as productLocator so you can call it 
        // like @productLocator which makes your code more optimize


//Parent - Child Chain
cy.get('@productLocator').find('.product').should('have.length',4);
        //this will check only producs not entire page

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click();
        //this will go and take that element and will click it.
        cy.get('@productLocator').find('.product').each(($el,index,$list) =>{
            const textVeg=$el.find('h4.product-name').text();
            if(textVeg.includes('Cashews')){
            //since Cashews -1 is present you can use includes method to take substring
                    cy.wrap($el).find('button').click();
                    //here what we did is
                        //we put in wrap because it resolving our promise
                        //then we search it with the help of find method
                        //so it'll click button which is in Cashews dom structure as child
                        //then it'll click on it.       
            }
        })

        // const logo=cy.get('.brand');
            //this will not execute you need to manually promise 
            //because we introduce non cypress code (const) so cypress can't handle that asynchronous
            //we need to do manually

            //Cypress has mechanism if you concatenate one command with another cypress command; Cypress
            //will handle that asynchronous issue by automatically. But if you not you have to do
            //by manually with the help of then(). function


//assert if logo text correctly displayed
cy.get('.brand').should('have.text','GREENKART')


        cy.get('.brand').then(function(logoelement){ //this is print in logs
            cy.log(logoelement.text())
        })
       
        //cy.get('.brand').text(); 
        //this will still won't work since text is not cypress command
        
    })
    it('My second test case', function(){

            })
})