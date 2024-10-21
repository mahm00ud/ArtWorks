import  testData  from '../../utils/testData/credentials.json';
import  artworkData  from '../../utils/testData/createArtworkData.json';
import { test, expect } from "../fixtures/base"
 
const USERNAME = process.env.USERNAME_STAGE!;
const PASSWORD = process.env.PASSWORD_STAGE!;

const IMAGE_PATH: string= "utils/testData/images/testImage.jpg";

test.beforeEach(async ({loginPage}, testinfo)=>{
    console.log(`Running ${testinfo.title}`);
    await loginPage.goTo();
    await loginPage.login(USERNAME, PASSWORD);
});

test.describe('Adding Artwork Tests', ()=>{

    test("Adding an Artwork and checking if it's added in Artworks Page", async ({ homePage, createArtworkPage, artworksListPage, dateTime }) => {
        await homePage.clickOnArtworksHeader();
        await artworksListPage.clickOnAddArtwork();
        await createArtworkPage.clickOnStyleOfArtWork();
    
        const artworkName: string = "TestArtWorkName"+await dateTime.getCurrentDateTime();
        await createArtworkPage.insertArtworkName(artworkName);
        
        await createArtworkPage.selectEditionType({editionTypeIndex:1});
        await createArtworkPage.insertDescription(artworkData.Description);
        await createArtworkPage.insertCurrentPrice("100");
        await createArtworkPage.insertpriceAtPrimarySale("100");
        await createArtworkPage.selectDayFromSameMonthCalendar("Date At Primary Sale", "30");
        await createArtworkPage.insertPrimarySaleBuyer(artworkData.PrimarySaleBuyer);
        await createArtworkPage.uploadArtwork(IMAGE_PATH);
        await createArtworkPage.selectStyleOfWork({styleIndex:2});
        await createArtworkPage.selectNFTGenesis(2);
        await createArtworkPage.selectSupply({supplyIndex:3});
        await createArtworkPage.insertCollaborator(USERNAME);
        await createArtworkPage.insertOwnedBy("asdsadsadsadsadsadsad");
        await createArtworkPage.selectMarketPlaceMintedOnOptions({marketPlaceIndex:3});
        await createArtworkPage.selectDayFromSameMonthCalendar("Minted On", "30");
        await createArtworkPage.selectDayFromSameMonthCalendar("Created On *", "30");
        await createArtworkPage.selectArtistLoyalty("Yes");
        await createArtworkPage.selectPhysicalPiece("Yes");
        await createArtworkPage.clickOnPublish();
        expect(await artworksListPage.isArtworkVisible(artworkName));
      });

      test("Adding an Artwork and Adding a review for it", async ({ homePage, createArtworkPage, artworkPage, artworksListPage, dateTime }) => {
        await homePage.clickOnArtworksHeader();
        await artworksListPage.clickOnAddArtwork();
        await createArtworkPage.clickOnStyleOfArtWork();
    
        const artworkName: string = "TestArtWorkName"+await dateTime.getCurrentDateTime();
        await createArtworkPage.insertArtworkName(artworkName);
        
        await createArtworkPage.selectEditionType({editionTypeIndex:1});
        await createArtworkPage.insertDescription(artworkData.Description);
        await createArtworkPage.insertCurrentPrice("100");
        await createArtworkPage.insertpriceAtPrimarySale("100");
        await createArtworkPage.selectDayFromSameMonthCalendar("Date At Primary Sale", "30");
        await createArtworkPage.insertPrimarySaleBuyer(artworkData.PrimarySaleBuyer);
        await createArtworkPage.uploadArtwork(IMAGE_PATH);
        await createArtworkPage.selectStyleOfWork({styleIndex:2});
        await createArtworkPage.selectNFTGenesis(2);
        await createArtworkPage.selectSupply({supplyIndex:3});
        await createArtworkPage.insertCollaborator(USERNAME);
        await createArtworkPage.insertOwnedBy("asdsadsadsadsadsadsad");
        await createArtworkPage.selectMarketPlaceMintedOnOptions({marketPlaceIndex:3});
        await createArtworkPage.selectDayFromSameMonthCalendar("Minted On", "30");
        await createArtworkPage.selectDayFromSameMonthCalendar("Created On *", "30");
        await createArtworkPage.selectArtistLoyalty("Yes");
        await createArtworkPage.selectPhysicalPiece("Yes");
        await createArtworkPage.clickOnPublish();
        expect(await artworksListPage.isArtworkVisible(artworkName));

        await artworksListPage.clickOnArtworkByName(artworkName);
        expect(await artworkPage.getArtworkName()).toEqual(artworkName);
        await artworkPage.clickOnReviews();
        let reviewTitle: string="ReviewTitle";
        let reviewDetail: string="ReviewDetail";
        await artworkPage.addReview(reviewTitle,reviewDetail);
        expect.soft(await artworkPage.getSubmittedReviewTitle()).toEqual(reviewTitle);
        expect(await artworkPage.getSubmittedReviewDetail()).toEqual(reviewDetail);
      });
});