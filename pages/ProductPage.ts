import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class ProductPage extends BasePage {

    readonly selectOneProduct: Locator;
    readonly clickAddToCardButton : Locator;
  
    constructor(page: Page) {
        super(page);
        this.selectOneProduct = page.locator("//div[@data-component-id=14]//a[@class='a-link-normal s-line-clamp-3 s-link-style a-text-normal']");
        this.clickAddToCardButton = page.locator("//input[@id='add-to-cart-button']");
    }

    
    async clickOnSelectOneProduct() {
        await this.click(this.selectOneProduct)
    }

    async clickOnAddToCardButton() {
        await this.click(this.clickAddToCardButton);
    }
}

