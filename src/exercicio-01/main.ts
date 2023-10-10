// 1 - Criar uma função que retorne a quantidade de vogais da palavra passada.
// a) Dar um exemplo de uso com uma palavra recebida via parâmetro da função.
// b) Dar um exemplo de uso com uma palavra recebida via input no formulário.

function contarVogais(palavra: string): number {
  const vogais = "aeiouAEIOU";
  let contador = 0;

  for (let i = 0; i < palavra.length; i++) {
    if (vogais.includes(palavra[i])) {
      contador++;
    }
  }

  return contador;
}

// Exemplo de uso com uma palavra passada via parâmetro da função
const palavraExemplo: string = "Bootcamp";
const quantidadeVogais: number = contarVogais(palavraExemplo);
console.log(`A palavra "${palavraExemplo}" possui ${quantidadeVogais} vogais.`);

// Exemplo de uso com uma palavra passada via input
const form = document.querySelector("#formContador") as HTMLFormElement;
const palavraInput = document.querySelector("#palavra") as HTMLInputElement;
const resultadoTexto = document.querySelector(
  "#resultado"
) as HTMLParagraphElement;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const quantidadeVogaisInput: number = contarVogais(palavraInput.value);

  resultadoTexto.textContent = `A palavra "${palavraInput.value}" possui ${quantidadeVogaisInput} vogais.`;
});
