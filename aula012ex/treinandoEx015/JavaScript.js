function verificar(){
var anoAt = new Date()
var fano = anoAt.getFullYear()
var ano = window.document.getElementById('txtano')
var res = window.document.getElementById('res')
var resul = window.document.getElementById('resul')
if (ano.value.length == 0 || ano.value > fano ){
    window.alert('[ERRO] verifique os dados e tente novamente')

  }else{
    var sexo = window.document.getElementsByName('radsexo')
    var idade =  fano - Number(ano.value)
    var genero = ''
    var tamPessoa = ''
    var img = document.createElement('img')
    img.setAttribute('id','img')
    if(sexo [0].checked){
      genero = 'Homem'
      if(idade >=0 && idade < 10){
          tamPessoa = 'criança'
          img.setAttribute('src','foto-crianca-m.png')
       }else if(idade < 21){
          tamPessoa = 'Jovem'
          img.setAttribute('src','foto-jovem-m.png')
       }else if(idade < 60){
          tamPessoa = 'adulto'
          img.setAttribute('src','foto-adulto-m.png')
       }else{
          tamPessoa = 'idoso'
          img.setAttribute('src','foto-idoso-m.png')
       }
    }
    if(sexo [1].checked){
      genero = 'Mulher'
      if(idade >= 0 && idade < 10){
          tamPessoa = 'criaça'
          img.setAttribute('src','foto-crianca-f.png')
      }else if(idade < 21){
          tamPessoa = 'Jovem'
          img.setAttribute('src','foto-jovem-f.png')
      }else if(idade < 60){
          tamPessoa = 'adulta'
          img.setAttribute('src','foto-adulto-f.png')
      }else{
          tamPessoa = 'idosa'
          img.setAttribute('src','foto-idoso-f.png')
      }
    }  
  }
    resul.style.textAlign = 'center'
    resul.innerHTML = `Identificamos: ${genero} de ${idade} anos.`
    resul.appendChild(img)  
    resul.innerHTML += `<p>${tamPessoa}</p>`
   
}