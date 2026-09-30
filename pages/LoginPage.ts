import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class LoginPage extends BasePage {

    readonly username: Locator;
    readonly password: Locator;
    readonly continueButton: Locator;
    readonly signInButton: Locator;
    readonly submitOtpButton: Locator;

    constructor(page: Page) {
        super(page);
        this.username = page.locator("//input[@id='ap_email_login']");
        this.password = page.locator("//input[@id='ap_password']");
        this.continueButton = page.locator("//input[@class='a-button-input']");
        this.signInButton = page.locator("//input[@id='signInSubmit']");
        this.submitOtpButton = page.locator("//span[@id='cvf-submit-otp-button']");
    }


    async enterUsername(usernameValue: string) {
        await this.enterText(this.username, usernameValue);
    }

    async enterPassword(passwordValue: string) {
        await this.enterText(this.password, passwordValue);
    }

    async clickOnSubmitOtpButton() {
        await this.click(this.submitOtpButton);
    }
    async clickOnContinueButton() {
        await this.click(this.continueButton);
    }
    async clickOnSignInButton() {
        await this.click(this.signInButton);
    }
}

