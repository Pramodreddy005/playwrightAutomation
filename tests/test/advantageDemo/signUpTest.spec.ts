import { expect, test } from "../../helpers/baseSetup.spec";
import { readData } from "../../helpers/dataHelper";
import { signIn, signUp } from "../../helpers/signInHelper"; 


test("SignUpTest",async ({page}) => {
      await signUp(page);
});

test("SignInTest",async ({page}) => {
    await signIn(page, readData("regUser","uName"), readData("regUser","password"));
    
});

test("Add To cart", async ({page}) => {

});
