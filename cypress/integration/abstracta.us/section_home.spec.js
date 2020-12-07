import './commands.js';

describe ('Home container', () => {

    before(() => {
        cy.LoadWebpage();
    })

    it('Hidden logo', () => {
        cy.get('#home > div.col-lg-6.col-md-6.col-sm-12.col-xs-12 > a > img')
            .should('have.attr', 'alt', 'Abstracta Logo')
    })

    it('Home text', () => {
        cy.get('#home > div.col-lg-6.col-md-6.col-sm-12.col-xs-12 > h1.h1')
            .contains('Enhance your software quality without losing momentum')
            .should('have.attr', 'data-translate', 'h1-home')
    })

    it('Home subtext', () => {
        cy.get('#home > div.col-lg-6.col-md-6.col-sm-12.col-xs-12 > p')
            .should('have.attr', 'data-translate', 'p-home')
    })

    it('Home button - Learn more', () => {
        cy.get('#home > div.col-lg-6.col-md-6.col-sm-12.col-xs-12 > div.hidden-sm.hidden-xs > a')
            .should('have.attr', 'onclick', 'hrefSolutions()')

        cy.get('#home > div.col-lg-6.col-md-6.col-sm-12.col-xs-12 > div.hidden-sm.hidden-xs > a > button')
            .should('have.css', 'background-color', 'rgb(65, 187, 148)')
            .and('have.css', 'background-image','linear-gradient(to right, rgb(17, 177, 142), rgb(0, 189, 129))')
    })

    it('Home image', () => {
        cy.get('#home > div.col-lg-6.col-md-6.div-ilustracion.hidden-xs.hidden-sm > img')
            .should('have.class', 'ilustracion')
            .and('have.attr', 'src', 'https://abstracta-static-assets.s3.amazonaws.com/images/illustration_home.svg')
    })
})