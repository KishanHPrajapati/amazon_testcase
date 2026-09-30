import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";
import { SearchBoxPage } from "../pages/SearchBoxPage";
import { ProductPage } from "../pages/ProductPage";
import { AddToCartPage } from "../pages/AddToCartPage";

type MyFixture = {
    loginPage : LoginPage,
    homePage : HomePage,
    searchBoxPage : SearchBoxPage,
    productPage : ProductPage,
    addToCartPage : AddToCartPage
}
export const test = base.extend<MyFixture>({
    loginPage : async({page}, use) => {
        await use(new LoginPage(page));
    },
    homePage : async({page}, use) => {
        await use(new HomePage(page));
    },
    searchBoxPage : async({page}, use) =>{
        await use(new SearchBoxPage(page))
    },
    productPage : async({page}, use) => {
        await use(new ProductPage(page))
    },
    addToCartPage : async({page}, use) => {
        await use(new AddToCartPage(page))
    }
});
    


