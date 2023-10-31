// tipos primitivos

// boolean

// alert("oi");
// var vOuF = false;
// console.log(vOuF);

// var num1 = 1;
// var num2 = 2;

// num3 = num1 + num2;
// console.log(num3);

// tipos de variaveis.

// var e let - se var estiver vazia, então seu valor é nulo.
// var é definido por convenção quando global e let quando local

// var vOuF = false;
// console.log(vOuF);

// var num1 = 1;
// var num2 = 2;

// num3 = num1 + num2;
// console.log(num3);

// const - somente leitura, e deve ter valor inicial.

// Escopo global: definida fora de bloco
// Escopo Local: só definida dentro do bloco

var escopoGlobal = "global";

function escopolocal() {
    let local = "escopo local";
    // console.log(local);
    let local1 = "segundo escopo";
    return console.log(local + local1);
}

// console.log(local); não é possivel acessar
// escopolocal()

// comparação
var zero = 0;
var zero1 = 0;
var zero2 = 1;
var compara = zero == zero1;
console.log(compara);
if (zero == zero1) {
    console.log("True");
}

// comparação identica (comparação de tipos)
var zero3 = '0' === 0;
console.log(zero3);