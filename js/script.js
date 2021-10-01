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

  return {
    add: add,
    getAll: getAll
  };
})();

// a for loop is added below to list the pokemon on the index.html
// variables for pokemon Height and Name were created
// a special line of code is added to display the largest pokemon (Wow that's big!)
// 10.1.21 pokemonRepository.getAll created to finish IIFE code

pokemonRepository.getAll().forEach(function(pokemon) {
  let pokemonName = pokemon.name;
  let pokemonHeight = pokemon.height;
  if (pokemonHeight >= 1.7) {
      document.write(
      '<p>' +
        pokemonName +
        ' ' +
        '(Height: ' +
        pokemonHeight +
        ')' +
        " - Wow that's big!" +
        '</p>'
    );
  } else {
    document.write(
      '<p>' + pokemonName + ' ' + '(Height: ' + pokemonHeight + ')' + '</p>'
    );
  }
})
