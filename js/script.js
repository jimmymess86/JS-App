let pokemonList = [
  {name: "Bulbasur", type: "grass", height: 0.7},
  {name: "Pikachu", type: ["field", "electric"], height: 0.4},
  {name: "Charizard", type: ["monster", "dragon"], height: 1.7,}
]

// a for loop is added below to list the pokemon on the index.html
// a special line of code is added to display the largest pokemon (Wow that's big!)

for (let i = 0; i < pokemonList.length; i++) {
  let pokemonName = pokemonList[i].name;
  let pokemonHeight = pokemonList[i].height;
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
