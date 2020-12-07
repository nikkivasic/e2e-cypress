import './commands.js'

describe('Abstracta.us navigation bar', () => {

    before(() =>{
        cy.LoadWebpage();
    })

    it('Assert logo', () => {
        cy.get('#navbar > div > div > a > img')
            .should('have.css', 'height', '35px')
    })

    it('Navigation bar - How we Work', () => {

        cy.get('#navbar > div > ul > div:nth-child(1) > button > a')
            .contains('How We Work ')
            .should('have.attr', 'href', './how-we-work/')

        cy.get('#navbar > div > ul > div:nth-child(1) > div > a:nth-child(1)')
            .contains('Testing Consulting')
            .should('have.attr', 'href', './how-we-work/software-testing-consulting')

        cy.get('#navbar > div > ul > div:nth-child(1) > div > a:nth-child(2)')
            .contains('Testing Services')
            .should('have.attr', 'href', './how-we-work/software-testing-services')
    })

    it('Navigation bar - Solutions', () => {

        cy.get('#navbar > div > ul > div:nth-child(2) > button > a')
            .contains('Solutions')
            .should('have.attr', 'href', './solutions/')

        cy.get('#navbar > div > ul > div:nth-child(2) > div > a:nth-child(1)')
            .contains('E2E Software Testing')
            .should('have.attr', 'href', './solutions/software-testing')

        cy.get('#navbar > div > ul > div:nth-child(2) > div > a:nth-child(2)')
            .contains('Test Automation')
            .should('have.attr', 'href', './solutions/test-automation')

        cy.get('#navbar > div > ul > div:nth-child(2) > div > a:nth-child(3)')
            .contains('Performance Testing')
            .should('have.attr', 'href', './solutions/performance-engineering')

        cy.get('#navbar > div > ul > div:nth-child(2) > div > a:nth-child(4)')
            .contains('Mobile Testing')
            .should('have.attr', 'href', './solutions/mobile-testing')

        cy.get('#navbar > div > ul > div:nth-child(2) > div > a:nth-child(5)')
            .contains('Accessibility Testing')
            .should('have.attr', 'href', './solutions/accessibility-testing')

        cy.get('#navbar > div > ul > div:nth-child(2) > div > a:nth-child(6)')
            .contains('Tool Development')
            .should('have.attr', 'href', './solutions/custom-software-testing-tool-development')
    })

    it('Navigation bar - Industries', () => {

        cy.get('#navbar > div > ul > div:nth-child(3) > button > a')
            .contains('Industries ')
            .should('have.attr', 'href', './industries/')

        cy.get('#navbar > div > ul > div:nth-child(3) > div > a:nth-child(1)')
            .contains('E-commerce')
            .should('have.attr', 'href', './industries/ecommerce')

        cy.get('#navbar > div > ul > div:nth-child(3) > div > a:nth-child(2)')
            .contains('Financial')
            .should('have.attr', 'href', './industries/financial')

        cy.get('#navbar > div > ul > div:nth-child(3) > div > a:nth-child(3)')
            .contains('Healthcare')
            .should('have.attr', 'href', './industries/healthcare')

        cy.get('#navbar > div > ul > div:nth-child(3) > div > a:nth-child(4)')
            .contains('Technology')
            .should('have.attr', 'href', './industries/technology')
    })

    it('Navigation bar - Resources', () => {

        cy.get('#navbar > div > ul > div:nth-child(4) > button > a')
            .contains('Insights ')
            .should('have.attr', 'href', './insights/resources')

        cy.get('#navbar > div > ul > div:nth-child(4) > div > a:nth-child(1)')
            .contains('Academy')
            .should('have.attr', 'href', 'http://abstracta.academy/')

        cy.get('#navbar > div > ul > div:nth-child(4) > div > a:nth-child(2)')
            .contains('Blog')
            .should('have.attr', 'href', 'https://abstracta.us/blog/')

        cy.get('#navbar > div > ul > div:nth-child(4) > div > a:nth-child(3)')
            .contains('Continuous Testing')
            .should('have.attr', 'href', './insights/guide-continuous-testing/')

        cy.get('#navbar > div > ul > div:nth-child(4) > div > a:nth-child(4)')
            .contains('Maturity Assessment ')
            .should('have.attr', 'href', './software-testing-maturity-assessment')

        cy.get('#navbar > div > ul > div:nth-child(4) > div > a:nth-child(5)')
            .contains('Podcast ')
            .should('have.attr', 'href', './software-testing-podcast')

        cy.get('#navbar > div > ul > div:nth-child(4) > div > a:nth-child(6)')
            .contains('Resources')
            .should('have.attr', 'href', './insights/resources')
    })

    it('Navigation bar - Why Us', () => {

        cy.get('#navbar > div > ul > div:nth-child(5) > button > a')
            .contains('Why Us ')
            .should('have.attr', 'href', './why-us/company')

        cy.get('#navbar > div > ul > div:nth-child(5) > div > a:nth-child(1)')
            .contains('Careers')
            .should('have.attr', 'href', './why-us/careers')

        cy.get('#navbar > div > ul > div:nth-child(5) > div > a:nth-child(2)')
            .contains('Case Studies')
            .should('have.attr', 'href', './why-us/case-studies')

        cy.get('#navbar > div > ul > div:nth-child(5) > div > a:nth-child(3)')
            .contains('Company')
            .should('have.attr', 'href', './why-us/company')

        cy.get('#navbar > div > ul > div:nth-child(5) > div > a:nth-child(4)')
            .contains('Clients')
            .should('have.attr', 'href', './why-us/clients')

        cy.get('#navbar > div > ul > div:nth-child(5) > div > a:nth-child(5)')
            .contains('Partners')
            .should('have.attr', 'href', './why-us/partners')

        cy.get('#navbar > div > ul > div:nth-child(5) > div > a:nth-child(6)')
            .contains('People')
            .should('have.attr', 'href', './why-us/people')
    })

    it('Navigation bar - Contact us', () => {

        cy.get('#navbar > div > ul > div:nth-child(6) > button > a')
            .contains('Contact Us')
            .should('have.attr', 'href', './contact-us')
    })
})