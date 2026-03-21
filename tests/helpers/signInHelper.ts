import { expect, Page, test } from "./baseSetup.spec";
import { readData } from "./dataHelper";

export async function signUp( page : Page):Promise<void> {
   await page.goto('https://advantageonlineshopping.com/#/');
    await expect(page.locator("a[id='menuUserLink']")).toBeVisible({timeout : 10000});
    await page.locator("a[id='menuUserLink']").click();
    await page.locator("a[class='create-new-account ng-scope']").click();
    await expect(page.locator("#infoDemo")).toBeVisible({timeout : 20000});
    await page.locator("input[name='usernameRegisterPage']").fill("hiuser441");
    await page.locator("input[name='emailRegisterPage']").fill("hiuser441@gmail.com");
    await page.locator("input[name='passwordRegisterPage']").fill("Hiuser@123");
    await page.locator("input[name='confirm_passwordRegisterPage']").fill("Hiuser@123");
    await page.locator("input[name='first_nameRegisterPage']").fill("Hiuser12");
    await page.locator("input[name='last_nameRegisterPage']").fill("Five");
    await page.locator("input[name='phone_numberRegisterPage']").fill("9989176326");
    await page.locator("select[name='countryListboxRegisterPage']").selectOption("India"); 
    await page.locator("input[name='cityRegisterPage']").fill("Hyderabad");
    await page.locator("input[name='addressRegisterPage']").fill("1-22,NanalNagar, Mehidpatnam");
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
    await page.locator("input[name='username']").fill(userName);
    await page.locator("input[name='password']").fill(password);
    await page.locator("input[name='remember_me']").check();
    await page.getByRole('button',{name:'SIGN IN'}).click();    
    await page.locator('.spinner').waitFor({ state: 'hidden', timeout: 60000 });
    await expect( page.locator("svg[id='menuUser']")).toBeEnabled({timeout:10000});
    await page.locator("svg[id='menuUser']").click();
    expect(await page.locator("a[id='menuUserLink']>span").innerText()).toBe(userName);
}

export async function addToCart( page : Page, userName : string, password : string ):Promise<void> {
    signIn(page, readData("regUser","uName"), readData("regUser","password"));
}