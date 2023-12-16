var produtos = document.getElementById('listaProdutos')

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
                    <i class="fa-solid fa-pen-to-square"></i>               
                </td>
                <td><i class="fa-solid fa-trash-can"></i></td>
            </tr>`
        })
    }) 
}