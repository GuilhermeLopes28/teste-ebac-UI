/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('funcionalidade: login', () =>{

    beforeEach(() => {
        cy.visit('minha-conta')
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

    it('deve exibir uma mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('guilherme.teste.@teste.com.br')
        cy.get('#password').type('teste.123')
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido. ')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('deve fazer login com sucesso usando massa de dados', () => {
        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('.woocommerce-form > .button').click()
        //cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, guilherme.teste. (não é guilherme.teste.? Sair)')
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
    });
    it.only('deve fazer login com sucesso usando fixture', () => {
        cy.fixture('perfil').then(dados =>{
            cy.get('#username').type(dados.usuario, {log: false})
            cy.get('#password').type(dados.senha, {log: false})
            cy.get('.woocommerce-form > .button').click()
            //cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, guilherme.teste. (não é guilherme.teste.? Sair)')
            cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('exist')
        })
    });
})