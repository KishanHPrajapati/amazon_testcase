import { Page, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage.ts";
import commonData from "../testdata/commonData.json";
import { HomePage } from "../pages/HomePage.ts";
import { test } from "../fixtures/BaseFixtures.ts";
import { SearchBoxPage } from "../pages/SearchBoxPage.ts";
import { env } from "../config/env";

test('Scenario 1 - Search, add to cart, validate cart, and continue to checkout safely',
    async ({ page, loginPage, homePage, searchBoxPage, productPage, addToCartPage }) => {  
    await homePage.openLandingPage();
    await homePage.hoverSignInDropDown();
    await homePage.clickOnSignInButton();
    await loginPage.enterUsername(env.username);
    await loginPage.clickOnContinueButton();
    await loginPage.enterPassword(env.password);
    await loginPage.clickOnSignInButton();
    // await page.pause();
    // await loginPage.clickOnSubmitOtpButton();
    await searchBoxPage.enterSearchValue(commonData.searchData.searchValue);
    await searchBoxPage.clickOnSelectBoxValue(commonData.searchData.selectSearchValue);
    await productPage.clickOnSelectOneProduct();
    await productPage.clickOnAddToCardButton();
    await addToCartPage.clickOnCartIconButton();
    expect(await addToCartPage.inStockText.innerText()).toBe(commonData.addToCart.inStock);
    await expect(addToCartPage.inStockText).toHaveText(commonData.addToCart.inStock);
    expect(addToCartPage.inStockText).toBeVisible();
    expect(await addToCartPage.productTitle.innerText()).toBe(commonData.addToCart.productTitle);
    await expect(addToCartPage.productTitle).toHaveText(commonData.addToCart.productTitle);
    expect(addToCartPage.inStockText).toBeVisible();
    expect(await addToCartPage.quantity.innerText()).toBe(commonData.addToCart.quantity);
    await expect(addToCartPage.quantity).toHaveText(commonData.addToCart.quantity);
    expect(addToCartPage.quantity).toBeVisible();
    await addToCartPage.clickOnCheckoutButton();
    await addToCartPage.clickOnCheckoutContinueBtn();
});