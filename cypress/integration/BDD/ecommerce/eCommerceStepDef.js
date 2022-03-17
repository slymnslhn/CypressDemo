import { Given,When,Then } from "cypress-cucumber-preprocessor/steps";

const homePage=new HomePage()
const productPage = new ProductPage
const purchasePage = new PurchasePage

Given('I open Ecommerce Page',function()
{
    cy.visit(Cypress.env('url')+'/angularpractice/')
})
When ('I add items to Cart',() =>
{
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
})

And ('I validate total prices'), () =>
{
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
}

Then ('Select the country submit and verify Thank You Message'), ()=>
{
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
}
