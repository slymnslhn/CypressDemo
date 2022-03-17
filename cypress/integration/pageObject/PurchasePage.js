class PurchasePage
{
    countryButton()
    {
        return cy.get('#country')
    }

    countrySelectButton()
    {
        return cy.get('.suggestions > ul > li > a')
    }
    checkBoxButton()
    {
        return cy.get('.ng-untouched > .btn')
    }
    successText(){
        return cy.get('.alert')
    }

    
}
export default PurchasePage;