const aleatorio = Math.floor(Math.random() * 898) + 1;

fetch(`https://pokeapi.co/api/v2/pokemon/${aleatorio}`)
  .then(res => res.json())
  .then(data => console.log(data.name))
  .catch(err => console.error("Error:", err));