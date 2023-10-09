function palavra(){

var a = window.prompt('Qual é a palavra de Alvo?')
var b = window.prompt('Qual é a palavra de Jucimara?')
 
aa = a.length
bb = b.length

if(aa > bb){
    alert(`A maior palavra foi de A/Alvo`)
}
else if(bb > aa){
    alert(`A maior palabra foi de Jucimara/B`)
}
else{
    alert(`*`)
}
}




