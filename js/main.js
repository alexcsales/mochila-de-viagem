const formulario = document.getElementById('novoItem');
const lista = document.getElementById('lista')

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = e.target.elements['nome'].value;
    const quantidade = e.target.elements['quantidade'].value;

    criaItem(nome, quantidade)

    nome = '';
    quantidade = '';
})

const criaItem = (nome, quantidade) => {

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);
    console.log(lista)
}