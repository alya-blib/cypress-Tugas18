import baseCustomer from "../../support/PageObject/baseCustomer.cy.js"
const customerData = require("../../fixtures/kasir/customer.json")

describe('add customer', () => {
    const BaseCustomer = new baseCustomer()

    it('input name, no.hp, alamat dan keterangan then add customer', () => {
  
      cy.visit('')
      cy.get(BaseCustomer.email).type(customerData.validEmail)
      cy.get(BaseCustomer.password).type(customerData.validPassword)
      cy.get(BaseCustomer.button).click()
      cy.url().should('include', customerData.linkDashboard)

      cy.get(BaseCustomer.customerKlik).click()
      cy.get(BaseCustomer.customerAdd).click()
      cy.get(BaseCustomer.nama).type(customerData.nama)
      cy.get(BaseCustomer.noHp).type(customerData.noHp)
      cy.get(BaseCustomer.alamat).type(customerData.alamat)
      cy.get(BaseCustomer.keterangan).type(customerData.keterangan)
      cy.get(BaseCustomer.button).click()
      cy.url().should('include', customerData.linkCustomer)
    })

    it('input empty name, no.hp, alamat dan keterangan then add customer', () => {
  
      cy.visit('')
      cy.get(BaseCustomer.email).type(customerData.validEmail)
      cy.get(BaseCustomer.password).type(customerData.validPassword)
      cy.get(BaseCustomer.button).click()
      cy.url().should('include', customerData.linkDashboard)

      cy.get(BaseCustomer.customerKlik).click()
      cy.get(BaseCustomer.customerAdd).click()
      cy.get(BaseCustomer.nama).clear()
      cy.get(BaseCustomer.noHp).type(customerData.noHp)
      cy.get(BaseCustomer.alamat).type(customerData.alamat)
      cy.get(BaseCustomer.keterangan).type(customerData.keterangan)
      cy.get(BaseCustomer.button).click()
      cy.get(BaseCustomer.alert).should('contain.text', '"name" is not allowed to be empty')
    })

   
  })
  
  