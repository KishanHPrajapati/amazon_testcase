import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class AddToCartPage extends BasePage {

    readonly clickCartIcon: Locator;
    readonly inStockText: Locator;
    readonly productTitle: Locator;
    readonly quantity: Locator;
    readonly checkoutButton: Locator;
    readonly checkoutContinue: Locator;
    
    constructor(page: Page) {
        super(page);
        this.clickCartIcon = page.locator("//a[@id='nav-cart']");
        this.inStockText = page.locator("//message[@type='InStock']//primary[text()='In Stock']");
        this.productTitle = page.locator("//span[@class='a-truncate sc-grid-item-product-title a-size-base-plus']/span[@class='a-truncate-full a-offscreen']");
        this.quantity = page.locator("//span[@data-a-selector='inner-value']");
        this.checkoutButton = page.locator("//input[@name='proceedToRetailCheckout']");
        this.checkoutContinue = page.locator("//input[@data-csa-c-slot-id='checkout-secondary-continue-kycxborderupload']");
    }

    async clickOnCartIconButton() {
        await this.click(this.clickCartIcon);
    }
    
    async clickOnCheckoutButton() {
        await this.click(this.checkoutButton)
    }

    async clickOnCheckoutContinueBtn() {
        await this.click(this.checkoutContinue)
    }
}

