import{type Page, type Locator} from '@playwright/test';
import urls from "../../utils/testData/urls.json"

export class HomePage{
    //variables
    readonly page : Page;

    //locators
    readonly loginBtn: Locator;
    readonly artworksBtn : Locator;

    //constructor
    constructor(page: Page){
        this.page = page;
        this.loginBtn = this.page.locator('[href="/login"]')
        this.artworksBtn = this.page.locator('[class="flex items-center sm:mb-4 lg:mb-0 py-2 lg:py-0"][href="/artworks"]');
    }

    //actions
    async goTo(){
        await this.page.goto(urls.homePage);
    }

    async clickOnLogin(){
        await this.loginBtn.click();
    }

    async clickOnArtworksHeader(){
        await this.artworksBtn.click();
        
    }
}