let btn = document.getElementById('gerar-resultado')
let kmGasolina = document.getElementById('km-por-litro-gas')
let precoGasolina = document.getElementById('preco-gas')
let kmEtanol = document.getElementById('km-por-litro-eta')
let precoEtanol = document.getElementById('preco-eta')
let divResultado = document.getElementById('resultado')
let modal = document.getElementById('modal')
let abreModal = document.getElementById('abrir-modal')
let span = document.getElementsByClassName("close")[0]





btn.addEventListener('click', () => {
    
    if(kmGasolina.value != '' && precoGasolina.value != '' && kmEtanol.value != '' && precoEtanol.value != '')
    {
        precoEtanol.value = precoEtanol.value.replace(/,/g, '.')
        precoGasolina.value = precoGasolina.value.replace(/,/g, '.')
        divResultado.innerHTML = checarValor(regraGasolina(kmGasolina.value,precoGasolina.value), regraEtanol(kmEtanol.value,precoEtanol.value))
        limpaCampos()
    }
    else
    {
        divResultado.innerHTML = "FAVOR, PREENCHER TODOS OS CAMPOS :)"
    }
    
})

abreModal.onclick = function (){
    modal.style.display = 'block'
}

span.onclick = function() {
    modal.style.display = 'none'
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none"
    }
}

function regraGasolina(km,preco){
    return (100*km)/preco
}

function regraEtanol(km,preco){
    return (100*km)/preco
}

function checarValor(gas, eta){
    if(gas-eta == 0)
        return ("TANTO FAZ!!!")
    else if(gas-eta>0)
        return ("COMPENSA GASOLINA!!")
    else
        return ("COMPENSA ETANOL")
}

function limpaCampos(){
    kmGasolina.value = ''
    precoGasolina.value = ''
    kmEtanol.value = ''
    precoEtanol.value = ''
}

precoGasolina.addEventListener('keyup', () => {
    let valor = precoGasolina.value

    valor = valor + ''
    valor = parseInt(valor.replace(/[\D]+/g, ''))
    valor = valor + ''
    valor = valor.replace(/([0-9]{2})$/g, ",$1")

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
    }

    precoGasolina.value = valor
    if(valor == 'NaN') precoGasolina.value = ''
})

precoEtanol.addEventListener('keyup', () => {
    let valor = precoEtanol.value

    valor = valor + ''
    valor = parseInt(valor.replace(/[\D]+/g, ''))
    valor = valor + ''
    valor = valor.replace(/([0-9]{2})$/g, ",$1")

    if (valor.length > 6) {
        valor = valor.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2")
    }

    precoEtanol.value = valor
    if(valor == 'NaN') precoEtanol.value = ''
})

kmGasolina.addEventListener('keyup', () =>{
    let a = kmGasolina.value
    a = a.replace(/\D/g, '');
    kmGasolina.value = a
})

kmEtanol.addEventListener('keyup', () =>{
    let a = kmEtanol.value
    a = a.replace(/\D/g, '');
    kmEtanol.value = a
})
