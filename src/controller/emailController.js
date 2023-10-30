import puppeteer from "puppeteer";
import dotenv from 'dotenv'
dotenv.config()


const emailController = {
    email: (req, res) => {
        res.render('index')

    },
    openEmailPost: (req, res) => {

        async function openEmail() {

            try {
                const email = process.env.EMAIL

                const senha = process.env.SENHA

                // abrindo o navegador
                const browser = await puppeteer.launch(
                    {
                        headless: false,
                        defaultViewport: false // se ajusta a tela que esta sendo aberta
                    }
                );

                // criando uma nova pagina
                const page = await browser.newPage();

                //await page.setViewport({ width: 1920, height: 1024 })

                //entrando no site do google
                await page.goto('https://www.google.com.br');

                // Digita "outlook login" na barra de pesquisa do google
                await page.type('textarea[name="q"]', 'outlook login', { delay: 200 });

                // Pressiona enter para enviar a pesquisa
                await page.keyboard.press('Enter');

                // espera a nova pagina
                await page.waitForNavigation()

                // Espera a página carregar
                await page.click('a[href="https://outlook.live.com/mail/0/inbox?nlp=1"]', { delay: 1000 });

                // espera a nova pagina
                await page.waitForNavigation();

                await page.waitForSelector('input[name="loginfmt"]')
                await page.type('input[name="loginfmt"]', email, { delay: 200 })

                const button1 = await page.waitForSelector('#idSIButton9', { delay: 200 })
                await button1.click()

                await page.waitForSelector('input[name="passwd"]', { delay: 200 })
                await page.type('input[name="passwd"]', senha, { delay: 200 })

                const button2 = await page.waitForSelector('#idSIButton9')
                await button2.click()


                // Digita a senha novamente
                await page.waitForSelector('input[name="passwd"]', { delay: 200 })
                await page.type('input[name="passwd"]', '1986paulo', { delay: 200 });

                const button3 = await page.waitForSelector('#idSIButton9')
                await button3.click()

                const button4 = await page.waitForSelector('#idSIButton9')
                await button4.click()


                const pessoasEmail = await page.waitForSelector('#innerRibbonContainer > div:nth-child(1) > div > div > div > div:nth-child(1) > div > span > button.splitPrimaryButton.root-191', { delay: 300 })
                await pessoasEmail.click()


                const emails = await page.waitForSelector('#docking_InitVisiblePart_0 > div > div.QFieH.J8sYv > div:nth-child(1) > div > div.qeaxG.SlppC.g5Egt.SZoKq');
                await emails.click()



                // Obtenha o array de elementos que correspondem ao seletor CSS dos e-mails.
                // Extrair os elementos da lista de contatos.
                const contatos = await page.$$(".NzRnS.X5AXL .ms-FocusZone .css-171 .ddnHNdiv .ms-List-page");
 
                    console.log(contatos)
                // Verifique se o array está vazio.
                if (contatos.length > 0) {

                    // Crie uma lista de contatos.
                    const contactList = [];

                    for (const contato of contatos) {
                        try {
                            const nome = await page.evaluate(nome => nome.querySelector("span.kXx8l > span").textContent, contato);
                            const email = await page.evaluate(email => email.querySelector("span.JoY0x").textContent, contato);
                            contactList.push({ nome, email });
                        } catch (error) {
                            console.log(`Ouve um erro para trazer os contatos: ${error}`);
                        }
                    }

                    // Retorne a lista de contatos.
                    console.log(contactList) 
                } else {
                    // Não há contatos no e-mail.
                    return [];
                }

                



                // // Fecha a página da web
                // await page.close();

                // // Fecha o navegador
            }    // await browser.close();
            catch (error) {
                console.log(error);
            }


        }
        res.render('index', { openEmail })
    }

}
export default emailController
