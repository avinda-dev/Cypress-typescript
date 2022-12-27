import {LoginPage} from "./pages/login_pages"
import {DashboardPage} from "./pages/dashboard_pages"

let login = new LoginPage()
let dashboard = new DashboardPage()
const URL = 'https://www.saucedemo.com/'

it('Test Filter Product Price from Low to High', () => {
    login.login(URL,'standard_user','secret_sauce')
    login.assertLogin()
    login.filterPrice()
})