import baseLogin from "../../support/PageObject/baseLogin.cy.js"
const loginData = require("../../fixtures/kasir/login.json")

describe('login to dashboard', () => {
    const BaseLogin = new baseLogin()
    
    it('input valid email dan password then Login', () => {
  
      cy.visit('')
      cy.get(BaseLogin.email).type(loginData.validEmail)
      cy.get(BaseLogin.password).type(loginData.validPassword)
      cy.get(BaseLogin.button).click()
      cy.url().should('include', loginData.linkDashboard)
    })

    it('input invalid email then Login', () => {
  
      cy.visit('')
      cy.get(BaseLogin.email).type(loginData.invalidEmail)
      cy.get(BaseLogin.password).type(loginData.validPassword)
      cy.get(BaseLogin.button).click()
      cy.get(BaseLogin.alert).should('contain.text', loginData.alertKredensial)
    })

    it('empty email then Login', () => {
  
      cy.visit('')
      cy.get(BaseLogin.email).clear(); // Menghapus nilai yang ada di input
      cy.get(BaseLogin.password).type(loginData.validPassword)
      cy.get(BaseLogin.button).click()
      cy.get(BaseLogin.alert).should('contain.text', '"email" is not allowed to be empty')
    })

    it('empty password then Login', () => {
  
      cy.visit('')
      cy.get(BaseLogin.email).type(loginData.validEmail) // Menghapus nilai yang ada di input
      cy.get(BaseLogin.password).clear()
      cy.get(BaseLogin.button).click()
      cy.get(BaseLogin.alert).should('contain.text', '"password" is not allowed to be empty')
    })
  
  })
  
  