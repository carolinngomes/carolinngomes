

//voltar ao topo
/*
var voltaTop = document.querySelector("#voltaTop")
voltaTop.addEventListener("click", function() {
    window.scrollTo(0, 0)
}
)
*/

//copyright do rodapé
var copyright = window.document.querySelector('#copyright')
var dataAtual = new Date()
var anoAtual = dataAtual.getFullYear()
copyright.innerHTML = `&copy; ${anoAtual} RaySantori`