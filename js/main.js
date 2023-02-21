const formulario = document.getElementById('novoItem');
const lista = document.getElementById('lista');
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach((elemento) => {
    criaItem(elemento)
})

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault()

    const nome = evento.target.elements['nome']
    const quantidade = evento.target.elements['quantidade']

    const item = {
        "nome": nome.value,
        "quantidade": quantidade.value
    }

    criaItem(item)

    itens.push(item)

    localStorage.setItem("itens", JSON.stringify(itens))

    nome.value = ""
    quantidade.value = ""
})

function criaItem(item) {

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = item.quantidade;
    novoItem.appendChild(numeroItem);

    novoItem.innerHTML += item.nome;

    lista.appendChild(novoItem);

}