import { Page } from "@playwright/test";

import { HomePage } from "../tests/pages/HomePage";
import { LoginPage } from "../tests/pages/LoginPage";
import { ArtworksListPage } from "../tests/pages/ArtworksListPage";
import { CreateArtworkPage } from "../tests/pages/CreateArtWorkPage";
import { ArtworkPage } from "../tests/pages/ArtworkPage";
import { DateTime} from "./DateTime";

export class ObjectManager{

readonly page :Page;
readonly homePage: HomePage;
readonly loginPage: LoginPage;
readonly artworksListPage: ArtworksListPage;
readonly createArtworkPage: CreateArtworkPage;
readonly dateAndTime: DateTime;
readonly artworkPage: ArtworkPage;

    constructor(page){
        this.page = page;
        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
        this.artworksListPage = new ArtworksListPage(page);
        this.createArtworkPage = new CreateArtworkPage(page);
        this.artworkPage = new ArtworkPage(page);
        this.dateAndTime = new DateTime();
    }

}