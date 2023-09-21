var n1=0
var n2=1
var resultado=0
var numero=Number(prompt("ingrese numero"))
console.log(n1)
console.log(n2)
for(let i=0;i<=numero;i++){
    resultado=n1+n2
    n1=n2
    n2=resultado
    console.log(resultado)
}