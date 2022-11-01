let num1 = "";
let num2 = "";
let num3 = "";
let resultado = "";

// função soma
function soma(num1, num2){
    console.log(num1 + num2);
    return resultado;
}
//console.log(soma(10,5));

// função subtração
function subtracao(num1, num2){
    console.log(num1 - num2);
    return resultado;
}
//console.log(subtracao(10,5));

// função multiplicação
function multiplicacao(num1, num2){
    console.log(num1 * num2);
    return resultado;
}
//console.log(multiplicacao(10,5));

// função divisao
function divisao(num1, num2){
    console.log(num1 / num2);
    return resultado;
}

// função quadradoDoNumero
function quadradoDoNumero(num1){
    console.log(num1 * num1);
    return resultado;
}

// função mediaDeTresNumeros
function mediaDeTresNumeros(num1, num2, num3){
    console.log((num1 + num2 + num3)/3);
    return resultado;
}

// função calculaPorcentagem 
function calculaPorcentagem(num1, num2){
    console.log(num1 * (num2 / 100));
    return resultado;
}

// função geradorDePorcentagem
function geradorDePorcentagem(num1, num2){
    console.log((num1 / num2) * 100);
    return resultado;
}

console.log(divisao(10,5), multiplicacao(10,5), subtracao(10,5), soma(10,5), quadradoDoNumero(5), mediaDeTresNumeros(5,5,5), calculaPorcentagem(300,15), geradorDePorcentagem(2,200));