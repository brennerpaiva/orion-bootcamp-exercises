// a) Crie uma função que retorne a bio do id passado
// b) Crie uma função que retorne o name do id passado
// c) Crie uma função que apague um item da lista a partir de um id passado
// d) Crie uma função que altere a bio ou o name a partir de um id passado
// e) Demonstre todas as funções com o paradigma funcional e com o imperativo

//Funções com paradigma IMPERATIVO

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
export function pegaBioPorIdImperativo(id: number): string {
  let bio: string = "Id inválido";
  for (const pessoa of lista) {
    if (pessoa.id === id) {
      bio = pessoa.bio;
    }
  }

  return bio;
}

// b) Crie uma função que retorne o name do id passado
function pegaNamePorIdImperativo(id: number): string {
  let name: string = "Id inválido";

  for (const pessoa of lista) {
    if (pessoa.id === id) {
      name = pessoa.name;
    }
  }

  return name;
}

// c) Crie uma função que apague um item da lista a partir de um id passado
function deletaPessoaImperativo(id: number): Array<IPessoas> | String {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      const pessoaRemovida = lista.splice(i, 1)[0];
      return `${pessoaRemovida.name} foi removido da lista`;
    }
  }

  return "Id inválido";
}

// d) Crie uma função que altere a bio ou o name a partir de um id passado
function editarPessoaImperativo(id: number, campo: string, novoValor: string) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i].id === id) {
      if (campo === "nome") {
        lista[i].name = novoValor;
        return `Nome alterado para: ${novoValor}`;
      }
      if (campo === "bio") {
        lista[i].bio = novoValor;
        return `Bio alterada para: ${novoValor}`;
      }
    }
    return "Id inválido";
  }
}

// Exemplo de uso:
console.log("EXEMPLO DE USO COM PARADIGMA IMPERATIVO:");

console.log(pegaBioPorIdImperativo(1));

console.log(pegaNamePorIdImperativo(1));

console.log(deletaPessoaImperativo(1));

console.log(editarPessoaImperativo(2, "bio", "Bio nova"));
