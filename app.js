// Array para armazenar os nomes dos participantes
let nomes = [];

// Função para adicionar um nome à lista
function adicionarNome() {
    // Captura o valor do campo de input
    const inputNome = document.getElementById('inputNome');
    const nome = inputNome.value.trim();

    // Validação: verifica se o nome está vazio
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }

    // Validação: verifica se o nome já foi adicionado
    if (nomes.includes(nome)) {
        alert('Este nome já foi adicionado.');
        return;
    }

    // Adiciona o nome ao array
    nomes.push(nome);

    // Atualiza a lista na interface
    atualizarLista();

    // Limpa o campo de input
    inputNome.value = '';
}

// Função para atualizar a lista de nomes na interface
function atualizarLista() {
    const listaNomesElemento = document.getElementById('listaAmigos');
    listaNomesElemento.innerHTML = ''; // Limpa a lista atual

    // Adiciona cada nome à lista na interface
    nomes.forEach((nome) => {
        const li = document.createElement('li');
        li.textContent = nome;
        listaNomesElemento.appendChild(li);
    });
}

// Função para sortear um amigo secreto
function sortearAmigoSecreto() {
    // Validação: verifica se há pelo menos dois nomes na lista
    if (nomes.length < 2) {
        alert('Adicione pelo menos dois nomes para realizar o sorteio.');
        return;
    }

    // Sorteia um índice aleatório do array
    const indiceSorteado = Math.floor(Math.random() * nomes.length);
    const nomeSorteado = nomes[indiceSorteado];

    // Exibe o resultado na interface
    const resultadoSorteio = document.getElementById('resultado');
    resultadoSorteio.textContent = `O amigo secreto é: ${nomeSorteado}`;
}
