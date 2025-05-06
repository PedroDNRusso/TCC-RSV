function fecharModal() {
  const modal = document.getElementById("detalhes");
  modal.classList.add("oculto");
}

const listaBandas = document.getElementById("listaBandas");
const cardsContainer = document.getElementById("cardsContainer");
    // Vamos pegar os dados do arquivo JSON
    fetch("dados.json")
      .then(response => response.json())
      .then(bandas => {
        // Preenche o menu lateral com as bandas
        bandas.forEach((banda) => {
          const li = document.createElement("li");
          li.textContent = banda.nome;
          li.style.cursor = "pointer"; // Adiciona o estilo de cursor de ponteiro
          li.onclick = () => mostrarDiscos(banda); // Ao clicar na banda, mostra os discos
          listaBandas.appendChild(li);
        });
  
        // Mostra os discos da primeira banda (como padrão)
        if (bandas.length > 0) {
          mostrarDiscos(bandas[0]);
        }
      })
      .catch(error => console.error("Erro ao carregar os dados:", error));
  
    // Função para mostrar os discos de uma banda
    function mostrarDiscos(banda) {
      cardsContainer.innerHTML = ""; // Limpa os discos anteriores
  
      banda.discos.forEach((disco) => {
        const card = document.createElement("div");
        card.classList.add("card"); // Adiciona uma classe para o estilo do card
  
        // Preenche o card com as informações do disco
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
        botao.addEventListener("click", () => mostrarDetalhes(banda.nome, disco));

        cardsContainer.appendChild(card); // Adiciona o card à seção
      });
    };
function mostrarDetalhes(nomeBanda, disco) {
        const nome = document.querySelector('#detalhes .nome p');
        const imagem = document.querySelector('#detalhes img');
        const banda = document.querySelector('#detalhes .banda p');
        const descricao = document.querySelector('#detalhes .descricao p');
        const preco = document.querySelector('#detalhes .preco p');
        const faixas = document.querySelector('#detalhes .faixas p');
        detalhes.classList.remove('oculto');
        nome.innerHTML = disco.nome;
        imagem.src = disco.imagem;
        banda.innerHTML = nomeBanda;
        descricao.innerHTML = disco.descricao;
        preco.innerHTML = `R$ ${disco.preco.toFixed(2)}`;
        faixas.innerHTML = disco.faixas;

        detalhes.classList.remove('oculto');
}

  