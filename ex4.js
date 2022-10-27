const prompt = require("prompt-sync")()

const produto = prompt("Produto: ")
const preco =Number(prompt("Preço R$: "))

console.log(`Promoção de ${produto}`)
console.log("-".repeat(20))

for(let i = 1; i <= 10; i = i + 1){
    const parcela = preco / i
    console.log(`${i} x de R$:${parcela.toFixed(2)}`)
}