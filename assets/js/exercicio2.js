var nomes = [];

function adicionarNome(){
    let nome = document.getElementById('nome').value;
    nomes.push(nome);
    console.log(nome);
    listarNomes(nome);
    document.getElementById('nome').value = "";
}

function listarNomes(nome){
    var ol = document.querySelector('#listarNomes');
    nomes.forEach(function (item, index) {
        ol.innerHTML = '<li>' + nome + '</li>';
    });
}