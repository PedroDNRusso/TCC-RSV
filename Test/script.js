let dados = null;

fetch("dados.json")
  .then(res => res.json())
  .then(json => {
    dados = json.bandas;
    criarMenu(dados);
    const selecionada = localStorage.getItem("bandaSelecionada");
    if (selecionada) mostrarDiscos(selecionada);
  });

function criarMenu(bandas) {
  const menu = document.getElementById("menuBandas");
  bandas.forEach(banda => {
    const btn = document.createElement("button");
    btn.textContent = banda.nome;
    btn.onclick = () => {
      localStorage.setItem("bandaSelecionada", banda.nome);
      mostrarDiscos(banda.nome);
    };
    menu.appendChild(btn);
  });
}

function mostrarDiscos(nomeBanda) {
  const banda = dados.find(b => b.nome === nomeBanda);
  const container = document.getElementById("conteudoDiscos");
  container.innerHTML = `<h2>Discos de ${banda.nome}</h2><div class="cards-container">`;

  banda.discos.forEach(disco => {
    container.innerHTML += `
      <div class="card">
        <img src="${disco.imagem}" alt="${disco.nome}">
        <div class="info">
          <h3>${disco.nome}</h3>
          <p><strong>Ano:</strong> ${disco.ano}</p>
          <button onclick="alert('${disco.descricao.replace(/'/g, "\\'")}')">Ver mais</button>
        </div>
      </div>
    `;
  });

  container.innerHTML += `</div>`;
}
