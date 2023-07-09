function conectar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var mensagem = window.document.getElementById('segunMsg')
    var data = new Date()
    var hora = data.getHours()
    var minutos = new Date()
    var min = minutos.getMinutes()
    msg.innerText = `Horario: ${hora} horas e ${min} minutos`
    if(hora >= 5 && hora < 12){
    //bom dia
    img.src = 'fotomanha-1.png'
    mensagem.innerText = 'Bom dia'
    document.body.style.background = '#d6a982'
    } else if(hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'fototarde-1.png'
    mensagem.innerText = 'Boa tarde'
    document.body.style.background = '#e7927b'
    } else {
    // boa noite
    img.src = 'fotonoite-1.png'
    mensagem.innerText = 'Boa noite'
    document.body.style.background = '#163a3e'
    }
}