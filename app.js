//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
// pega o resultado dos input
function pegaResultado(tagInput) {
  return document.querySelector(tagInput).value;
}

function sortearAmigo() {
  resultado = parseInt(Math.random() * amigos.length);
  return amigos[resultado];
}

function adicionarAmigo() {
  // se  não for vazio adicione
  if (document.querySelector("input").value !== "") {
    amigos.push(pegaResultado("input"));
    limparCampo();
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}
