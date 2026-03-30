let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function mostrarProdutos(lista = produtos) {
    let listaHTML = document.getElementById("lista-produtos");
    listaHTML.innerHTML = "";

    lista.forEach(produto => {
        let div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p><strong>Contato:</strong> ${produto.contato}</p>
        `;

        listaHTML.appendChild(div);
    });
}

function filtrarProdutos() {
    let busca = document.getElementById("busca").value.toLowerCase();

    let filtrados = produtos.filter(produto =>
        produto.nome.toLowerCase().includes(busca) ||
        produto.descricao.toLowerCase().includes(busca)
    );

    mostrarProdutos(filtrados);
}

mostrarProdutos();
