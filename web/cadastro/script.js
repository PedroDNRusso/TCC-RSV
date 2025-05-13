const uri = 'http://localhost:3000';
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

function cadastrar(){
const form = document.querySelector('#cadastro form');
form.addEventListener('submit', e => {
    e.preventDefault()
    const dados = {
        nome: form.nome.value,
        email: form.email.value,
        senha: form.senha.value,
    }
    fetch('http://localhost:3000/cadastro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(dados)
    })
        .then(resp => resp.status)
        .then(resp => {
            if (resp == 201)
                alert('Cadastro feito com sucesso!');
            else
                alert('Erro ao cadastrar!');
                window.location.reload();
        })
})
}