function tabuada(){
    let numero = window.document.getElementById('txtnum')
    let tabu = window.document.getElementById('tabul')
    if(numero.value.length == 0){
        window.alert('Coloque um número para ter uma tabuada.')
    }else{
        let num = Number(numero.value)
        tabu.innerHTML = ''
        for( let cal = 1 ; cal <= 10 ; cal++ ){
            let tab = document.createElement('option')
            tab.text = `${num} x ${cal} = ${num*cal}`
            tabu.appendChild(tab)
        }
    }
}