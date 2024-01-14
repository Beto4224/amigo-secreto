let listaAmigos = [];
let listaSorteados = [];

function adicionar(){
    let amigo = document.getElementById('nome-amigo').value.toUpperCase();

    if(amigo == ''){
        alert('Nome inválido');
        return;
    }

    if(listaAmigos.includes(amigo)){
        alert(`Amigo com mesmo nome já adicionado, por favor diferencie ${amigo}!`);
        return;
    }
    let lista = document.getElementById('lista-amigos');
    listaAmigos.push(amigo);
    document.getElementById('nome-amigo').value = '';
    
    if (lista.textContent == '') {
        lista.textContent = amigo;
    } else {
        lista.textContent += ', ' + amigo; 
    }
}

function sortear () {
    if (listaAmigos.length <= 2){
        alert('Por favor adicione mais amigos');
        return;
    }
    let listaSorteio = document.getElementById('lista-sorteio');
    for(i=0; i<listaAmigos.length; i++){
        let numero = sortearNumero();
        if (i == listaAmigos.length-1 && numero == i){
            listaSorteados = [];
            listaSorteio.innerHTML = '';
            sortear();
        } else{
            while (numero == i){
                numero = sortearNumero();
            }
            listaSorteados.push(numero);
            listaSorteio.innerHTML += `${listaAmigos[i]} ---> ${listaAmigos[listaSorteados[i]]} <br>`;
        }
    }
}

function reiniciar (){
    listaAmigos = [];
    listaSorteados = [];
    document.getElementById('lista-sorteio').innerText = '';
    document.getElementById('lista-amigos').innerText = '';

}

function sortearNumero () {
    let numeroSorteado = parseInt(Math.random()*listaAmigos.length);
    if (listaSorteados.includes(numeroSorteado)){
        return sortearNumero();
    } else {
        return numeroSorteado;
    } 
}