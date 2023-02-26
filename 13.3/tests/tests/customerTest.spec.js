import { test, expect } from "@playwright/test";

const URL = "http://localhost:3000/";
test("Page is Loading and displaying", async ({ page }) => {
  await page.goto(URL);
  await page.waitForSelector("text=Create New");
  await expect(page).toHaveTitle("React App");
  await expect(page.locator("text=Create New")).toBeVisible();

  // click on the button
  await page.click("text=Create New");
  await page.waitForSelector(".customerName");

  const testCustomer = "Test-Cusomer";
  const testAddress = "test Address";
  await page.fill(".customerName", testCustomer);
  await page.fill(".customerAddress", testAddress);
  await page.click(".modal-footer .btn-primary"); //Save data

  //See that the data was saved
  await page.waitForSelector("text=" + testCustomer);
  await expect(page.locator("text=" + testCustomer)).toBeVisible();
  await expect(page.locator("text=" + testAddress)).toBeVisible();
});
