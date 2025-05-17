function calcImc(altura, peso) {
    return(peso/(altura*altura));
}

console.log(calcImc(1.65, 125));

function calcFatorial(fatorial){
    let resultado = 0;
    resultado = fatorial;
    for(i = 1; i < fatorial; i++){
        resultado *= i;
    }
    return(resultado);
}

console.log(calcFatorial(10));

function convDolarParaReal(dolar){
    return(dolar * 4.80).toFixed(2);
}

console.log(convDolarParaReal(100));

function calcPerimetroAreaRetangulo(altura, largura){
    console.log('O perimetro do retangulo é ' + 2*(altura + largura) + ' e a area é ' + altura*largura);
}

calcPerimetroAreaRetangulo(15, 30);

function calcPerimetroAreaCirculo(raio){
    console.log('O perimetro do circulo é ' + (2*3.14*raio) + ' e a area é ' + (3.14*(raio**2)));
}

calcPerimetroAreaCirculo(12);

function tabuada(num){
    for(i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num*i}`);
    }
}

tabuada(10);