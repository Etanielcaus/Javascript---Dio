// if else
var jogador1 = 0
var jogador2 = 1;
var placar;

//if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('jogadores validos') : console.log('jogadores invalidos');

if (jogador1 > 0) {
    console.log('jogador 1 marcou um ponto');
} else if (jogador2 > 0) {
    console.log('jogador 2 marcou ponto');
} else {
    console.log('ninguem marcou ponto');
}

// switch case
switch (placar) {
    case placar = jogador1 < jogador2:
        console.log("Jogador 1 ganhou");
        break;
    case placar = jogador2 > jogador1:
        console.log("jogador 2 ganhou");
    default:
        console.log("Ninguém ganhou");
        break;
}

// Estrutura de repetição
var array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5' ];
var object = {
    propriedade1: 'propriedade1',
    propriedade2: 'propriedade2',
    propriedade3: 'propriedade3',
}

// for
for (var indice = 0; indice < array.length; indice++){
    console.log(indice);
}

//for/in

for (var i in array){
    console.log(i);
}

for (i in object) {
    console.log(i);
}

// for/of
for (var i of array){
    console.log(i);
}

for (var i of object.propriedade1) {
    console.log(i);
}

// while
var a = 0;

while(a < 10){
    a++;
    console.log(a);
}

//while 
do {
    a++;
    console.log(a);
} while (a < 10);