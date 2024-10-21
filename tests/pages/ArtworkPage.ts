import{type Page, type Locator} from '@playwright/test';

export class ArtworkPage{
    //variables
    readonly page: Page;

    //locators
    readonly artworkName: Locator;
    readonly reviewsBtn: Locator;
    readonly reviewTitle: Locator;
    readonly reviewDetail: Locator;
    readonly submitReview: Locator;
    readonly artworkNameContainer: Locator;
    readonly submittedReviewContainer: Locator;
    readonly submittedReviewTitle: Locator;
    readonly submittedReviewDetail: Locator;

    //constructor
    constructor(page: Page){
        this.page = page;
        this.artworkNameContainer = this.page.locator('//*[@class="flex flex-col gap-3"]');
        this.artworkName = this.page.locator('//h3[contains(@class,"button font-dmsans")]');
        this.reviewsBtn = this.page.getByRole('tab', { name: 'Reviews' });

        this.reviewTitle = this.page.locator('#review-title');
        this.reviewDetail = this.page.locator('#review-detail');
        this.submitReview = this.page.locator('//*[@id="review-detail"]/following-sibling::*[@type="submit"]');
        this.submittedReviewContainer= this.page.locator('[class="flex flex-col gap-2 w-full"]');
        this.submittedReviewTitle = this.submittedReviewContainer.getByRole('heading',{level: 5});
        this.submittedReviewDetail = this.submittedReviewContainer.getByRole('paragraph').nth(0);
    }

    //actions


    async getArtworkName(){
        const name: string = await this.artworkNameContainer.getByRole("heading").innerText();
        console.log("The artworkName in ArtworkPage is:" +name);
       return name;
    }

    async clickOnArtworkByName(artworkName: string){
        await this.page.getByRole("heading",{name: `${artworkName}`}).click();
    }
    async isArtworkVisible(artworkName: string){
        return await this.page.getByRole("heading",{name: `${artworkName}`}).isVisible();
    }

    async clickOnReviews(){
        await this.reviewsBtn.click();
    }

    async addReview(reviewTitle: string, reviewDetail: string){
        await this.reviewTitle.fill(reviewTitle);
        await this.reviewDetail.fill(reviewDetail);
        await this.submitReview.click();
    }
    
    async getSubmittedReviewTitle(){
        return await this.submittedReviewTitle.innerText();
    }

    async getSubmittedReviewDetail(){
        return await this.submittedReviewDetail.innerText();
    }
}