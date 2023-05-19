// exercicio 3
const pokemon1 = {
	nome: "Bulbasaur",
	tipo: "Grama",
	nivel: 5
}
console.log("pokemon 1", pokemon1)
//a) Crie uma **cópia** do objeto acima, mantendo a estrutura, mas trocando **`nome`** por “Squirtle” e **`tipo`** por “Água”.
const copiaPokemon1 = {
    ...pokemon1,
    nome: "Squirtle",
    tipo: "Água",
}
console.log("cópia pokemon 1", copiaPokemon1)
//b) No objeto original, adicione mais uma propriedade, chamada `ataques`. Esta propriedade deve guardar um **array** que deve começar vazio.
pokemon1.ataques = []
console.log("adiciona prop", pokemon1)
//c) Crie um objeto de `ataque` com a estrutura abaixo e **o adicione no array `ataques`**, utilizando `**push()**`:
const ataque = [
    {nome: "Investida"},
    {dano: 40},
    {tipo: "Normal"},
    {precisao: 100},
]
console.log("criar objeto ataque", ataque)
pokemon1.ataques.push(ataque)
console.log("adiciona array ataques", pokemon1.ataques)

//d) Na cópia do objeto original, ou seja, no objeto que representa o **Squirtle**, 
//adicione a propriedade **`ataques`** a partir do **espalhamento** da propriedade de mesmo nome criada para o objeto original.
copiaPokemon1.ataques = ataque
console.log("adiciona ataques na copia", copiaPokemon1)

//e) Para o objeto original, adicione no array de `ataques` o seguinte ataque: 
//**“Folha Navalha”**, com **45 de dano**, **100 de precisão**, e do tipo **“Grama”**.
pokemon1.ataques = [
    {nome: "Folha Navalha"},
    {dano: 45},
    {tipo: "grama"},
    {precisao: 100},
]
console.log("adiciona ataque no original", pokemon1)

//f) Para a cópia, crie o `ataque` **“Jato de Água”**, 
//com **40 de dano**, **100 de precisão**, e do tipo **“Água”**; e adicione no array de `ataques`.

copiaPokemon1.ataques = [
    {nome: "Jato de Água"},
    {dano: 40},
    {tipo: "Água"},
    {precisao: 100},
]
console.log("adiciona ataque na copia", copiaPokemon1)

//g) Imprima ambos os objetos no console e verifique se todas as informações adicionadas aparecem na impressão.