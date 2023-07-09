function verificar(){
  var data = new Date()
  var ano = data.getFullYear()
  var fano = window.document.getElementById('txtano')
  var res = window.document.getElementById('res')
  if (fano.value.length == 0 || fano.value > ano){
    window.alert('[ERRO] verifique os dados e tente novamente')
  } else {
    var fsex = window.document.getElementsByName('radsex')
    var idade = ano - Number(fano.value)
    var genero = ''
    var tamanho = ''
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
     if (fsex [0].checked){
        genero = 'Homem'
        if(idade >= 0 && idade < 10){
          //criança
          tamanho = 'Criança'
          img.setAttribute('src','foto-crianca-m.png')
        }else if(idade < 21){
          //jovem
          tamanho = 'Jovem'
          img.setAttribute('src','foto-jovem-m.png')
        } else if(idade < 60){
          //adulto
          tamanho = 'Adulto'
          img.setAttribute('src','foto-adulto-m.png')
        } else {
          //idoso
          tamanho = 'idoso'
          img.setAttribute('src','foto-idoso-m.png')
        }
     } else if(fsex [1].checked){
        genero = 'Mulher'
        if(idade >= 0 && idade <= 10){
          //criança
          tamanho = 'Criança'
          img.setAttribute('src','foto-crianca-f.png')
        } else if(idade < 21){
          //jovem
          tamanho = 'Jovem'
          img.setAttribute('src','foto-jovem-f.png')
        } else if(idade < 60){
          //adulto
          tamanho = 'Adulta'
          img.setAttribute('src','foto-adulto-f.png')
        }else {
          //idoso
          tamanho = 'idosa'
          img.setAttribute('src','foto-idoso-f.png')
        }
      
     }
  }
  res.style.textAlign = 'center'
  res.innerHTML = `Identificamos: ${genero} de ${idade} anos.`
  res.appendChild(img)
  res.innerHTML += `<p>${tamanho}</p>`

}