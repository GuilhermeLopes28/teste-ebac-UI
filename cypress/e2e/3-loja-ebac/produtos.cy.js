/// <reference types="cypress"/>

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
    });
    it('deve selecionar um produto da lista', () => {
        
        //cy.get('.product-block').first().click()
        //cy.get('.product-block').eq(2).click()
        cy.get('.product-block').contains('Arcadio Gym Short').click()
        cy.get('.sku_wrapper').should('exist')

    });
});