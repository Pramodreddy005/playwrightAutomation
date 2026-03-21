import { expect, Page, test } from "./baseSetup";
import { readData } from "./dataHelper";

export async function signUp( page : Page):Promise<void> {
   await page.goto('https://advantageonlineshopping.com/#/');
    await expect(page.locator("a[id='menuUserLink']")).toBeVisible({timeout : 10000});
    await page.locator("a[id='menuUserLink']").click();
    await page.locator("a[class='create-new-account ng-scope']").click();
    await expect(page.locator("#infoDemo")).toBeVisible({timeout : 20000});
    const userName = readData("signUpTest","uName");
    const password = readData("signUpTest","password");
    const email = readData("signUpTest","mail");
    await page.locator("input[name='usernameRegisterPage']").fill(userName);
    await page.locator("input[name='emailRegisterPage']").fill(email);
    await page.locator("input[name='passwordRegisterPage']").fill(password);
    await page.locator("input[name='confirm_passwordRegisterPage']").fill(password);
    await page.locator("input[name='first_nameRegisterPage']").fill(userName);
    await page.locator("input[name='last_nameRegisterPage']").fill("Five");
    await page.locator("input[name='phone_numberRegisterPage']").fill("9989176326");
    await page.locator("select[name='countryListboxRegisterPage']").selectOption("India"); 
    await page.locator("input[name='cityRegisterPage']").fill("Hyderabad");
    await page.locator("input[name='addressRegisterPage']").fill("1-22,rethibowl, Mehidpatnam");
    await page.locator("input[name='state_/_province_/_regionRegisterPage']").fill("Telangana");
    await page.locator("input[name='postal_codeRegisterPage']").fill("500100");
    await page.locator("input[name='i_agree']").scrollIntoViewIfNeeded();
    await page.locator("input[name='i_agree']").check();
    await page.getByRole("button", {name: 'REGISTER'}).click();
}

export async function signIn( page : Page, userName : string, password : string ):Promise<void> {
    await page.goto('https://advantageonlineshopping.com/#/');
    await expect(page.locator("a[id='menuUserLink']")).toBeVisible({timeout : 10000});
    page.locator("a[id='menuUserLink']").click();
    await page.locator('.spinner').waitFor({ state: 'hidden', timeout: 60000 });
    await page.locator("input[name='username']").fill(userName);
    await page.locator("input[name='password']").fill(password);
    await page.locator("input[name='remember_me']").check();
    await page.getByRole('button',{name:'SIGN IN'}).click();    
    await page.locator('.spinner').waitFor({ state: 'hidden', timeout: 60000 });
    await expect(page.locator("a[id='menuUserLink']>span")).toBeVisible({timeout:50000});
    await expect(page.locator("a[id='menuUserLink']>span")).toHaveText(userName,{timeout: 10000});
}

export async function addToCart( page : Page):Promise<void> {
    await signIn(page, readData("regUser","uName"), readData("regUser","password"));
    await page.locator("div[id='tabletsImg']").click();
    await page.locator("img[id='18']").click();
    await page.locator("span[title='GRAY']").click();
    await page.getByRole('button',{name:"ADD TO CART"}).click();
}

export async function checkOut( page : Page):Promise<void> {
    await addToCart(page);
    await page.locator("svg[id='menuCart']").hover();
    await page.locator("button[id='checkOutPopUp']").click();
    await expect(page.getByRole("button",{name:"NEXT"})).toBeEnabled({timeout:10000});
    await page.getByRole("button",{name:"NEXT"}).click();
    await page.locator("input[name='safepay_username']").fill("test_username");
    await page.locator("input[name='safepay_password']").fill("Test@124");
    await expect(page.locator("button[id='pay_now_btn_SAFEPAY']")).toBeVisible({ timeout: 15000 });
    await page.locator("button[id='pay_now_btn_SAFEPAY']").click();
    await expect(page.getByText("Thank you for buying with Advantage")).toHaveText("Thank you for buying with Advantage",{timeout:5000});
}