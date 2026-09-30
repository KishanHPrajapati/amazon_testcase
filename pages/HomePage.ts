import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage";
import { env } from "../config/env"

export class HomePage extends BasePage {

    readonly signInDropDown: Locator;
    readonly signInButton: Locator;

    constructor(page: Page) {
        super(page);
        this.signInDropDown = page.locator("//div[@id='nav-link-accountList']");
        this.signInButton = page.locator("//div[@id='nav-flyout-ya-newCust']//preceding-sibling::a");
    }

    async openLandingPage(){
        await this.hitUrl(env.baseURL);
    }

    async hoverSignInDropDown() {
        await this.hover(this.signInDropDown);
    }
    async clickOnSignInButton() {
        await this.click(this.signInButton);
    }
}

