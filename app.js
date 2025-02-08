//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
// pega o resultado dos input
function pegaResultado(tagInput) {
  return document.querySelector(tagInput).value.toLowerCase();
}

function sortearAmigo() {
  if (amigos.length > 2) {
    //liberarBotao();
    resultado = parseInt(Math.random() * amigos.length);
    criarElementoFilho(
      "resultado",
      "li",
      "O amigo sorteado foi: " + amigos[resultado]
    );
  } else {
    alert("Adicione pelo menos 3 amigos na sua lista para Sortear :)");
  }
}

function adicionarAmigo() {
  // se  não for vazio adicione

  if (!amigos.includes(pegaResultado("input"))) {
    //console.log("sim");

    if (document.querySelector("input").value !== "") {
      amigos.push(pegaResultado("input"));
      criarElementoFilho("listaAmigos", "li", pegaResultado("input"));
      limparCampo();
    } else {
      alert(
        "Não é possível adicionar um campo vazio, certifique que o nome esteja digitado."
      );
    }
  } else {
    alert("Amigo já Adicionado!");
  }
}

function limparCampo() {
  let valor = document.querySelector("input");
  valor.value = "";
}

function criarElementoFilho(id, tag, texto) {
  // id do elemento pai
  // tag do novo elemento
  // texto da tag
  let elementoPai = document.getElementById(id);
  let novoItem = document.createElement(tag);

  // texto do item
  novoItem.textContent = texto;
  elementoPai.appendChild(novoItem);
}
