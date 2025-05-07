var discos = [];
let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];

function fecharModal() {
  const modal = document.getElementById("detalhes");
  modal.classList.add("oculto");
}

const listaBandas = document.getElementById("listaBandas");
const cardsContainer = document.getElementById("cardsContainer");


fetch("dados.json")
  .then(response => response.json())
  .then(bandas => {
    bandas.forEach((banda) => {
      const li = document.createElement("li");
      li.textContent = banda.nome;
      li.style.cursor = "pointer"; 
      li.onclick = () => mostrarDiscos(banda); 
      listaBandas.appendChild(li);
    });

    
    if (bandas.length > 0) {
      mostrarDiscos(bandas[0]);
    }
  })
  .catch(error => console.error("Erro ao carregar os dados:", error));

function mostrarDiscos(banda) {
  cardsContainer.innerHTML = ""; 
  discos = banda.discos; 

  banda.discos.forEach((disco, index) => {
    const card = document.createElement("div");
    card.classList.add("card"); 

    
    card.innerHTML = `
      <img src="${disco.imagem}" alt="Capa do disco ${disco.nome}">
      <div class="info">
        <h3>${disco.nome}</h3>
        <p>Banda: ${banda.nome}</p>
        <p>Ano: ${disco.ano}</p>
        <p>Preço: R$ ${disco.preco.toFixed(2)}</p>
        <button>Ver mais</button>
      </div>
    `;
    const botao = card.querySelector("button");
    botao.addEventListener("click", () => mostrarDetalhes(banda.nome, disco, index));

    cardsContainer.appendChild(card); 
  });
};

function mostrarDetalhes(nomeBanda, disco, indice) {
  const detalhes = document.getElementById('detalhes');
  const nome = document.querySelector('#detalhes .nome p');
  const imagem = document.querySelector('#detalhes img');
  const banda = document.querySelector('#detalhes .banda p');
  const preco = document.querySelector('#detalhes .preco p');
  const frete = document.querySelector('#detalhes .frete p');
  const total = document.querySelector('#detalhes .total p');
  const botao = document.querySelector('#detalhes .rodape button');
  detalhes.classList.remove('oculto');
  nome.innerHTML = disco.nome;
  imagem.src = disco.imagem;
  banda.innerHTML = nomeBanda;
  preco.innerHTML = `R$ ${disco.preco.toFixed(2)}`;
  frete.innerHTML = `R$ ${disco.frete.toFixed(2)}`;
  let subTotal = disco.preco + disco.frete;
  total.innerHTML = `R$ ${subTotal.toFixed(2)}`;
  botao.setAttribute('onclick', `adicionarCarrinho(${indice})`);
}

function adicionarCarrinho(indice) {
  const discoSelecionado = discos[indice];
  const discoExistente = carrinho.find(item => item.id === discoSelecionado.id);
  const precoComFrete = discoSelecionado.preco + discoSelecionado.frete;

  if (discoExistente) {
    discoExistente.quantidade += 1;
    discoExistente.total = discoExistente.quantidade * precoComFrete;
    const index = carrinho.indexOf(discoExistente);
    if (index > -1) {
      carrinho[index] = discoExistente;
    }
  } else {
    discoSelecionado.quantidade = 1;
    discoSelecionado.total = precoComFrete;
    carrinho.push(discoSelecionado);
  }

  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  window.location.href = '../carrinho/index.html';
}

function atualizarQuantidadeCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const totalItens = carrinho.reduce((soma, item) => soma + item.quantidade, 0);
  document.getElementById('quantidade-carrinho').textContent = totalItens;
}

atualizarQuantidadeCarrinho();
window.atualizarQuantidadeCarrinho = atualizarQuantidadeCarrinho;