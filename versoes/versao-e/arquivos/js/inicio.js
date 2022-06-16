//formulário

//voltar ao topo
var voltaTop = document.querySelector("#voltaTop");
voltaTop.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

//
var agora = new Date()
var ano = agora.getFullYear()

//idade
var idd = window.document.querySelector('#idade')
var diaNasc ='4'; var mesNasc ='10'; var anoNasc ='2003'
var idade = ano - anoNasc
var mesAtual = agora.getMonth() + 1 
    if(mesAtual < mesNasc){
        idade--
    } else {
        if(mesAtual == mesNasc){ 
            if(new Date().getDate() < diaNasc ){ 
                idade--
            }
        }
    } 
idd.innerHTML = `${idade}`

//rdp
var rdp = window.document.querySelector('#copy')
rdp.innerHTML = `&copy; ${ano} Raysantori`