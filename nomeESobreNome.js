// especifica a quantidade de elementos usado na função soma
// neste caso 3 elementos
// usando restParameters
// function soma(...valores) {
//    let tam = valores.length
//    console.log(tam)


//    //let res = n1+n2+n3
// }

// soma(1, 3, 8)



function nomeESobreNome(nome) {

      // se nome não existe ou não for uma string
   if (!nome || typeof nome !== 'string') {
      throw new Error("O parâmetro 'nome' deve ser uma string.")
     
   }else{
      // separa em duas substrings e pega o primeiro caractere da primeira substring
      nome.split(" ")
      console.log(nome.slice(0, 1))
   }

   //separa em duas substrings e pega o primeiro caractere da segunda substring
   let sobre = nome.split(" ")
   console.log(sobre[1].slice(0, 1))

}

nomeESobreNome("Davi Luiz")










// const arr = [1, 2, 3, 4, 5];

// const newArr = arr.slice(1, 3);

// console.log(newArr); // [2, 3]

