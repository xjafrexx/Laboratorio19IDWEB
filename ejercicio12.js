async function mostrarStats() {
    const res = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    const data = await res.json();

    console.log("Estadísticas de " + data.name);
    
    for (let i = 0; i < data.stats.length; i++) {
        console.log(data.stats[i].stat.name + ": " + data.stats[i].base_stat);
    }
}

mostrarStats();