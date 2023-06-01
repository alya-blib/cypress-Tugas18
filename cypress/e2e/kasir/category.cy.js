import baseCategory from "../../support/PageObject/baseCategory.cy.js"
const categoryData = require("../../fixtures/kasir/category.json")

describe('add category', () => {
    const BaseCategory = new baseCategory()

    it('input name dan deskripsi then add category', () => {
  
      cy.visit('')
      cy.get(BaseCategory.email).type(categoryData.validEmail)
      cy.get(BaseCategory.password).type(categoryData.validPassword)
      cy.get(BaseCategory.button).click()
      cy.url().should('include', categoryData.linkDashboard)

      cy.get(BaseCategory.categoryKlik).click()
      cy.get(BaseCategory.categoryAdd).click()
      cy.get(BaseCategory.nama).type(categoryData.nama)
      cy.get(BaseCategory.deskripsi).type(categoryData.deskripsi)
      cy.get(BaseCategory.button).click()
      cy.url().should('include', categoryData.linkCategory)
    })

    it('input empty name dan deskripsi then add category', () => {
  
      cy.visit('')
      cy.get(BaseCategory.email).type(categoryData.validEmail)
      cy.get(BaseCategory.password).type(categoryData.validPassword)
      cy.get(BaseCategory.button).click()
      cy.url().should('include', categoryData.linkDashboard)

      cy.get(BaseCategory.categoryKlik).click()
      cy.get(BaseCategory.categoryAdd).click()
      cy.get(BaseCategory.nama).clear()
      cy.get(BaseCategory.deskripsi).type(categoryData.deskripsi)
      cy.get(BaseCategory.button).click()
      cy.get(BaseCategory.alert).should('contain.text', '"name" is not allowed to be empty')
    })

   
  })
  
  