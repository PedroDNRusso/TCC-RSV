const tbody = document.querySelector("tbody");
var carrinho = JSON.parse(localStorage.getItem('carrinho'));
if (carrinho == null) {
    carrinho = [];
} else {
    exibirCarrinho();
}

function exibirCarrinho() {
    tbody.innerHTML = ""; // Limpa o conteúdo atual do tbody
    let total = 0; // Inicializa a variável total
    carrinho.forEach((disco, indice) => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td><img src='${disco.imagem}' alt="Capa do disco"></td>
            <td>${disco.nome}</td>
            <td>R$ ${disco.preco.toFixed(2)}</td>
            <td>R$ ${disco.frete.toFixed(2)}</td>
            <td>
                <button onclick='add(${indice})'>+</button>
                <input type='number' value='${disco.quantidade}' disabled>
                <button onclick='sub(${indice})'>-</button>
            </td>
            <td>R$ ${disco.total.toFixed(2)}</td>
        `;
        tbody.appendChild(tr);
        total += disco.total; // Adiciona o preço do produto ao total
    });

    const trTotal = document.createElement('tr');
    trTotal.innerHTML = `
        <td colspan="6">Total</td>
        <td>R$ ${total.toFixed(2)}</td>
    `;
    tbody.appendChild(trTotal);

    const trEnviar = document.createElement('tr');
    trEnviar.innerHTML = `
        <td colspan="7"><button onclick='enviarPedido()'>Enviar Pedido</button></td>
    `;
    tbody.appendChild(trEnviar);
}

function add(indice) {
    const disco = carrinho[indice];
    disco.quantidade += 1;
    disco.total = disco.quantidade * (disco.preco + disco.frete); // Atualiza o total

    // Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Re-exibe o carrinho com a quantidade atualizada
    exibirCarrinho();
}

function sub(indice) {
    const disco = carrinho[indice];
    disco.quantidade -= 1; // Subtrai 1

    if (disco.quantidade <= 0) {
        // Remove o item do carrinho
        carrinho.splice(indice, 1);
    } else {
        // Atualiza o total normalmente
        disco.total = disco.quantidade * (disco.preco + disco.frete);
    }

    // Atualiza o carrinho no localStorage
    localStorage.setItem('carrinho', JSON.stringify(carrinho));

    // Re-exibe o carrinho com a quantidade atualizada
    exibirCarrinho();
}


function enviarPedido() {
    // Lógica para enviar o pedido (exemplo simples)
    alert("Pedido enviado com sucesso!");

    // Limpa o carrinho no localStorage
    localStorage.removeItem('carrinho');

    // Atualiza a interface para refletir que o carrinho foi limpo
    carrinho = []; // Zera o array do carrinho
    exibirCarrinho(); // Atualiza a exibição do carrinho (agora vazio)
}
