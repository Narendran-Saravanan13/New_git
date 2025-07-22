//multipe locators using $$ mostly used in dropdown
import {test,expect} from '@playwright/test'
test("multiples",async({page})=>{
    await page.goto('https://www.facebook.com/')
    const link= await page.$$('a');
    for(const links of link){
        const testlink=await links.textContent()
        console.log(testlink);
    
        
    }
})