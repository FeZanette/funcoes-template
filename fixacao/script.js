// Resolva o Exercício de Fixação!

// OPÇÃO: DECLARAÇÃO TRADICIONAL

// function cadastro(nome, anoNascimento, anoAtual) {
//     const idade = anoAtual - anoNascimento
//     const maiorDeIdade = idade >= 18

//     return `${nome} é maior de idade? ${maiorDeIdade}`

// }

// console.log(cadastro(`Fernanda`, 1975, 2023))
// console.log(cadastro(`Maia`, 2009, 2023))

//-------------------------

// OPÇÃO: ARROW FUNCTION 
const dados = (nome, anoNascimento, anoAtual) => {
    const idade = anoAtual - anoNascimento
    const maiorDeIdade = idade >= 18

    return (`${nome} é maior de idade? ${maiorDeIdade}`)
}

console.log(dados(`Fernanda`, 1975, 2023))
console.log(dados(`Maia`, 2009, 2023))