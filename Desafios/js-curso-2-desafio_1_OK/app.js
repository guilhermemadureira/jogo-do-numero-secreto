let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do Desafio.';

function verificarConsole(){
    console.log('O botão foi clicado!');
}

function verificarAlert(){
    alert('Eu amo JS');
}

function verificarPrompt(){
    let cidade = prompt('Digite o nome de uma cidade do Brasil.');
    alert(`Estive em ${cidade} e lembrei de você.`)
}

function verificarSoma(){
    let num1 = parseInt(prompt('Digite um numero inteiro'));
    let num2 = parseInt(prompt('Digite outro numero inteiro'));
    alert(`A soma de ${num1} com ${num2} é ${num1 + num2}`);
}