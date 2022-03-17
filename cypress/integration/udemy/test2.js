/// <reference types="Cypress"/>
//describe is test suite level
describe('My Second Test Suite', ()=>{

    it('My first test case', function(){
//test steps
cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
cy.get('.search-keyword').type('ca');
cy.wait(1000)

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

//TO GO PROCEED TO CHECKOUT
        cy.get('.cart-icon > img').click();
        cy.contains('PROCEED TO CHECKOUT').click();
        cy.contains('Place Order').click();

//HANDLING DROPDOWNS
        
    })
  
})