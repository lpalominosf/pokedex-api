const form = document.getElementById('search-poke');
const searchPokemon = document.getElementById('search-pokemon');
const pokeContainer = document.getElementById('poke-container');
let pokemonSearch;
form.addEventListener('submit', function(e) {
  e.preventDefault();
  pokeContainer.innerHTML = '';
  pokemonSearched = searchPokemon.value;
  getPokemon();
});

function getPokemon() {
  const pokemonRequest = new XMLHttpRequest();
  pokemonRequest.open('GET', `https://pokeapi.co/api/v2/pokemon/${pokemonSearched}?limit=20&offset=20`);
  pokemonRequest.onload = addPokemon;
  pokemonRequest.onerror = error;
  pokemonRequest.send();
}

function error() {
  console.log('Se ha presentado un error');
}

function addPokemon() {
  const data = JSON.parse(this.responseText);
  console.log(data);
}

function addPokemon() {
  const data = JSON.parse(this.responseText);
  const response = data.response;
  console.log(data);
}

