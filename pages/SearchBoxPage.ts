import { Page, Locator } from "@playwright/test";
import { BasePage } from "../utils/BasePage";

export class SearchBoxPage extends BasePage {

    readonly searchBoxInput: Locator;

    constructor(page: Page) {
        super(page);
        this.searchBoxInput = page.locator("//input[@id='twotabsearchtextbox']");
    }

    async enterSearchValue(searchValue: string) {
        await this.enterText(this.searchBoxInput, searchValue);
    }

    async clickOnSelectBoxValue(expectedValue: string) {
        const suggestion = this.page.locator(
            `div.s-suggestion[aria-label="${expectedValue}"]`
        );
        await suggestion.waitFor({ state: "visible", timeout: 10000 });
        await suggestion.click();
    }
}