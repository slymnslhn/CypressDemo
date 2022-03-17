class ProductPage
{

    checkOutButtoN()
    {
        return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link');
    }
    checkBoxButton()
    {
        return cy.contains('Checkout');
    }

}
export default ProductPage;