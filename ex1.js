const prompt = require("prompt-sync")()

const num = Number(prompt("Número: "))

let resposta = ""

for (let i = num + 1; i <= num + 10; i = i + 1) {
    resposta = resposta + i + " "
}

console.log(`Números seguintes ao ${num}: ${resposta}`)

