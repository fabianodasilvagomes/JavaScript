let num = [1,5,3,4,6,7]
/*
for( let vr = 0; vr < num.length; vr++ ){
    console.log(`a posição ${vr} tem o valor ${num[vr]}`)
}
*/
for(let vr in num){
    console.log(num[vr])
}