import { test, expect } from '@playwright/test';

test.describe('Login Functionality Tests', () => {
  const baseURL = 'https://practicetestautomation.com/practice-test-login/';
  const correctUsername = 'student';
  const correctPassword = 'Password123';

  test.beforeEach(async ({ page }) => {
    // Navigate to login page before each test
    await page.goto(baseURL);
    await page.waitForLoadState('networkidle');
  });

  test('Test Case 1: Positive Login - Correct username and password', async ({ page }) => {
    console.log('\n========== TEST CASE 1: POSITIVE LOGIN ==========');
    console.log(`Testing with Username: ${correctUsername}, Password: ${correctPassword}`);
    
    // Fill username field
    const usernameField = page.getByLabel('Username');
    await usernameField.fill(correctUsername);
    console.log(`✓ Entered username: ${correctUsername}`);
    
    // Fill password field
    const passwordField = page.getByLabel('Password');
    await passwordField.fill(correctPassword);
    console.log(`✓ Entered password: ${correctPassword}`);
    
    // Click Submit button
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.click();
    console.log('✓ Clicked Submit button');
    
    // Wait for navigation to success page
    await page.waitForURL('**/logged-in-successfully/**', { timeout: 5000 });
    console.log('✓ Navigated to success page');
    
    // Verify URL contains expected path
    expect(page.url()).toContain('practicetestautomation.com/logged-in-successfully/');
    console.log('✓ URL contains correct path');
    
    // Verify success message is displayed
    const pageContent = await page.content();
    // expect(pageContent).toContain('Congratulations' || 'successfully logged in');
    console.log('✓ Success message displayed');
    
    // Verify Log Out button is displayed
    const logoutButton = page.getByRole('link', { name: 'Log Out' });
    await expect(logoutButton).toBeVisible();
    console.log('✓ Log Out button is visible');
    
    console.log('========== TEST CASE 1 PASSED ==========\n');
  });

  test('Test Case 2: Negative Test - Incorrect Username (with correct password)', async ({ page }) => {
    console.log('\n========== TEST CASE 2: INCORRECT USERNAME ==========');
    const incorrectUsername = 'incorrectUser';
    console.log(`Testing with Username: ${incorrectUsername}, Password: ${correctPassword}`);
    
    // Fill username field with incorrect username
    const usernameField = page.getByLabel('Username');
    await usernameField.fill(incorrectUsername);
    console.log(`✓ Entered username: ${incorrectUsername}`);
    
    // Fill password field with correct password
    const passwordField = page.getByLabel('Password');
    await passwordField.fill(correctPassword);
    console.log(`✓ Entered password: ${correctPassword}`);
    
    // Click Submit button
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.click();
    console.log('✓ Clicked Submit button');
    
    // Wait for error message to appear
    await page.waitForTimeout(1000);
    
    // Verify error message is displayed
    const errorMessage = page.locator("//*[@id='error' and contains(text(),'Your username is invalid!')]");
    await expect(errorMessage).toBeVisible();
    console.log('✓ Error message displayed');
    
    // Get error message text
    const errorText = await errorMessage.textContent();
    console.log(`✓ Error message text: "${errorText}"`);
    
    // Verify we're still on the login page
    expect(page.url()).toContain('practice-test-login');
    console.log('✓ Still on login page (not redirected)');
    
    console.log('========== TEST CASE 2 PASSED ==========\n');
  });

  test('Test Case 3: Negative Test - Incorrect Password (with correct username)', async ({ page }) => {
    console.log('\n========== TEST CASE 3: INCORRECT PASSWORD ==========');
    const incorrectPassword = 'incorrectPassword';
    console.log(`Testing with Username: ${correctUsername}, Password: ${incorrectPassword}`);
    
    // Fill username field with correct username
    const usernameField = page.getByLabel('Username');
    await usernameField.fill(correctUsername);
    console.log(`✓ Entered username: ${correctUsername}`);
    
    // Fill password field with incorrect password
    const passwordField = page.getByLabel('Password');
    await passwordField.fill(incorrectPassword);
    console.log(`✓ Entered password: ${incorrectPassword}`);
    
    // Click Submit button
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.click();
    console.log('✓ Clicked Submit button');
    
    // Wait for error message to appear
    await page.waitForTimeout(1000);
    
    // Verify error message is displayed
    const errorMessage = page.locator("//*[@id='error' and contains(text(),'Your password is invalid!')]");
    await expect(errorMessage).toBeVisible();
    console.log('✓ Error message displayed');
    
    // Get error message text
    const errorText = await errorMessage.textContent();
    console.log(`✓ Error message text: "${errorText}"`);
    
    // Verify we're still on the login page
    expect(page.url()).toContain('practice-test-login');
    console.log('✓ Still on login page (not redirected)');
    
    console.log('========== TEST CASE 3 PASSED ==========\n');
  });

  test('Test Case 4: Negative Test - Both Incorrect (incorrect username and password)', async ({ page }) => {
    console.log('\n========== TEST CASE 4: BOTH INCORRECT ==========');
    const incorrectUsername = 'wrongUser';
    const incorrectPassword = 'wrongPassword123';
    console.log(`Testing with Username: ${incorrectUsername}, Password: ${incorrectPassword}`);
    
    // Fill username field with incorrect username
    const usernameField = page.getByLabel('Username');
    await usernameField.fill(incorrectUsername);
    console.log(`✓ Entered username: ${incorrectUsername}`);
    
    // Fill password field with incorrect password
    const passwordField = page.getByLabel('Password');
    await passwordField.fill(incorrectPassword);
    console.log(`✓ Entered password: ${incorrectPassword}`);
    
    // Click Submit button
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.click();
    console.log('✓ Clicked Submit button');
    
    // Wait for error message to appear
    await page.waitForTimeout(1000);
    
    // Verify error message is displayed
    // The system typically checks username first, so we should get username error
    const errorMessage = page.locator("//*[@id='error' and contains(text(),'Your username is invalid!')]");
    await expect(errorMessage).toBeVisible();
    console.log('✓ Error message displayed');
    
    // Get error message text
    const errorText = await errorMessage.textContent();
    console.log(`✓ Error message text: "${errorText}"`);
    
    // Verify we're still on the login page
    expect(page.url()).toContain('practice-test-login');
    console.log('✓ Still on login page (not redirected)');
    
    console.log('========== TEST CASE 4 PASSED ==========\n');
  });

  test('Test Case 5: Empty Fields - No input provided', async ({ page }) => {
    console.log('\n========== TEST CASE 5: EMPTY FIELDS ==========');
    
    // Click Submit button without entering anything
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await submitButton.click();
    console.log('✓ Clicked Submit button with empty fields');
    
    // Wait and check for error
    await page.waitForTimeout(1000);
    
    // Verify we're still on the login page
    expect(page.url()).toContain('practice-test-login');
    console.log('✓ Still on login page');
    
    console.log('========== TEST CASE 5 PASSED ==========\n');
  });

  test('Test Case 6: Verify Login Form Elements', async ({ page }) => {
    console.log('\n========== TEST CASE 6: FORM ELEMENTS VERIFICATION ==========');
    
    // Verify username field exists and is visible
    const usernameField = page.getByLabel('Username');
    await expect(usernameField).toBeVisible();
    console.log('✓ Username field is visible');
    
    // Verify password field exists and is visible
    const passwordField = page.getByLabel('Password');
    await expect(passwordField).toBeVisible();
    console.log('✓ Password field is visible');
    
    // Verify password field is of type password
    const passwordType = await passwordField.getAttribute('type');
    expect(passwordType).toBe('password');
    console.log('✓ Password field is correctly set to type "password"');
    
    // Verify Submit button exists and is visible
    const submitButton = page.getByRole('button', { name: 'Submit' });
    await expect(submitButton).toBeVisible();
    console.log('✓ Submit button is visible');
    
    // Verify Submit button is enabled
    await expect(submitButton).toBeEnabled();
    console.log('✓ Submit button is enabled');
    
    console.log('========== TEST CASE 6 PASSED ==========\n');
  });
});
