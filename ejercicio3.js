const id = prompt("Ingresa el ID del Pokémon:");

fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  .then(res => res.json())
  .then(data => console.log(data.name))
  .catch(err => console.error("Error:", err));