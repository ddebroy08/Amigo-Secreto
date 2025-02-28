// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreAmigos = [];


function agregarAmigo() {
    let nombreIngresadoUsuario = document.getElementById('amigo'); // Obtener el input
    let nombreIngresado = nombreIngresadoUsuario.value.trim(); // Obtener el valor y eliminar espacios

    if (nombreIngresado === "") {
        alert("Por favor, inserte un nombre.");
    } else {
        nombreAmigos.push(nombreIngresado);
        console.log(nombreAmigos);
    }

    // Limpiar el campo input después de agregar el nombre
    nombreIngresadoUsuario.value = "";
    actualizarLista();
}

function actualizarLista() {
    // Obtener el elemento UL donde se mostrarán los nombres
    let lista = document.getElementById("listaAmigos");
    // Limpiar la lista antes de volver a llenarla
    lista.innerHTML = "";

    // Recorrer el arreglo y crear elementos <li> para cada amigo
    for (let i = 0; i < nombreAmigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = nombreAmigos[i]; // Asignar el nombre al <li>
        lista.appendChild(li); // Agregar el <li> a la lista
    }
}


function sortearAmigo() {
    let indiceArray = Math.floor(Math.random()*(nombreAmigos.length - 1)+1);
    console.log(indiceArray);
    let ganador =  document.getElementById('resultado');
    ganador.innerHTML = "";

    let li = document.createElement("li");
    li.textContent = nombreAmigos[indiceArray-1]; 
    ganador.appendChild(li);
}



