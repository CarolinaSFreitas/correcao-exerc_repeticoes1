const prompt = require("prompt-sync")()

let continua

do {
    const nome = prompt("Nome do aluno: ")
    const nota = Number(prompt("Nota: "))

    if (nota >= 7) {
        console.log(`Parabéns ${nome}! Aprovado(a)!`)
    } else {
        console.log(`${nome}, estude mais... Reprovado(a).`)
    }

    continua = prompt("Continua (S/N): ")
} while (continua == "S" || continua == "s")

console.log("Você encerrou o programa.")