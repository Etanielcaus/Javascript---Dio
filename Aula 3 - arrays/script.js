// vetores ou arrays

let array = ["string", 1, 2]
// console.log(array[1]);

// array.forEach(function (item, index){ 
//     console.log(item); 
// });


// objetos
var xicara = {
    nome: 'xicara',
    cor: 'azul',
    tamanho: 'p',
    funcao: tomarCafe()
}

function tomarCafe (String){
    console.log(String, "Esta tomando cafe");
}

tomarCafe(xicara.nome)