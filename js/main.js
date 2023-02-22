const formulario = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((elemento) => {
    criaItem(elemento);
})

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome'];
    const quantidade = evento.target.elements['quantidade'];

    const existe = itens.find(elemento => elemento.nome === nome.value);
    console.log(existe)

    const item = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    if (existe) {
        item.id = existe.id;

        atualizaItem(item);

        itens[existe.id] = item;
    } else {
        item.id = itens.length;

        criaItem(item);

        itens.push(item);
    }

    localStorage.setItem("itens", JSON.stringify(itens));

    nome.value = "";
    quantidade.value = "";
})

function criaItem(item) {

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    numeroItem.dataset.id = item.id;
    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);

}

function atualizaItem(item) {
    document.querySelector("[data-id='" + item.id + "']").innerHTML = item.quantidade;
    console.log(document.querySelector("[data-id='" + item.id + "']"))
}