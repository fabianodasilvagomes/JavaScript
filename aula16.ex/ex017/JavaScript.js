
let num = document.querySelector('input#txtnum')
let Nuadici = document.querySelector('select#Nuadici')
let res = document.querySelector('div#res')
let vet = []


function inNumber(n){
    if(Number(n) >= 1 && Number(n) <=100){
        return true
    }else{
        return false
    }

}

function inlist(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false
    }

}

function adicionar() {
    if(inNumber(num.value) && !inlist(num.value, vet)) {
        vet.push(Number(num.value))
            let adic = document.createElement('option')
             adic.text = `Valor ${num.value} adicionado`
             Nuadici.appendChild(adic)
            num.value = ''
            num.focus()
    } else{
        window.alert('Digite um número ou número já  adicionado.')
     }  

}

function verificar(){
    if(vet.length == 0){
        window.alert('Adicione um valor para verificar.')
    }else {
        let tot = vet.length
        let maior = vet[0]
        let menor = vet[0]
        let soma = vet[0]
        let media = vet[0]
        for(let pos in vet){
            soma += vet[pos]
            if(vet[pos] > maior)
                maior = vet[pos]
            
            if(vet[pos] < menor)
                menor = vet[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo foram ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior valor verificado: ${maior}</p>`
        res.innerHTML += `<p>O menor valor verificado: ${menor}</p>` 
        res.innerHTML += `<p>O valor da soma de todos: ${soma}</p>`
        res.innerHTML += `<p>A media dos valores: ${media}</p>`

    }
     
 }