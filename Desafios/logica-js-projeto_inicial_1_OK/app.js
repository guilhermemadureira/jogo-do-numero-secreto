function exibirConsole(){
    console.log("Olá, mundo!");
}

exibirConsole();

function ExibirNome(nome){
    console.log(`Olá, ${nome}`);
}

ExibirNome('Guilherme');

function exibirNumDobrado(dobra){
    return(dobra+dobra);
}

console.log("O dobro do numero digitado é " + exibirNumDobrado(5))

function exiberMedia(num1, num2, num3){
    return((num1 + num2 + num3) / 3);
}

console.log("A media dos numeros inseridos são: " + exiberMedia(6,10,6));

function verificarMaior(num1, num2){
    let numMaior = 0;
    if(num1 > num2){
        numMaior = num1;
    }else{
        numMaior = num2;
    }
    return(numMaior);
}

console.log('O maior numero é: ' + verificarMaior(35, 35));

function exibirMultiplicado(mult){
    return(mult * mult);
}

console.log('O numero multiplicado é: ' + exibirMultiplicado(20))