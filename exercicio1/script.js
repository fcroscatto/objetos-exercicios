// exercício 1
//Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

const sacolao = []
//a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. 
//Os objetos devem ter as seguintes propriedades: 
//nome: string;
//preco: number;
//disponibilidade: boolean;
const hortifruti = {
    fruta1: "morango", preco: 10, disponiblidade: true,
    fruta2: "maçã", preco: 8, disponibilidade: true,
    fruta3: "banana", preco: 5, disponibilidade: false,
}
//b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.
sacolao.push(hortifruti)
console.log("sacolão", sacolao)
console.log("hortifruti", hortifruti)
//c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.
console.log("sacolão", sacolao)