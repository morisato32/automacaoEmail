import express from 'express'

import path from 'path'

const app = express()

import exphbs from 'express-handlebars'

app.engine('handlebars', exphbs.engine())
app.set('views', path.join('src/views'))
app.set('view engine', 'handlebars')

import homeRouter from'./src/router/homeRouter.js'

app.use(express.static('src/public'))

app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use(homeRouter)

app.listen(8000,console.log('servidor rodando na porta 8000'))



