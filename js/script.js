const nomePokemon = document.querySelector('.nomePoke');
const numeroPokemon = document.querySelector('.numeroPoke');
const imagemPokemon = document.querySelector('.imagemPoke');

const acharPokemon = async (pokemon) => {
    /*seeking the pokemon inside the API*/ 
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    const dadosPokemon = await API.json() /*turning the data into json*/ 
    return dadosPokemon;
}

const renderizaPoke = async (pokemon) => {

    const dados = await acharPokemon(pokemon);

    numeroPokemon.innerHTML = dados.id;
    nomePokemon.innerHTML = dados.name;
    imagemPokemon.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
}

renderizaPoke('7');