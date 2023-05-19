const nomePokemon = document.querySelector('.nomePoke');
const numeroPokemon = document.querySelector('.numeroPoke');
const imagemPokemon = document.querySelector('.imagemPoke');
const proximo = document.querySelector('.btnProximo');
const anterior = document.querySelector('.btnAnterior');
const shiny = document.querySelector('.btnShiny');
const form = document.querySelector('.form');
const input = document.querySelector('.inputForm');

let atual = 1;

const acharPokemon = async (pokemon) => {
    /*seeking the pokemon inside the API*/ 
    const API = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    
    if(API.status === 200){
        const dadosPokemon = await API.json() /*turning the data into json*/ 
        return dadosPokemon;
    }else{
        imagemPokemon.src = '';
        atual = 1;
        nomePokemon.innerHTML = 'Não encontrado!';
    }
}

const renderizaPoke = async (pokemon) => {
    nomePokemon.innerHTML = 'Procurando...';
    numeroPokemon.innerHTML = '';
    const dados = await acharPokemon(pokemon);

    if(dados){
        numeroPokemon.innerHTML = dados.id;
        nomePokemon.innerHTML = dados.name;
        atual = dados.id;
        imagemPokemon.src = dados['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value= '';
    }
}

form.addEventListener('submit', (event) => {
    event.preventDefault();
    inputEnviado = input.value; 
    renderizaPoke(inputEnviado.toLowerCase());
    console.log(inputEnviado);
    input.value= '';
});

proximo.addEventListener('click', () => {
   var audio = document.getElementById('meuAudio');
   audio.play();
   atual++;
   renderizaPoke(atual);
   
});

anterior.addEventListener('click', () => {
    if(atual > 1){
    var audio = document.getElementById('meuAudio');
    audio.play();
    atual--;
    renderizaPoke(atual);
    }else{
        alert('Não existe o Pokémon anterior!');
    }
});

shiny.addEventListener('click', () => {
    alert('Funcionalidade em desenvolvimento!!');
});


renderizaPoke(atual);