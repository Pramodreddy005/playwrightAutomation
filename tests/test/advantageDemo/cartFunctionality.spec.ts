import { expect, test } from "../../helpers/baseSetup.ts";
import { readData } from "../../helpers/dataHelper";
import { addToCart, checkOut, contactUs, managementConsole } from "../../helpers/signInHelper"; 


test("Add To cart", async ({page}) => {
    await addToCart(page);
});

test("CheckOut", async ({page}) => {
    await checkOut(page);
});

test("ContactUs", async ({page}) => {
    await contactUs(page);
});

test("ManagementConsole/WindowHandling", async ({page}) => {
    await managementConsole(page);
});

