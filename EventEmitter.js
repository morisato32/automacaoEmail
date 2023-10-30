const { EventEmitter } = require('node:events')

class MyEmitter extends EventEmitter { }

const myEmitter = new MyEmitter();


const success = "Cadastro realizado com sucesso!"
const error = "Ouve um erro!"




myEmitter.on('success', () => {
    console.log(success)
})



myEmitter.on('error', () => {
    console.log(error)
})

myEmitter.emit('success'); // Emite o evento 'success' e imprime a mensagem de sucesso

myEmitter.emit('error'); // Emite o evento 'error' e imprime a mensagem de erro


myEmitter.removeListener('error', () => {
    console.log('O evento erro foi removido com sucesso!')
})






