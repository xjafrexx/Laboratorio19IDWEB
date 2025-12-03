async function buscar() {
    const input = document.getElementById("pokemon").value.toLowerCase();
    const resultado = document.getElementById("resultado");

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
        const data = await res.json();

        let html = `<h2>${data.name}</h2><ul>`;
        
        for (let i = 0; i < data.stats.length; i++) {
            html += `<li>${data.stats[i].stat.name}: ${data.stats[i].base_stat}</li>`;
        }
        
        html += `</ul>`;
        resultado.innerHTML = html;

    } catch (error) {
        resultado.innerHTML = `<p>Pokémon no encontrado</p>`;
    }
}