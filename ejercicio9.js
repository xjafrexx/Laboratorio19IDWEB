function buscar() {
  const id = document.getElementById("pokemonId").value;
  
  fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then(res => res.json())
    .then(data => {
      const habilidades = data.abilities.map(a => a.ability.name).join(", ");
      
      document.getElementById("resultado").innerHTML = `
        <img src="${data.sprites.front_default}">
        <p>Nombre: ${data.name}</p>
        <p>ID: ${data.id}</p>
        <p>Peso: ${data.weight}</p>
        <p>Altura: ${data.height}</p>
        <p>Habilidades: ${habilidades}</p>
      `;
    })
    .catch(err => console.error("Error:", err));
}