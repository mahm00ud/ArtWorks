import{type Page, type Locator, expect} from '@playwright/test';
import urls from "../../utils/testData/urls.json"


export class LoginPage{
    //variables
    readonly page : Page;

    //locators
    readonly emailField: Locator;
    readonly passwordField: Locator;
    readonly loginBtn: Locator;

    //constructor
    constructor(page: Page){
        this.page = page;
        this.emailField = this.page.getByPlaceholder("Enter Email Address");
        this.passwordField = this.page.getByPlaceholder("Enter Your Password");
        this.loginBtn = this.page.getByRole("button",{name: "Login"});
    }

    //actions
    async goTo(){
        await this.page.goto(urls.loginPage);
    }

    async login(email: string, password: string){
        await this.emailField.fill(email);
        await this.passwordField.fill(password);
        await this.loginBtn.click();
        await this.page.waitForURL(urls.homePage);
        await expect(this.page).toHaveURL(urls.homePage);
    }
}