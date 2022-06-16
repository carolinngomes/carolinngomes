

//voltar ao topo
var voltaTop = document.querySelector("#voltaTop");
voltaTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

//copy
var copy = window.document.querySelector('#copy')
var agora = new Date()
var ano = agora.getFullYear()
copy.innerHTML = `&copy; ${ano} raysantori`