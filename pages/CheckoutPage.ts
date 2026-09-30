import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class CheckoutPage extends BasePage {

    readonly checkoutButton: Locator;
    readonly checkoutContinue: Locator;
    
    constructor(page: Page) {
        super(page);
        this.checkoutButton = page.locator("//input[@name='proceedToRetailCheckout']");
        this.checkoutContinue = page.locator("//input[@data-csa-c-slot-id='checkout-secondary-continue-kycxborderupload']");
    }
    
    async clickOnCheckoutButton() {
        await this.click(this.checkoutButton)
    }

    async clickOnCheckoutContinueBtn() {
        await this.click(this.checkoutContinue)
    }
}

