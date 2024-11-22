/// <reference types="cypress"/>

describe('funcionalidade: login', () =>{

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });
    //afterEach(() => {
        //cy.screenshot()
    //});

    it('deve fazer login com sucesso', () =>{
        cy.get('#username').type('guilherme.teste.@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, guilherme.teste. (não é guilherme.teste.? Sair)')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    })

    it('deve exibir uma mensagem de erro ao inserir um usuário inválido', () => {
        cy.get('#username').type('guilhermeteste.@teste.com.br')
        cy.get('#password').type('teste123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. ')
        cy.get('.woocommerce-error > li').should('exist')
    })

    it('deve exibir uma mensagme de erro ao inserir senha inválida', () => {
        cy.get('#username').type('guilherme.teste.@teste.com.br')
        cy.get('#password').type('teste.123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. ')
        cy.get('.woocommerce-error > li').should('exist')
    });
})