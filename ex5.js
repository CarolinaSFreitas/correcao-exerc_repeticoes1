const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

console.log("Contagem Regressiva: ")

for(let i = num; i >= 1; i = i - 1){
    console.log(i)
    prompt()
}

console.log("Fogo!!!")