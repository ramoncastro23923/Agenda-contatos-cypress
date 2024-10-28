/// <reference types="cypress" />

describe('Testes para home', () => {
    it('Deve adicionar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.sc-gLDzan.ckeKmo' ).first().click()
        cy.get('input[type="text"]').type('gian souza')
        cy.get('input[type="email"]').type('giansouza@teste.com')
        cy.get('input[type="tel"]').type('11 12345678')
        cy.get('button[type="submit"]' ).click()
    })
    it('Editar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get('.sc-gueYoa > .edit').eq(1).click()     
        cy.get('[type="text"]').clear().type('souza gian')
        cy.get('[type="email"]').clear().type('email@teste2.com')
        cy.get('[type="tel"]').clear().type('987654321')
        cy.get('.alterar').click()
    })
    it('Deve deletar um contato', () => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
        cy.get(':nth-child(2) > .sc-gueYoa > .delete').click()    
    })
})
    
   