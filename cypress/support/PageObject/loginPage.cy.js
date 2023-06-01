
class baseLogin {
    username = ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'
    password = ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input'
    loginButton = '.oxd-button'
    verifSuccesLogin = '.oxd-topbar-header-breadcrumb > .oxd-text'
    urlSuccesLogin = '/web/index.php/dashboard/index'

    inputUsername(username){
        // cy.get(this.username).type(username)
        cy.ketik(this.username,username)
    }
    inputPassword(password){
        // cy.get(this.password).type(password)
        cy.ketik(this.password,password)
    }
    clickLogin(){
        cy.get(this.loginButton).click()
    }
    verifUrl(){
        cy.url().should('include',this.urlSuccesLogin)
    }
    verifSucces(){
        cy.get(this.verifSuccesLogin).should('be.visible')
    }
}


export default baseLogin