function buscarTipos() {
  const nombre = document.getElementById("pokemon").value.toLowerCase();
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
    .then(res => res.json())
    .then(data => {
      const tipos = data.types.map(t => t.type.name).join(", ");
      
      document.getElementById("resultado").innerHTML = `
        <img src="${data.sprites.front_default}">
        <p>Nombre: ${data.name}</p>
        <p>Tipos: ${tipos}</p>
      `;
    })
    .catch(err => console.error("Error:", err));
}
