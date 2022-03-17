/// <reference types="Cypress"/>
//describe is test suite level
describe('My Second Test Suite', ()=>{

    it('My first test case', function(){

//------------------------------------------------------------------------------
//test steps
cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1');
        //this will check checkbox is checked
        //and() is basically concatination of assertions

        //if you want to check that you are in correct checkbox

//if you want to assert unchecked one
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked');
       
        cy.get('input[type="checkbox"]').check(['option2','option3'])
            //this will check all checkboxes
            //then it will check whatever you defined in checkboxes by their value
            //value=option2 and value=option3

            cy.get('input[type="checkbox"]').uncheck(['option2','option3'])
            //this will unchecked the option2 and option3


//------------------------------------------------------------------------------
//STATIC DROPDOWNS
        cy.get('select').select('option2').should('have.value','option2');

//DYNAMIC DROPDOWNS
        cy.get('#autocomplete').type('ind');
        cy.get('.ui-menu-item div').each(($el,index,$list) =>{
            if($el.text()==="India"){
                cy.wrap($el).click();
            }
        })
        cy.get('#autocomplete').should('have.value','India');
            //this will validate dynamic dropdown

//Visible and Unvisible element

        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click();
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click();
        cy.get('#displayed-text').should('be.visible')

//Radio Button
        cy.get('[value="radio2"]').check().should('be.checked');

//Alert Button
        




    })
  


})