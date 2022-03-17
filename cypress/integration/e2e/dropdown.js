/// <reference types="cypress"/>

describe('Asych',function(){

    it('Cypress commands are Asych', function(){
        cy.visit('http://the-internet.herokuapp.com/')
        cy.get('.heading').then(function(heading){
            var headingString = heading.text()
            cy.log(headingString)
            console.log("I'm inside")
        })

        console.log('I\'m outside')
    })

    it('Dropdown Handling', function(){
        cy.contains('Dropdown').click();
    })

    it('DropdownClick',function(){
        cy.get('#dropdown').select('1')
        //or you can use select('Option 1') so you can select with text
        cy.get('#dropdown').first().then(function(dropdownEle){
            cy.log(dropdownEle.text())
     
        })
    })

    it('checkBox', function(){
        cy.go('back');
        cy.contains('Checkboxes').click();
        cy.get('[type=checkbox]').first().check()
            //or :checkbox
        
    })
})