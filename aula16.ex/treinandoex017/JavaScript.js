let num = document.querySelector('input#txtnum')
let tabela = document.querySelector('select#txttab')
let res = document.querySelector('div#res')
let valor = []

function isnumero(n){
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    }else {
        return false
    }

}

function islist(n , l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }

}

function adicionar(){
    if(isnumero(num.value) && !islist(num.value, valor)){
        valor.push(Number(num.value))
        let list = document.createElement('option')
        list.text = `Valor ${num.value} adicionado`
        tabela.appendChild(list)
        num.value = ''
        num.focus()
    }else{
        window.alert('Número invalido ou ja adicionado.')
    }
}

function verificar(){
    if(valor.length == 0){
        window.alert('Digite um numero para verificar')
    }else{
        let maior = valor[0]
        let menor = valor[0]
        let soma = valor[0]
        let media = valor[0]
        for(let pos in valor){
            soma += valor[pos]
            if(valor[pos] > maior){
                maior = valor[pos]
            }
            if(valor[pos] < menor){
                menor = valor[pos]
            }
        }
        media = soma / valor.length
        res.innerHTML = ''
        res.innerHTML += `<p>Verificamos ${valor.length} números digitados.</p>`
        res.innerHTML += `<p>O maior valor digitado: ${maior}</p>`
        res.innerHTML += `<p>O menor valor digitado: ${menor}</p>`
        res.innerHTML += `<p>A soma entro os digitos: ${soma}</p>`
        res.innerHTML += `<p>A média dos valores digitados: ${media}</p>`

    }
}