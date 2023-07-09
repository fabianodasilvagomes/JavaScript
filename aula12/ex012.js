var hrAtual = new Date()
var hora = hrAtual.getHours()
if(hora > 4 && hora < 12){
    console.log('Bom dia')
}else if(hora >= 12 && hora < 18){
    console.log('Boa tarde')
}else
    console.log('Boa noite')

  
