let pokemon = [];
let indice = 0;

async function cargar() {
    for (let i = 1; i <= 12; i++) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
        const data = await res.json();
        pokemon.push(data);
    }
    mostrar();
}

function mostrar() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = "";

    for (let i = indice; i < indice + 3; i++) {
        const p = pokemon[i];
        contenedor.innerHTML += `
            <div>
                <img src="${p.sprites.front_default}">
                <h3>${p.name}</h3>
                <p>ID: ${p.id}</p>
            </div>
        `;
    }
}

function siguiente() {
    if (indice + 3 < pokemon.length) {
        indice += 3;
        mostrar();
    }
}

function anterior() {
    if (indice - 3 >= 0) {
        indice -= 3;
        mostrar();
    }
}

cargar();