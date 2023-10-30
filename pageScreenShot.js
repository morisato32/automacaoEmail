const puppeteer = require('puppeteer');

async function pageScreenShot(url){

    // Launch the browser
    const browser = await puppeteer.launch(/*{headless:false}*/)

     // Create a page
    const page = await browser.newPage()

     // Go to your site
    await page.goto(url)

    //page dimensions
    await page.setViewport({width:1920,height:1080})

    //page print
    await page.screenshot({path:'page.png'})

    // browser close
    await browser.close()
}

module.exports = pageScreenShot;
    

