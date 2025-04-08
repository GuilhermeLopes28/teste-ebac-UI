/// <reference types="cypress"/>
import produtosPage from "../../support/page-objects/produtos.page";

describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()
    });
    it('deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Ajax Full-Zip Sweatshirt')
        cy.get('.sku_wrapper').should('exist')

    });
    it('deve buscar um produto com sucesso', () => {
        produtosPage.buscarProduto('Orestes Yoga Pant')
        cy.get('.sku_wrapper').should('exist')
    });
    it('deve visitar a pagina do produto', () => {
        produtosPage.visitarProduto('orestes yoga pant')
        cy.get('.sku_wrapper').should('exist')
    });
    it('deve adicionar o produto ao carrinho', () => {
        let qtd = 5
        produtosPage.buscarProduto('Orestes Yoga Pant')
        produtosPage.addProdutoCarrinho('34', 'Black', qtd )
        //nao sei o porque está dando erro sem essa linha cy.get('.button-variable-item-34').click()
        cy.get('.single_add_to_cart_button').click()
        cy.get('.woocommerce-message').should('contain', '“Orestes Yoga Pant” foram adicionados no seu carrinho.')
    });
    it.only('deve adicionar o produto ao carrinho buscando da massa de dados', () => {  
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[0].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[0].tamanho, 
                dados[0].cor, 
                dados[0].quantidade )
            cy.get('.woocommerce-message').should('contain', dados[0].nomeProduto)
        })
    });
});