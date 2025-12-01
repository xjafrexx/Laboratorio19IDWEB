async function obtenerSprite() {
  try {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
    const data = await res.json();
    console.log(data.sprites.front_default);
  } catch (err) {
    console.error("Error:", err);
  }
}

obtenerSprite();