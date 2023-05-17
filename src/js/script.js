let setaDireita = document.getElementById("seta-direita")
let setaEsquerda = document.getElementById("seta-esquerda")
let leonardo = document.getElementById("leonardo")
let samantha = document.getElementById("samantha")
let bruna = document.getElementById("bruna")

function rolarParaDireita() {
    leonardo.style = "display:none"
    bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex"
}
function rolarParaEsquerda() {
    leonardo.style = "display:flex"
    bruna.style = "display:none"
    setaDireita.style = "display:flex"
    setaEsquerda.style = "display:none"
}