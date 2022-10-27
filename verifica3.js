const prompt = require("prompt-sync")()

console.log("Informe o nome ou 'Fim' para sair")

let total = 0
let contador = 0

do {
    const nome = prompt("Nome do aluno: ")
    if (nome == "Fim" || nome == "fim") {
        break                     //"força" a saída de repetição
    }
    const nota = Number(prompt("Nota: "))

    total = total + nota
    contador = contador + 1

    if (nota >= 7) {
        console.log(`Parabéns ${nome}! Aprovado(a)!`)
    } else {
        console.log(`${nome}, estude mais... Reprovado(a).`)
    }

} while (true)

const media = total / contador

console.log(`Média da Turma: ${media.toFixed(1)}`)

console.log("Você encerrou o programa.")



//versao do programa que diz também a média das notas da turma