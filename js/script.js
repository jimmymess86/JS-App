let pokemonRepository = (function () {
  // create a new variable with pokemonRepository to hold what IIFE will return

let pokemonList = [
  {
    name: "Bulbasur",
    type: "grass",
    height: 0.7
  },
  {
    name: "Pikachu",
    type: ["field", "electric"],
    height: 0.4
  },
  {
    name: "Charizard",
    type: ["monster", "dragon"],
    height: 1.7
  }
]

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon){
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    button.classList.add("button-class");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    addEventListener(button, pokemon);
  }

  function showDetails(pokemon) {
    console.log(pokemon);
    }

  // addEventListener to the created button. 10.4.21

  function addEventListener(button, pokemon) {
    button.addEventListener('click', function() {
      showDetails(pokemon.name);
    });
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();

// a for loop is added below to list the pokemon on the index.html
// variables for pokemon Height and Name were created
// a special line of code is added to display the largest pokemon (Wow that's big!)
// 10.1.21 pokemonRepository.getAll created to finish IIFE code

pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
