const puppeteer = require('puppeteer');

async function pagePDF(url){

     // Launch the browser
    const browser = await puppeteer.launch()

    // Create a page
    const page = await browser.newPage()

    // Go to your site
    await page.goto(url)

    // arquivo pdf
    await page.pdf({path:'page.pdf',format:'A4'})

    // browser close
    await browser.close()
}

module.exports = pagePDF;