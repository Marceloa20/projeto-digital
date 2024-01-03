var produtos = document.getElementById('listaProdutos');

window.addEventListener('load', carregarSite);

function carregarSite() {
    listarProdutos();
}

function listarProdutos() {
    fetch(`https://run.mocky.io/v3/bccaa89c-12ad-43bd-b0ed-9fbed893bddf`)
    .then((response) => response.json())
    .then(data => {
        data.map((bebida) => {
            produtos.innerHTML +=
            `<tr>
                <td>${bebida.id}</td>
                <td>${bebida.marca}</td>
                <td>${bebida.descricao}</td>
                <td>${bebida.preco}</td>
                <td>
                    <i class="fa-solid fa-pen-to-square" style='cursor: pointer'></i>               
                </td>
                <td>
                    <i class="fa-solid fa-trash-can" style='cursor: pointer'></i>
                </td>
            </tr>`
        })
    }) 
}

// Funçao para exluir produtos quando clicar no ícone da lixeira

// Adicionando evento de clique a tabela 
listaProdutos.addEventListener('click', function(event) {
    const elemnetoClicado = event.target;

    //Verificando se o elemento clicado é ícone de lixeira 
    if (elemnetoClicado.classList.contains('fa-trash-can')) {

        //Acessando o elemento pai do ícone (o <td>) e depois o pai desse elemento (o <tr>)
        const linhaParaExcluir = elemnetoClicado.parentNode.parentNode;

        //Removendo a linha da tabela 
        linhaParaExcluir.remove();
    }
});