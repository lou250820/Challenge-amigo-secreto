let listaAmigos = [];

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();
    
    if (nombre === '') {
        alert('Por favor, ingrese un nombre válido.');
        return;
    }
    
    listaAmigos.push(nombre);
    actualizarLista();
    input.value = '';
}

function actualizarLista() {
    let listaElement = document.getElementById('listaAmigos');
    listaElement.innerHTML = '';
    
    listaAmigos.forEach((nombre) => {
        let li = document.createElement('li');
        li.textContent = nombre;
        listaElement.appendChild(li);
    });
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Agregue al menos un amigo antes de sortear.');
        return;
    }
    
    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];
    
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>El amigo secreto es: <strong>${amigoSecreto}</strong></li>`;
}