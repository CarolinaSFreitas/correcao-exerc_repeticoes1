const prompt = require("prompt-sync")()

console.log("Informe o nome ou 'Fim' para sair")

do {
    const nome = prompt("Nome do aluno: ")
    if (nome == "Fim" || nome == "fim") {
        break                     //"força" a saída de repetição
    }
    const nota = Number(prompt("Nota: "))

    if (nota >= 7) {
        console.log(`Parabéns ${nome}! Aprovado(a)!`)
    } else {
        console.log(`${nome}, estude mais... Reprovado(a).`)
    }

} while (true)

console.log("Você encerrou o programa.")



//versao do programa com o break pra forçar a parada da repetição