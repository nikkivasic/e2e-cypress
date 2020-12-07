import './commands.js';

describe('Cookies', () => {

    before(() => {
        cy.LoadWebpage();
    })

    it("Get cookies", () => {
        cy.getCookies()
            .should('have.length', 1)
            .should((cookies) => {
                expect(cookies[0]).to.have.property('name', '__cfduid')
                //expect(cookies[0]).to.have.property('value', 'd3cebd5c7f87a4297a8d6310cf2d52fe71607199559')
                expect(cookies[0]).to.have.property('httpOnly', true)
                expect(cookies[0]).to.have.property('secure', false)
                expect(cookies[0]).to.have.property('domain')
                expect(cookies[0]).to.have.property('path')
            })
    })

   /* it('Clear cookies', () => {
        cy.clearCookies();
    })*/

})