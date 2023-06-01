import baseRegistrasi from "../../support/PageObject/baseRegistrasi.cy.js"
const registrasiData = require("../../fixtures/kasir/registrasi.json")

describe('register', () => {
    const BaseRegistrasi = new baseRegistrasi()

    it('input name, email and password then register', () => {
  
      cy.visit('')
      cy.get(BaseRegistrasi.registerKlik).click()
      cy.get(BaseRegistrasi.name).type(registrasiData.name)
      cy.get(BaseRegistrasi.email).type(registrasiData.email)
      cy.get(BaseRegistrasi.password).type(registrasiData.password)
      cy.get(BaseRegistrasi.registerAdd).click()
      cy.url().should('include', registrasiData.linkLogin)
    })

    it('input name empty, email and password then register', () => {
  
      cy.visit('')
      cy.get(BaseRegistrasi.registerKlik).click()
      cy.get(BaseRegistrasi.name).clear()
      cy.get(BaseRegistrasi.email).type(registrasiData.email)
      cy.get(BaseRegistrasi.password).type(registrasiData.password)
      cy.get(BaseRegistrasi.registerAdd).click()
      cy.get(BaseRegistrasi.alert).should('contain.text', '"name" is not allowed to be empty')
    })

    it('input name, email empty and password then register', () => {
  
      cy.visit('')
      cy.get(BaseRegistrasi.registerKlik).click()
      cy.get(BaseRegistrasi.name).type(registrasiData.name)
      cy.get(BaseRegistrasi.email).clear()
      cy.get(BaseRegistrasi.password).type(registrasiData.password)
      cy.get(BaseRegistrasi.registerAdd).click()
      cy.get(BaseRegistrasi.alert).should('contain.text', '"email" is not allowed to be empty')
    })

    it('input name, email and password empty then register', () => {
  
      cy.visit('')
      cy.get(BaseRegistrasi.registerKlik).click()
      cy.get(BaseRegistrasi.name).type(registrasiData.name)
      cy.get(BaseRegistrasi.email).type(registrasiData.email)
      cy.get(BaseRegistrasi.password).clear()
      cy.get(BaseRegistrasi.registerAdd).click()
      cy.get(BaseRegistrasi.alert).should('contain.text', '"password" is not allowed to be empty')
    })

    it('input name, invalid email and password then register', () => {
  
      cy.visit('')
      cy.get(BaseRegistrasi.registerKlik).click()
      cy.get(BaseRegistrasi.name).type(registrasiData.name)
      cy.get(BaseRegistrasi.email).type(registrasiData.invalidEmail)
      cy.get(BaseRegistrasi.password).type(registrasiData.password)
      cy.get(BaseRegistrasi.registerAdd).click()
      cy.get(BaseRegistrasi.alert).should('contain.text', '"email" must be a valid email')
    })

  
  })
  
  