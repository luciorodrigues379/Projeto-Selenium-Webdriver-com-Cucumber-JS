const {Given, Then, When} = require('@cucumber/cucumber');
const assert = require('assert');
const webdriver = require('selenium-webdriver');

//SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const ChromeDriver = require('chromedriver');
const {By} = require('selenium-webdriver');
var options   = new chrome.Options().headless();

let driver = new webdriver.Builder()
   .forBrowser('chrome')
   .withCapabilities(webdriver.Capabilities.chrome())
   .setChromeOptions(options)
   .build();


        Given('I visit publicazo homepage', {timeout: 15 * 1000}, async () => {

                await driver.get("http://publicazo.insprak.com/")
         });

         When('Prenche campos nome, e-mail, senha e confirmação de senha', async function () {
                await driver.findElement(By.id("search")).sendKeys("teste")
                await driver.findElement(By.name("commit")).click()

           // Write code here that turns the phrase above into concrete actions
         });

         Then('O sistema exibe uma mensagem de sucesso', function () {
           // Write code here that turns the phrase above into concrete actions
         });