// Abre a página do Google
import puppeteer from "puppeteer";

(async () => {
    try {
        // abrindo o navegador
        const browser = await puppeteer.launch({ headless: false });
       
        // criando uma nova pagina
        const page = await browser.newPage();

        //entrando no site do google
        await page.goto('https://www.google.com.br');
        
        // Digita "outlook login" na barra de pesquisa do google
        await page.type('textarea[name="q"]', 'outlook login', { delay: 400 });

        // Pressiona enter para enviar a pesquisa
        await page.keyboard.press('Enter');
        
        // espera a nova pagina
        await page.waitForNavigation()

        // Espera a página carregar
        await page.click('a[href="https://outlook.live.com/mail/0/inbox?nlp=1"]', { delay: 1000 });
        
        // espera a nova pagina
        await page.waitForNavigation();

        await page.waitForSelector('input[name="loginfmt"]')
        await page.type('input[name="loginfmt"]', 'paulo_morisato@hotmail.com', { delay: 400 })

        const button1 = await page.waitForSelector('#idSIButton9', { delay: 200 })
        await button1.click()

        await page.waitForSelector('input[name="passwd"]', { delay: 400 })
        await page.type('input[name="passwd"]', '1986paulo', { delay: 400 })

        const button2 = await page.waitForSelector('#idSIButton9')
        await button2.click()

        // Digita a senha novamente
        await page.waitForSelector('input[name="passwd"]', { delay: 400 })
        await page.type('input[name="passwd"]', '1986paulo', { delay: 400 });

        const button3 = await page.waitForSelector('#idSIButton9')
        await button3.click()

        const button4 = await page.waitForSelector('#idSIButton9')
        await button4.click()

        // // Fecha a página da web
        // await page.close();

        // // Fecha o navegador
        // await browser.close();
    } catch (error) {
        console.log(error);
    }
})()



