import{type Page, type Locator} from '@playwright/test';
import urls from "../../utils/testData/urls.json"

export class ArtworksListPage{
    //variables
    readonly page : Page;

    //locators
    readonly addArtworkBtn : Locator;


    //constructor
    constructor(page: Page){
        this.page = page;
        this.addArtworkBtn = this.page.locator("[href='/artworks/create']")
    }

    //actions
    async goTo(){
        await this.page.goto(urls.loginPage);
    }

    async clickOnAddArtwork(){
        await this.addArtworkBtn.click();
    }

    async clickOnArtworkByName(artworkName: string){
        await this.page.getByRole("heading",{name: `${artworkName}`}).click();
    }
    async isArtworkVisible(artworkName: string){
        return await this.page.getByRole("heading",{name: `${artworkName}`}).isVisible();
    }
}