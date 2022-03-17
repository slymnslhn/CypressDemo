/// <reference types="Cypress"/>
//describe is test suite level
describe('My Second Test Suite', ()=>{

    it('My first test case', function(){

//------------------------------------------------------------------------------
//test steps
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

cy.get('#alertbtn').click()
cy.get('[value="Confirm"]').click();
//window:alert 

// cy.on('window:')
//if you want to catch that alert by manually use this:
//you can catch 

        cy.on('window:alert',(str) =>{ //this is browser event
            //how to compare 2 string in mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
            //Cypress have capability of browser events. (window:alert) is the event which get fired 
            //on alert open. So you are firing the event through cypress to ec access to that alert
        
        })

         cy.on('window:confirm',(str)=>{ //this is browser event
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
            //it will confirm it
         })

         cy.get('#opentab').invoke('removeAttr','target').click(); //this is JQuerry event
         //this will remove target since it's blank it'll open new child window.
         //In order to avoid that and to open child page in same page we need to remove target
        //because targer='blank' that means it'll open child window

        cy.url().should('include','rahulshettyacademy') // this will assert that we are on the expected url

        cy.go('back');



    })

})