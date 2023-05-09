// Acompanhe a Prática Guiada e repita o exercício no Momento de Réplica!


// PRÁTICA 1 - PARÂMETROS E ARGUMENTOS

// OPÇÃO A: DECLARAÇÃO TRADICIONAL

function imprimirNome(nome){
  console.log(`Olá, ${nome}`)
}

imprimirNome("Fernanda")
imprimirNome("Erik")
imprimirNome("Maia")

// OPÇÃO B: EXPRESSÃO DE FUNÇÃO OU FUNÇÃO NÃO-NOMEADA

// const imprimirNome = function(nome){
//     console.log(`Olá, ${nome}`)
// }

//   imprimirNome("Fernanda")
//   imprimirNome("Erik")
//   imprimirNome("Maia")

//----------------------------

// PRÁTICA 2 - UNINDO FUNÇÕES, VARIÁVEIS E OPERADORES

// OPÇÃO A: DECLARAÇÃO TRADICIONAL

function fazerOperacoes (numero){
    const verifica = numero % 2 === 0
    const soma = numero + 10
    const multiplica = numero * numero

    return (`O número ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplica}`)
}

console.log(fazerOperacoes(12))
console.log(fazerOperacoes(13))


// OPÇÃO B: EXPRESSÃO DE FUNÇÃO OU FUNÇÃO NÃO-NOMEADA

// const fazerOperacoes = function (numero){
//     const verifica = numero % 2 === 0
//     const soma = numero + 10
//     const multiplica = numero * numero

//     return (`O número ${numero} é par? ${verifica}. Somado com 10, o resultado é ${soma} e multiplicado por ele mesmo o resultado é ${multiplica}`)
// }

// console.log(fazerOperacoes(12))
// console.log(fazerOperacoes(13))

//----------------------------

// PRÁTICA 3 - UNINDO FUNÇÕES, VARIÁVEIS E OPERADORES

// OPÇÃO A: DECLARAÇÃO TRADICIONAL

// function verificaDados(login, senha){
//     const loginArmazenado = "fernanda@email.com"
//     const senhaArmazenada = "123456"

//     return loginArmazenado === login && senhaArmazenada === senha
// }

// console.log (verificaDados("fernanda@email.com", "123456"))


// OPÇÃO B: EXPRESSÃO DE FUNÇÃO OU FUNÇÃO NÃO-NOMEADA

// const verificaDados = function(login, senha){
//     const loginArmazenado = "fernanda@email.com"
//     const senhaArmazenada = "123456"

//     return loginArmazenado === login && senhaArmazenada === senha
// }

// console.log (verificaDados("fernanda@email.com", "123456"))


// OPÇÃO C - ARROW FUNCTION

// const verificaDados = (login, senha) => {
//     const loginArmazenado = "fernanda@email.com"
//     const senhaArmazenada = "123456"

//     return loginArmazenado === login && senhaArmazenada === senha
// }

// console.log (verificaDados("fernanda@email.com", "123456"))