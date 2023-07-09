var idade = 10
if (idade < 16){
    console.log('Votação nâo obrigatoria')
} else if(idade <18 || idade >= 65){
    console.log('Votação opcional')
}else {
    console.log('Votação obrigatoria')
}