let listaNumeroSorteados =[];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
/* let titulo = document.querySelector('h1');
titulo.innerHTML = 'Jogo do número secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'Escolha um numero entre 1 e 10';
 */
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto,'Brazilian Portuguese Female', 
    {rate:1.2});
}

function exibirMensagemInicial(){
    exibirTextoNaTela('h1' , 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute(){
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero secreto secreto com ${tentativas} ${palavraTentativa}!`;
        console.log(tentativas);
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('chute').setAttribute('disabled',0);

    } else {
        if(chute > numeroSecreto){
            exibirTextoNaTela('p', 'O numero secreto é menor.');
        }else{
            exibirTextoNaTela('p', 'O numero secreto é maior.');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeElementosLista = listaNumeroSorteados.length;

    if(quantidadeElementosLista == numeroLimite){
        listaNumeroSorteados = [];
    }
    if(listaNumeroSorteados.includes(numeroEscolhido)){
        return (gerarNumeroAleatorio());
    }else{
        listaNumeroSorteados.push(numeroEscolhido);
        console.log(listaNumeroSorteados);
        return(numeroEscolhido);
    }
}

function limparCampo(){ 
    chute = document.querySelector('input');
    chute.value = "";
}

function reiniciarJogo(){
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('chute').removeAttribute('disabled');
    document.getElementById('reiniciar').setAttribute('disabled', true);
}