
const controle = document.querySelectorAll("[data-ajuste]")
const pecas = document.querySelectorAll("[data-peca]")
const estatisticas = document.querySelectorAll("[data-estatistica]")
const corelacoes = {
    bracos: {
        forca: +100,
        poder: +50,
        energia: -100,
        velocidade: -50
    },
    blindagem: {
        forca: +50,
        poder: +100,
        energia: 0,
        velocidade: -150
    },
    nucleos: {
        forca: +25,
        poder: +25,
        energia: +125,
        velocidade: -25
    },
    pernas: {
        forca: +50,
        poder: +25,
        energia: -50,
        velocidade: +75
    },
    foguetes: {
        forca: 0,
        poder: +25,
        energia: -50,
        velocidade: +125
    }
}

controle.forEach((elemento)=>{
    elemento.addEventListener("click", (evento)=>{
        //atualizaContador(evento.target.dataset.ajuste, evento.target.parentNode)
        //atualizaEstatistica(evento.target.dataset.peca, evento.target.textContent)
        atualiza(evento.target.dataset.ajuste, evento.target.dataset.peca, evento.target.parentNode)
    })

})

function atualizaContador (operacao, nodePai){
    let peca = nodePai.querySelector("[data-controle]")
    if(operacao === "-"){
        if (peca.value == 0){
        } else {
            peca.value = parseInt(peca.value) -1
        }
    } else {
        peca.value = parseInt(peca.value) +1
    }
}

function atualizaEstatistica (peca, operacao){
    
    estatisticas.forEach((elemento)=>{
        if (operacao == "+"){
            elemento.textContent = parseInt(elemento.textContent) + corelacoes[peca][elemento.dataset.estatistica]
        } else {
            elemento.textContent = parseInt(elemento.textContent) - corelacoes[peca][elemento.dataset.estatistica]
        }
    })
    
}

//function atualiza (operacao, peca, nodePai){
//    let pai = nodePai.querySelector("[data-controle]")
//    if (operacao === "-"){
//        if (pai.value !== "0"){
//            pai.value = parseInt(pai.value) -1
//            
//            estatisticas.forEach((elemento)=>{
//            elemento.textContent = parseInt(elemento.textContent) + corelacoes[peca][elemento.dataset.estatistica]
//            })
//            
//        }
//    } else {
//        pai.value = parseInt(pai.value) +1
//        
//        estatisticas.forEach((elemento)=>{
//            elemento.textContent = parseInt(elemento.textContent) - corelacoes[peca][elemento.dataset.estatistica]
//        })
//    }
//}

function atualiza (operacao, peca, nodePai){
    let pai = nodePai.querySelector("[data-controle]")
    if (operacao === "-"){
        if (pai.value !== "0"){
            pai.value = parseInt(pai.value) -1
            
            estatisticas.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) - corelacoes[peca][elemento.dataset.estatistica]
            })
            
        }
    } else {
        pai.value = parseInt(pai.value) +1
        
        estatisticas.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) + corelacoes[peca][elemento.dataset.estatistica]
        })
    }
}

//temp

function ver (arr){
    arr.forEach((el)=>{console.log(el)})
}

function logg(a){
    console.log(a)
}