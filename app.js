//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
// pega o resultado dos input
function pegaResultado(tagInput) {
  return document.querySelector(tagInput).value;
}

function sortearAmigo() {
  resultado = parseInt(Math.random() * amigos.length);
  criarElementoFilho("resultado", "input", amigos[resultado]);
}

function adicionarAmigo() {
  // se  não for vazio adicione
  if (document.querySelector("input").value !== "") {
    amigos.push(pegaResultado("input"));
    criarElementoFilho("listaAmigos", "input", pegaResultado("input"));
    limparCampo();
  } else {
    alert(
      "Não é possível adicionar um capo vazio, certifique que o nome esteja digitado."
    );
  }
}

function limparCampo() {
  chute = document.querySelector("input");
  chute.value = "";
}

function criarElementoFilho(id, tag, texto) {
  let elementoPai = document.getElementById(id);
  let novoItem = document.createElement("li");

  // texto do item
  novoItem.textContent = texto;
  elementoPai.appendChild(novoItem);
}
