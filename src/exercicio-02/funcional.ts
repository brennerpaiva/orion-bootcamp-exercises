//Funções com paradigma FUNCIONAL

interface IPessoas {
  id: number;
  name: string;
  bio: string;
}

var lista: Array<IPessoas> = [
  {
    id: 1,
    name: "Ada Lovelace",
    bio: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina",
  },
  {
    id: 2,
    name: "Alan Turing",
    bio: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificia",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    bio: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada.",
  },
  {
    id: 4,
    name: "Nicolau Copérnico",
    bio: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar.",
  },
];

// a) Crie uma função que retorne a bio do id passado
function pegaBioPorIdFuncional(lista: Array<IPessoas>, id: number): string {
  const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);

  return pessoaEncontrada ? pessoaEncontrada.bio : "Id inválido";
}

// b) Crie uma função que retorne o name do id passado
function pegaNamePorIdFuncional(lista: Array<IPessoas>, id: number): string {
  const pessoaEncontrada = lista.find((pessoa) => pessoa.id === id);

  return pessoaEncontrada ? pessoaEncontrada.name : "Id inválido";
}

// c) Crie uma função que apague um item da lista a partir de um id passado
function deletaPessoaFuncional(lista: Array<IPessoas>, id: number): string {
  const pessoaIndex = lista.findIndex((pessoa) => pessoa.id === id);

  if (pessoaIndex !== -1) {
    const pessoaRemovida = lista[pessoaIndex];
    lista.splice(pessoaIndex, 1);
    return `${pessoaRemovida.name} foi removido da lista`;
  }

  return "Id inválido";
}

// d) Crie uma função que altere a bio ou o name a partir de um id passado
function editarPessoaFuncional(
  lista: Array<IPessoas>,
  id: number,
  campo: string,
  novoValor: string
): string {
  const pessoaIndex = lista.findIndex((pessoa) => pessoa.id === id);

  if (pessoaIndex !== -1) {
    const pessoaEditada = { ...lista[pessoaIndex] };
    if (campo === "nome") {
      pessoaEditada.name = novoValor;
      lista[pessoaIndex] = pessoaEditada;
      return `Nome alterado para: ${novoValor}`;
    } else if (campo === "bio") {
      pessoaEditada.bio = novoValor;
      lista[pessoaIndex] = pessoaEditada;
      return `Bio alterada para: ${novoValor}`;
    }
  }
  return "Id inválido";
}

// Exemplo de uso:
console.log("EXEMPLOS DE USO COM PARADIGMA FUNCIONAL:");
// A
console.log(pegaBioPorIdFuncional(lista, 1));

// B
console.log(pegaNamePorIdFuncional(lista, 1));

// C
console.log(deletaPessoaFuncional(lista, 1));

// D
console.log(editarPessoaFuncional(lista, 2, "bio", "Bio nova"));
