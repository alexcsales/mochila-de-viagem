const formulario = document.getElementById('novoItem');
const lista = document.getElementById('lista')
const itens = JSON.parse(localStorage.getItem('itens')) || [];

itens.forEach(element => {
    console.log(element.nome, element.quantidade)
});

formulario.addEventListener('submit', (e) => {
    e.preventDefault()

    const nome = e.target.elements['nome'];
    const quantidade = e.target.elements['quantidade'];

    criaItem(nome.value, quantidade.value)

    nome.value = "";
    quantidade.value = "";
})

const criaItem = (nome, quantidade) => {

    const novoItem = document.createElement('li');
    novoItem.classList.add('item');

    const numeroItem = document.createElement('strong');
    numeroItem.innerHTML = quantidade;

    novoItem.appendChild(numeroItem);
    novoItem.innerHTML += nome;

    lista.appendChild(novoItem);

    const Item = {
        'nome': nome,
        'quantidade': quantidade
    };

    itens.push(Item)

    localStorage.setItem('itens', JSON.stringify(itens))
}