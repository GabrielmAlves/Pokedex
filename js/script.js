const acharPokemon = async (pokemon) => {
    /*seeking the pokemon inside the API*/ 
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    const dadosPokemon = await API.json() /*turning the data into json*/ 
    return dadosPokemon;
}

acharPokemon(25);