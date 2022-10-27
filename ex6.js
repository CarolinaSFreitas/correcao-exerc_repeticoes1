const prompt = require("prompt-sync")()

const palavra = prompt("Palavra: ")
const num = Number(prompt("Número: "))

let resposta = ""


// acrescenta à resposta, a palavra e o * o número de x
// informado pelo usuário -1 (enquanto menor que num) 
for (let i = 1; i <= num; i = i + 1) {
    resposta = resposta + palavra + " * "
}

//na resposta, acrescenta a palavra (sem o *)
console.log(resposta + palavra)


//------------------------------------------------------------
//outra forma

console.log((palavra + " * ").repeat(num - 1) + palavra)
