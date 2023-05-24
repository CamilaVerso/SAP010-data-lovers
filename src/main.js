import { filtrarNomes, filtrarNumeros } from "./data.js";
import data from "./data/tarot/tarot.js";

//menu
const burguer = document.getElementById("burguer");
burguer.addEventListener("click", clickMenu);
function clickMenu() {
  const menu = document.getElementById("menuLista");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
  //console.log(menuLista);
}

console.log(data);
const dadosTarot = data.cards;
//const numeroCarta = data.cards;
//console.log(dadosTarot);

const root = document.getElementById("info-cards");

function infosDosCardsTela(cards) {
  root.innerHTML = cards.map((cards) => `
    <div class="cards">
                    <img alt="cartas-frente" class="card-img" src="${cards.img}">
                <div class="informacoes">
                    <ul class="back-cards-txt">
                    <h1 id="nome-carta"><strong> ${cards.name}</strong></h1>
                    <li><strong>Tipo: ${cards.type} </strong></li>
                    <li><strong>Valor: ${cards.value} </strong></li>
                    </ul>
                </div>
    </div>
`
  )
    .join("");
}
infosDosCardsTela(dadosTarot);

const pesquisarNome = document.getElementById("pesquisa-nome"); // pega o input de pesquisa pela id
pesquisarNome.addEventListener("input", (evento) => {
  // adiciona um evento quando o input é acionado
  const nomeDasCartas = evento.target.value; // variavel para pegar o nome digitado no input
  const filtrarCartas = filtrarNomes(dadosTarot, nomeDasCartas); // variável para chamar a função no data.js com os parametros dadosTarot e nomeDasCartas
  infosDosCardsTela(filtrarCartas); // chama a função infoDosCardsTela com o parametro que foi atribuído na variavel filtrarCartas
});

const pesquisarNumero = document.getElementById("pesquisa-numero");
pesquisarNumero.addEventListener("input", (evento) => {
  const numero = evento.target.valueAsNumber;
  const filtrarNum = filtrarNumeros(dadosTarot, numero);
 
  //console.log(typeof evento.target.valueAsNumber);
  infosDosCardsTela(filtrarNum);

});


console.log(filtrarNumeros);
