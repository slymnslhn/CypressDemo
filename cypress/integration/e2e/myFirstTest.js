/// <reference types="cypress"/>

const { name } = require("faker/lib/locales/az");
const { text } = require("wd/lib/commands");


it('Go to Url', function(){
    cy.visit('/')
    
    
  
})

it('Click drag and drop', function(){
    cy.contains('Drag and Drop').click()
})

it('Drag and drop actions', function(){
    const dataTransfer= new DataTransfer();
   cy.get('#column-a').trigger('dragstart',{
       dataTransfer
   });

   cy.get('#column-b').trigger('drop',{
       dataTransfer
   });
})

it('Go back to menu ', function(){
    cy.go('back');
})

it ('Alert', () =>{
    cy.contains('JavaScript Alerts').click();
    cy.get("button[onclick='jsAlert()']").click();

    cy.on('window:alert',(text) =>{
        expect(text).to.contains('I am a JS Alert')
    })
})
describe ('alert confirm', function(){
it ('Alert confirm', () =>{
    cy.contains('JavaScript Alerts').click();
    cy.get("button[onclick='jsAlert()']").click();

    cy.on('window:confirm',(text) =>{
        expect(text).to.contains('I am a JS Alert')
    })
})
})

describe ('Url verify', function(){
    it ('url ', () =>{
       cy.url().should('eq','http://the-internet.herokuapp.com/javascript_alerts');
    })
    })

    