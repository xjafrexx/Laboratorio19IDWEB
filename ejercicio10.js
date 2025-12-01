async function cargarPokemon() {
  try {
    let html = "";
    
    for (let i = 1; i <= 10; i++) {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await res.json();
      
      html += `
        <div>
          <img src="${data.sprites.front_default}">
          <p>Nombre: ${data.name}</p>
          <p>ID: ${data.id}</p>
        </div>
      `;
    }
    
    document.getElementById("contenedor").innerHTML = html;
  } catch (err) {
    console.error("Error:", err);
  }
}

cargarPokemon();