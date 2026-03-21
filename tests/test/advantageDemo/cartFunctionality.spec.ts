import { expect, test } from "../../helpers/baseSetup.ts";
import { readData } from "../../helpers/dataHelper";
import { addToCart, checkOut } from "../../helpers/signInHelper"; 


test("Add To cart", async ({page}) => {
    await addToCart(page);
});

test("CheckOut", async ({page}) => {
    await checkOut(page);
});

