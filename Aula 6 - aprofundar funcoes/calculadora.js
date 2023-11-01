function calculadora (){
    const operador = prompt("Escreva uma operação:"); 

    if (!operador || operador >= 2){
        alert("erro");
        calculadora();
    } else {
        let n1 = Number(prompt("Digite o primeiro número"));
        let n2 = Number(prompt("Digite o segundo número"));
        let resultado;

        if (!n1 || !n2){
            alert("parametros invalidos");
            calculadora();
        }else {
            function soma(n1, n2){
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
        
            if (operador == 1) {
                soma(n1, n2);
            }
        
            function novaOperacao (){
                let nova = prompt("Deseja fazer nova operação? 1 - sim, 2 - não");
        
                if (nova == 1) {
                    calculadora();
                } else if (nova == 2) {
                    alert("ok");
                }
            }
        }
        
    } 
}

calculadora();

function escopoLocal() {
	let escopoLocalInterno = “local”;
}
console.log(escopoLocalInterno);