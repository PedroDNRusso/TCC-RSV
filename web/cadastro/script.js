const main = document.querySelector('main');
var discos = [];

fetch("disco.json")
    .then(response => response.json())
    .then(data => {
        discos = data;
    }).
    then(() => {
        exibirCards();
    });

function exibirCards() {
    discos.forEach((disco) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <img src="${disco.imagem}" alt="${disco.nome}">
            <h2>${disco.nome}</h2>
            <p>${disco.artista}</p>
            <p>${disco.ano}</p>
            <p>R$${disco.preco.toFixed(2)}</p>
        `;
        main.appendChild(card);
    });
}
