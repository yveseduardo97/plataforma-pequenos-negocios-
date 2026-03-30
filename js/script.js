let produtos = JSON.parse(localStorage.getItem("produtos")) || [];

function mostrarProdutos() {
    let lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";

    produtos.forEach(produto => {
        let div = document.createElement("div");
        div.classList.add("card");

        div.innerHTML = `
            <h3>${produto.nome}</h3>
            <p>${produto.descricao}</p>
            <p><strong>Contato:</strong> ${produto.contato}</p>
        `;

        lista.appendChild(div);
    });
}

mostrarProdutos();
