import {test as base} from "@playwright/test"
import { LoginPage } from "../pages/LoginPage"
import { HomePage } from "../pages/HomePage"
import { ArtworksListPage } from "../pages/ArtworksListPage"
import { CreateArtworkPage } from "../pages/CreateArtWorkPage"
import { ArtworkPage } from "../pages/ArtworkPage"
import { DateTime } from "../../utils/DateTime"

export { expect } from "@playwright/test"

type Myfixtures = {
    homePage: HomePage,
    loginPage: LoginPage,
    artworksListPage: ArtworksListPage,
    createArtworkPage: CreateArtworkPage,
    artworkPage: ArtworkPage,
    dateTime: DateTime
}

export const test = base.extend<Myfixtures>({
    homePage: async ({page}, use) =>{
        await use(new HomePage(page))
    },
    loginPage: async ({page}, use) =>{
        await use(new LoginPage(page))
    },
    artworksListPage: async ({page}, use) =>{
        await use(new ArtworksListPage(page))
    },
    createArtworkPage: async ({page}, use) =>{
        await use(new CreateArtworkPage(page))
    },
    artworkPage: async ({page}, use) =>{
        await use(new ArtworkPage(page))
    },    
    dateTime: async ({page}, use) =>{
        await use(new DateTime())
    }
})