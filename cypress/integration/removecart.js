import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let login = new LoginPage()
const URL = 'https://www.saucedemo.com/'

it('Test Remove Cart', () => {
    login.login(URL,'standard_user','secret_sauce')
    login.assertLogin()
    login.addtoCart()
    login.removeCart()
})