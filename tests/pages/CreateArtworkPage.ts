import{type Page, type Locator} from '@playwright/test';
import urls from "../../utils/testData/urls.json"

export class CreateArtworkPage{
    //variables
    readonly page: Page;

    //locators
    readonly artworkNameField: Locator;
    readonly editionsDropdown: Locator;
    readonly editionsList: Locator;

    readonly descriptionField: Locator;
    readonly currentPriceField: Locator;
    readonly priceAtPrimarySaleField: Locator;

    readonly dateAtPrimarySaleCalendarBtn: Locator;
    readonly calendarTodayButton: Locator;

    readonly primarySaleBuyerField: Locator;

    readonly styleOfArtWorkDropDown: Locator;
    readonly styleOfArtWorkList: Locator;
    readonly styleOfArtWorkListItems: Locator;
    readonly nftGenesis: Locator;
    readonly supplyDropDown: Locator;
    readonly supplyList: Locator;
    readonly supplyListItems: Locator;

    readonly collaboratorField: Locator;
    readonly createCollaboratorButton: Locator;
    readonly collaboratorOption: Locator;

    readonly ownedByTitle: Locator;
    readonly ownedByField: Locator;
    readonly ownedByOption: Locator;

    readonly marketplaceMintedOnDropdown: Locator;
    readonly marketplaceMintedOnList: Locator;

    readonly dateMintedOnCalendarBtn: Locator;
    readonly dateCreatedOnCalendarBtn: Locator;

    readonly uploadArtworkBtn: Locator;
    readonly datePicker: Locator;

    readonly artistLoyaltyYes: Locator;
    readonly artistLoyaltyNo: Locator;
    readonly physcialPieceYes: Locator;
    readonly physcialPieceNo: Locator;
    readonly publishBtn: Locator;

    //constructor
    constructor(page: Page){
        this.page = page;
        this.artworkNameField = this.page.locator("input#artwork_name");
        this.editionsDropdown = this.page.locator("//button[contains(.,'Select Edition Type')]");
        this.editionsList = this.page.locator("//button[contains(.,'Select Edition Type')]/following-sibling::ul");
        this.descriptionField = this.page.locator("[data-placeholder='Text here...']");
        this.currentPriceField = this.page.locator("#current_price");
        this.priceAtPrimarySaleField = this.page.locator("#primary_sale_price");
        this.dateAtPrimarySaleCalendarBtn = this.page.locator('(//p[text()="Date At Primary Sale"]/following-sibling::button)[1]');

        this.calendarTodayButton = this.page.locator('//td//button[contains(@class, "dark:text-neutral-50")]');

        this.primarySaleBuyerField = this.page.locator('//*[text()="Primary Sale Buyer"]//following-sibling::div//input[@type="text"]');
        //Style Of Art Work Menu
        this.styleOfArtWorkDropDown = this.page.locator('//*[text()="Select Style" and @class=" css-gug38e-placeholder"]');
        this.styleOfArtWorkList = this.page.locator("//*[@class=' css-qr46ko']");
        this.styleOfArtWorkListItems = this.page.locator("//*[@class=' css-qr46ko']//input");
        //NFT Genesis Menu
        this.nftGenesis = this.page.locator('//*[text()="Select NFT Genesis" and @class=" css-gug38e-placeholder"]');
        //Supply Dropdown Menyu
        this.supplyDropDown = this.page.locator('//*[text()="Select Supply" and @class=" css-gug38e-placeholder"]');
        this.supplyList = this.page.locator("//*[@class=' css-qr46ko']");
        this.supplyListItems = this.page.locator("//*[@class=' css-qr46ko']//input");
        //Collaborator
        this.collaboratorField = this.page.locator('//*[text()="Collaborator"]//following-sibling::div//input[@type="text"]');
        this.createCollaboratorButton = this.page.locator("//*[text()='Collaborator']//following-sibling::div//div[contains(text(),'Create \"')]");
        this.collaboratorOption = this.page.locator("//*[text()='Collaborator']//following-sibling::div//div[@role='option']")
        
        this.ownedByTitle = this.page.locator('//label[text()="Owned By"]');
        this.ownedByField = this.page.locator('//*[text()="Owned By"]//following-sibling::div//input[@type="text"]');
        this.ownedByOption = this.page.locator('//*[text()="Owned By"]//following-sibling::div//li[@aria-selected="true"]');
        
        this.marketplaceMintedOnDropdown = this.page.locator("//button[.='Select Marketplace']");
        this.marketplaceMintedOnList = this.marketplaceMintedOnDropdown.locator("//following-sibling::ul");

        this.dateMintedOnCalendarBtn = this.page.locator('(//p[text()="Minted On"]/following-sibling::button)[1]');
        this.dateCreatedOnCalendarBtn = this.page.locator('(//p[text()="Created On *"]/following-sibling::button)[1]');
        this.calendarTodayButton = this.page.locator('//td//button[contains(@class, "dark:text-neutral-50")]');
        this.uploadArtworkBtn = this.page.locator('[accept="image/png,image/jpg,image/jpeg,image/gif,video/mp4,video/mov"]');
        this.datePicker =this.page.locator('//*[contains(@aria-labelledby,"react-day-picker-")]');
        this.artistLoyaltyYes = this.page.locator('//*[@name="artist_loyalty" and @value="1"]');
        this.artistLoyaltyNo = this.page.locator('//*[@name="artist_loyalty" and @value="0"]');
        this.physcialPieceYes = this.page.locator('//*[@name="physical_piece" and @value="1"]');
        this.physcialPieceNo = this.page.locator('//*[@name="physical_piece" and @value="0"]');
        this.publishBtn = this.page.getByRole('button',{name:"Publish"});
    }   

    //actions
    async goTo(){
        await this.page.goto(urls.createArtworkPage);
    }

    async insertArtworkName(artworkName: string){
        await this.artworkNameField.fill(artworkName);
    }

    async clickOnSelectEditionTypeDropDown(){
        await this.editionsDropdown.click();
    }

    async selectEditionType({ editionTypeText, editionTypeIndex=1 }: { editionTypeText?: string, editionTypeIndex?: number } = {}){
        await this.clickOnSelectEditionTypeDropDown();

        if (typeof editionTypeText !== 'undefined') {
            await this.editionsList.locator(`//li[contains(.,"${editionTypeText}")]`).click();
        } else if (typeof editionTypeIndex !== 'undefined'){
            await this.editionsList.locator(`(//li)[${editionTypeIndex}]`).click();
        } 
    }

    async insertDescription(description: string){
        await this.descriptionField.fill(description);
    }

    async insertCurrentPrice(currentPrice: string){
        await this.currentPriceField.fill(currentPrice);
    }

    
    async insertpriceAtPrimarySale(priceSale: string){
        await this.priceAtPrimarySaleField.fill(priceSale);
    }

    //Calendar Methods
    async clickOnDateAtPrimarySaleCalendarBtn(){
        await this.dateAtPrimarySaleCalendarBtn.click();
    }

    async insertPrimarySaleBuyer(primarySaleBuyer: string){
        await this.primarySaleBuyerField.type(primarySaleBuyer);
    }

    //Art of Work
    async clickOnStyleOfArtWork(){
        await this.styleOfArtWorkDropDown.waitFor();
        await this.styleOfArtWorkDropDown.click({force:true});
    }

    //Select from Style Of Work list, passing the value in the menu as a string
    async selectStyleOfWork({styleText ,styleIndex=1}: { styleText?: string, styleIndex?: number }={}){
        await this.clickOnStyleOfArtWork();
        await this.styleOfArtWorkList.waitFor();
        if (typeof styleText !== 'undefined') {
            await this.styleOfArtWorkList.locator(`//*[text()="${styleText}"]/preceding-sibling::input`).click();
        }else if (typeof styleIndex !== 'undefined'){
            await this.page.locator(`(//*[@class=" css-qr46ko"]//input)[${styleIndex}]`).click();
        } 
        
    }
    //NFT Genesis
    async clickOnNFTGenesis(){
        await this.nftGenesis.click({force: true});
    }
    //Select from NFT Genesis list, passing the index of the list starting from 1
    async selectNFTGenesis(menuIndex: number){
        await this.clickOnNFTGenesis();
        const NGTGenesisList:Locator[] = await this.page.locator('//*[@class=" css-qr46ko"]//preceding-sibling::input').all();
        await NGTGenesisList[menuIndex-1].click();
    }

    //Supply List
    async clickOnSupply(){
        await this.supplyDropDown.click({force:true});
    }
    async selectSupply({supplyText ,supplyIndex=1}: { supplyText?: string, supplyIndex?: number }={}){
        await this.clickOnSupply();
        if (typeof supplyText !== 'undefined') {
            await this.supplyList.locator(`//*[text()="${supplyText}"]/preceding-sibling::input`).click();
        }else if (typeof supplyIndex !== 'undefined'){
            await this.page.locator(`(//*[@class=" css-qr46ko"]//input)[${supplyIndex}]`).click();
        } 
    }

    async insertCollaborator(collaborator: string){
        await this.collaboratorField.fill(collaborator);
        if(await this.createCollaboratorButton.isVisible()){
            await this.createCollaboratorButton.click();
        }else{
            await this.collaboratorOption.click();
        }
    }

    async insertOwnedBy(ownedUser: string){
        await this.ownedByField.type(ownedUser);
        if(await this.ownedByOption.isVisible()){
            await this.ownedByOption.click();
        }else{
            await this.ownedByTitle.click();
        }
    }

    async clickOnMarketplaceDropdown(){
        await this.marketplaceMintedOnDropdown.click();
    }

    async selectMarketPlaceMintedOnOptions({marketPlaceText ,marketPlaceIndex=1}: { marketPlaceText?: string, marketPlaceIndex?: number }={}){
        await this.clickOnMarketplaceDropdown();
        if (typeof marketPlaceText !== 'undefined') {
            await this.marketplaceMintedOnList.locator(`//*[text()='${marketPlaceText}']`).click();
        }else if (typeof marketPlaceIndex !== 'undefined'){
            await this.marketplaceMintedOnList.locator(`//li[${marketPlaceIndex}]`).click();
        } 

    }

    async clickOnDatePicker(sectionName: string){
        await this.page.locator(`(//p[text()="${sectionName}"]/following-sibling::button[contains(., "Choose Date")])[1]`).click();
    }

    async selectDayFromSameMonthCalendar(sectionName: string, day: string){
        await this.clickOnDatePicker(sectionName);
        await this.waitUntilDatePickerIsVisible();
        await this.page.locator(`//button[@name="day"  and not(contains(@class,"opacity-50")) and text()="${day}"]`).click();
        await this.page.locator(`(//p[text()="${sectionName}"]/following-sibling::button)[1]`).click();
        await this.waitUntilDatePickerIsHidden();
    }

    async uploadArtwork(path: string){
        await this.uploadArtworkBtn.setInputFiles(path)
    }

    async waitUntilDatePickerIsVisible(){
        await this.datePicker.waitFor({state: "visible"});
    }
    async waitUntilDatePickerIsHidden(){
        await this.datePicker.waitFor({state: "hidden"});
    }

    async selectArtistLoyalty(yesOrNo: string){
        if(yesOrNo.toLowerCase()==="yes"){
            await this.artistLoyaltyYes.click();
        }else if(yesOrNo.toLowerCase()==="no"){
            await this.artistLoyaltyNo.click();
        }else{
            console.log("Invalid Artist Loyalty option, Arguments should be Yes or No");
        }
    }

    
    async selectPhysicalPiece(yesOrNo: string){
        if(yesOrNo.toLowerCase()==="yes"){
            await this.physcialPieceYes.click();
        }else if(yesOrNo.toLowerCase()==="no"){
            await this.physcialPieceNo.click();
        }else{
            console.log("Invalid Physical Piece option, Arguments should be Yes or No");
        }
    }

    async clickOnPublish(){
        await this.publishBtn.click();
    }
}