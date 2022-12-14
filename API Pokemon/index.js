 function fetchPokemon() {
    const url = id => `https://pokeapi.co/api/v2/pokemon/${id}`;

    const pokemonPromises = [];

    for(let i = 1; i <= 150; i++) {
        pokemonPromises.push(fetch(url(i)).then(response => response.json())    )
    }

    Promise.all(pokemonPromises)
    .then(pokemons => {
        
        const lisPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)
            accumulator += `<li>
             <img class='card-image' alt='${pokemon.name}' src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png'>
             
             <p class='card-subtitle'>ID: ${pokemon.id} | Name: ${pokemon.name} | Tipos: ${types.join(' and ')}</p>
             </li>`
            return accumulator
        }, '')
        const ul = document.querySelector('[data-js="pokedex"]');
        ul.innerHTML = lisPokemons;
        console.log(pokemons);
    })
 }
    


fetchPokemon();





