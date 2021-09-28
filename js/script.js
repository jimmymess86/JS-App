let pokemonList = [
  {name: "Bulbasur", type: "grass", height: 0.7},
  {name: "Pikachu", type: ["field", "electric"], height: 0.4},
  {name: "Charizard", type: ["monster", "dragon"], height: 1.7,}
]

// a for loop is added below to list the pokemon on the index.html
// variables for pokemon Height and Name were created
// a special line of code is added to display the largest pokemon (Wow that's big!)

// Use a forEach() function instead of the for loop you have to iterate over the Pokémon in your pokemonList array in order to print the details of each one
pokemonList.forEach(function(pokemon) {
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
}
