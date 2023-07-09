function contar(){
    var txti = document.getElementById('txti')
    var txtf = document.getElementById('txtf')
    var txtp = document.getElementById('txtp')
    var res = document.getElementById('res')
    if(txti.value.length == 0 || txtf.value.length == 0 || txtp.value.length == 0){
        window.alert('[ERRO] Verifique os dados e preencha corretamen.')
    } else{
        res.innerHTML = 'Contando:'
        var ini = Number (txti.value)
        var fim = Number (txtf.value)
        var pas = Number (txtp.value)

        if(ini <= fim){
           for( var con = ini ; con <= fim ; con += pas ){
                res.innerHTML += ` ${con}  \u{1F449}`
            }
           
        } else{
            for(var con = ini ; con >= fim ; con -= pas){
                res.innerHTML += ` ${con} \u{1f449}`
            }
        }
        res.innerHTML += ' Fim '
    }
}