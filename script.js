let maoEsquerda = document.getElementById('maoEsquerda')
let pedra = document.getElementById('pedra')
let papel = document.getElementById('papel')
let tesoura = document.getElementById('tesoura')
let escolhaJogador
let resultado = document.getElementById('result')
pedra.onclick = function(){
    maoEsquerda.innerHTML = '<img src="imagens/punho-fechado.png" alt=""></img>'
    escolhaJogador = 1
}

papel.onclick = function(){
    maoEsquerda.innerHTML = '<img src="imagens/mao.png">'
    escolhaJogador =2
}

tesoura.onclick = function(){
    maoEsquerda.innerHTML = '<img src="imagens/vitoria.png"></img>'
    escolhaJogador =3
}
let maos = document.getElementsByClassName('itemJogo')

function jogar(){
    let maoDireita = document.getElementById('maoDireita')
    let escolhacomputador = parseInt(Math. random()*3)+1
    console.log(escolhacomputador)

if (escolhacomputador==1){
    maoDireita.innerHTML = '<img src="imagens/punho-fechado.png" alt=""></img>'
} 
if (escolhacomputador==2){
        maoDireita.innerHTML = '<img src="imagens/mao.png">'
    }
if(escolhacomputador==3){
    maoDireita.innerHTML = '<img src="imagens/vitoria.png" alt=""></img>'
}
if(escolhacomputador == escolhaJogador){
    resultado.innerHTML = 'empate'
    resultado.style.color ='black'
} else 
if((escolhaJogador === 1 && escolhacomputador === 3) ||
    (escolhaJogador === 2 && escolhacomputador === 1) ||
    (escolhaJogador === 3 && escolhacomputador === 2)){
        resultado.innerHTML = 'Vitória'
        resultado.style.color ='green'
        pontosJogador++
} else{
    resultado.innerHTML = 'Derrota'
    resultado.style.color ='red'
}


}


