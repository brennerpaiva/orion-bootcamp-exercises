"use strict";
var lista = [
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
// a) Retorna a bio do id passado
function pegaBioPorIdImperativo(id) {
    let bio = "Id inválido";
    for (const pessoa of lista) {
        if (pessoa.id === id) {
            bio = pessoa.bio;
        }
    }
    return bio;
}
// Retorna o name do id passado
function pegaNamePorIdImperativo(id) {
    let name = "Id inválido";
    for (const pessoa of lista) {
        if (pessoa.id === id) {
            name = pessoa.name;
        }
    }
    return name;
}
// Deleta um item da lista a partir de um id passado
function deletaPessoaImperativo(id) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            const pessoaRemovida = lista.splice(i, 1)[0];
            return `${pessoaRemovida.name} foi removido da lista`;
        }
    }
    return "Id inválido";
}
// Altera a bio ou o name a partir de um id passado
function editarPessoaImperativo(id, campo, novoValor) {
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
// Consulta BIO Através do ID passado com Input
const formConsultarBio = document.querySelector("#consultarBioForm");
const InputIdBio = document.querySelector("#idBio");
const bioResult = document.querySelector("#bioResult");
formConsultarBio.addEventListener("submit", (e) => {
    e.preventDefault();
    bioResult.textContent = `${pegaBioPorIdImperativo(parseInt(InputIdBio.value))}`;
});
// Consulta NOME através do ID passado com Input
const formConsultarName = document.querySelector("#consultarNameForm");
const InputIdName = document.querySelector("#idName");
const resultadoNome = document.querySelector("#resultadoNome");
formConsultarName.addEventListener("submit", (e) => {
    e.preventDefault();
    resultadoNome.textContent = `${pegaNamePorIdImperativo(parseInt(InputIdName.value))}`;
});
// Deleta pessoa através do ID passado via Input
const deletarPessoaForm = document.querySelector("#deletarPessoaForm");
const inputIdDeletar = document.querySelector("#idDeletar");
const resultadoDeletar = document.querySelector("#resultadoDeletar");
deletarPessoaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    resultadoDeletar.textContent = `${JSON.stringify(deletaPessoaImperativo(parseInt(inputIdDeletar.value)))}`;
});
// Edita Nome ou Bio a partir do ID e Campo passado via formulário
const editarPessoaForm = document.querySelector("#editarPessoaForm");
const inputIdEditar = document.querySelector("#idEditar");
const campoEditar = document.querySelector("#campoEditar");
const selectCampoEditar = document.querySelector("#selectCampoEditar");
const resultadoEditar = document.querySelector("#resultadoEditar");
editarPessoaForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(selectCampoEditar.value);
    console.log(campoEditar.value);
    resultadoEditar.textContent = `${editarPessoaImperativo(parseInt(inputIdEditar.value), selectCampoEditar.value, campoEditar.value)}`;
});
