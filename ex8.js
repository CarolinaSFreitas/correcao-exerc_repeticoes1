const prompt = require("prompt-sync")()

const simb1 = prompt("1º símbolo: ")
const simb2 = prompt("2º símbolo: ")

const num = Number(prompt("Nº de Espaços: "))

let resposta = ""

// Formas abreviadas de incrementar/decrementar o i
// i = i + 1          Mesmo que -> i++                 ou Mesmo que -> i+= 1
// i = i - 1          Mesmo que -> i--                 ou Mesmo que -> i-= 1

for(let i = 1; i <= num; i++){
    if (i % 2 == 1){
        resposta = resposta + simb1
    }else {
        resposta = resposta + simb2
    }
}

console.log(resposta)

//---------------------------------------------------------------------
//outra forma de fazer

if(num % 2 == 0){
    console.log((simb1 + simb2).repeat(num / 2))
}else {
    console.log((simb1 + simb2).repeat(num / 2) + simb1)
}


