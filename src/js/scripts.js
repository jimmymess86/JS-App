let pokemonRepository = (function() {
  let pokemonList = [];

  //url to fetch data of 150 pokemon

  let apiUrl = "https://pokeapi.co/api/v2/pokemon/?limit=150";

  function add(pokemon) {
    // typeof created to display pokemon

    if (typeof pokemon === "object" && "name" in pokemon) {
      pokemonList.push(pokemon);
    } else {
      console.log("pokemon is not correct");
    }
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonList = document.querySelector(".pokemon-list");
    let listPokemon = document.createElement("li");
    let button = document.createElement("button");
    button.innerText = pokemon.name;
    //Bootstraps code has been added to work with buttons on index.html
    button.classList.add(
      "btn",
      "btn-dark",
      "btn-block",
      "button",
      "border",
      "border-secondary"
    );
    listPokemon.classList.add("group-list-item");
    button.setAttribute("data-toggle", "modal");
    button.setAttribute("data-target", "#targetModal");
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);

    // button modified to click and release pokemon info to console.

    button.addEventListener("click", function() {
      showDetails(pokemon);
    });
  }

  // showDetails moved above loadDetails for easier reading

  function showDetails(pokemon) {
    pokemonRepository.loadDetails(pokemon).then(function() {
      showModal(pokemon);
      //console.log(pokemon);
    });
  }

  function loadDetails(item) {
    let url = item.detailsUrl;
    return fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(details) {
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      })
      .catch(function(e) {
        console.error(e);
      });
  }

  let modalContainer = document.querySelector("#targetModal");
  //Boostraps modal JS has been added, with old JS removed.

  function showModal(pokemon) {
    let modalBody = $(".modal-body");
    let modalTitle = $(".modal-title");

    modalTitle.empty();
    modalBody.empty();

    let closeButtonElement = document.createElement("button");
    closeButtonElement.classList.add("modal-close");
    closeButtonElement.innerText = "Close";
    closeButtonElement.addEventListener("click", hideModal);

    let nameElement = $("<h1>" + pokemon.name + "</h1>");

    let heightElement = $("<p>" + "height : " + pokemon.height + "</p>");

    let pokemonTypes = [];
    Object.keys(pokemon.types).forEach(key => {
      pokemonTypes.push(pokemon.types[key].type.name);
    });

    let typesElement = $("<p>" + "types : " + pokemonTypes + "</p>");

    let imageElement = $("<img class='modal-img' style='width:50%'>");
    imageElement.attr("src", pokemon.imageUrl);

    modalTitle.append(nameElement);
    modalBody.append(heightElement);
    modalBody.append(typesElement);
    modalBody.append(imageElement);
  }

  function hideModal() {
    modalContainer.classList.remove("is-visible");
  }

  window.addEventListener("keydown", e => {
    if (e.key === "Escape" && modalContainer.classList.contains("is-visible")) {
      hideModal();
    }
  });
  modalContainer.addEventListener("click", e => {
    // Since this is also triggered when clicking INSIDE the modal
    // We only want to close if the user clicks directly on the overlay

    let target = e.target;
    if (target === modalContainer) {
      hideModal();
    }
  });

  let pokemonSearch = document.querySelector("#filter");

  pokemonSearch.addEventListener("input", function() {
    let pokeListItem = document.querySelectorAll("li");
    let filter = pokemonSearch.value.toUpperCase();

    pokeListItem.forEach(function(pokemon) {
      if (pokemon.innerText.toUpperCase().indexOf(filter) === 0) {
        pokemon.style.display = "block";
      } else {
        pokemon.style.display = "none";
      }
    });
  });

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    loadList: loadList,
    loadDetails: loadDetails,
    showDetails: showDetails,
    showModal: showModal
  };

  function loadList() {
    return fetch(apiUrl)
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        json.results.forEach(function(item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          add(pokemon);
        });
      })
      .catch(function(e) {
        console.error(e);
      });
  }
})();

pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(pokemon) {
    pokemonRepository.addListItem(pokemon);
  });
});
