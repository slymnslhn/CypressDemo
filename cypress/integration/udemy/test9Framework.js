/// <reference types="Cypress"/>
import { text } from 'wd/lib/commands'
import HomePage from '../pageObject/HomePage'
import ProductPage from '../pageObject/productPage'
import PurchasePage from '../pageObject/PurchasePage'


// const { nonEmptyText } = require("wd/lib/asserters");

//describe is test suite level
describe('My Second Test Suite', ()=>{

        before(function(){
            //runs once before all tests in the block
            //all setup related things will put here
            cy.fixture('example').then(function(data)
            {
                this.data=data
            })
        })

it('My First Test Case', function(){
    const homePage=new HomePage()
    const productPage = new ProductPage
    const purchasePage = new PurchasePage
    cy.visit(Cypress.env('url')+'/angularpractice/')

    homePage.getEditBox().type(this.data.name)
    homePage.getGender().select(this.data.gender)
    homePage.getTwoWayDataBinging().should('have.value',this.data.name) 
        //this will verify first and last text box
    homePage.getEditBox().should('have.attr','minlength','2')
        //this will verify attribute of first text box
    homePage.getEnterpreneaur().should('be.disabled')
        //this will verify that our button is disabled

    homePage.getShopTab().click() //this will click shop button

    cy.selectProduct('Blackberry')
        //this is coming from supports page that we already created a new method which 
            //has function to choose product
    cy.selectProduct('Nokia Edge')


    // this.data.productName//this will take product through the example json
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)
    })

   
    productPage.checkOutButtoN().click()
    //---------------------------------
    var sum=0;

    cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>{
        //this will remove dollar signature
        const amount = $el.text()

        var res = amount.split(" ")
        res = res[1].trim() //this is a string
        sum = Number(sum) + Number(res)

    }).then(function(){
        cy.log(sum)
    })
     //---------------------------------
     var total = 0 ;
//TO COMPARE TOTAL WITH OTHERS SUM
cy.get('h3 strong').then(function(element){
    var element = element.text();
    element = element.split(" ")
    total = element[1].trim()
    expect(Number(sum)).to.equal(Number(total))

})


    productPage.checkBoxButton().click()
    purchasePage.countryButton().type('ind')
    purchasePage.countrySelectButton().each(($el,index,$list) =>{
        if($el.text()==='India'){
            cy.wrap($el).click()
        }
    })


   
    purchasePage.checkBoxButton().click({force : true})
    // purchasePage.successText().should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-)')

    purchasePage.successText().then(function(text1)
    {
        const actualText=text1.text()
        expect(actualText.includes('Success')).to.be.true
    })

   



})
   
})