import { JsxEmit } from "typescript"

export class LoginPage{
    txt_username = '#user-name'
    txt_password = '#password'
    btn_login = '#login-button'
    lohi = '[class=product_sort_container]'
    product = '#add-to-cart-sauce-labs-fleece-jacket'
    cart = '#shopping_cart_container'
    removeProduct = '#remove-sauce-labs-fleece-jacket'


    navigate(url: string){
        cy.visit(url)
    }
    inputUsername(username: string){
        cy.get(this.txt_username).type(username)
    }
    inputPassword(password: string){
        cy.get(this.txt_password).type(password)
    }
    clickLogin(){
        cy.get(this.btn_login).click()
    }
    assertLogin(){
        cy.get('.title').should('be.visible')
        cy.get('.peek').should('be.visible')
        cy.contains('Products').should('contain','Products')
    }
    assertLoginFail(){
        cy.get('[data-test="error"]').should('be.visible')
    }
    login(url : string,username : string,password : string){
        this.navigate(url)
        this.inputUsername(username)
        this.inputPassword(password)
        this.clickLogin()
    }
    filterPrice(){
        cy.get(this.lohi).select('lohi')
    }
    addtoCart(){
        cy.get(this.product).click()
        cy.get(this.cart).click()
        cy.contains('Sauce Labs Fleece Jacket').should('be.visible') 
    }
    removeCart(){
        cy.get(this.removeProduct).click()
        cy.contains('Sauce Labs Fleece Jacket').should('not.exist') 
    }
}