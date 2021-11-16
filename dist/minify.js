let pokemonRepository = (function() {
  let e = [],
    t = "https://pokeapi.co/api/v2/pokemon/?limit=150";
  function n(t) {
    "object" == typeof t && "name" in t
      ? e.push(t)
      : console.log("pokemon is not correct");
  }
  function o(e) {
    pokemonRepository.loadDetails(e).then(function() {
      l(e);
    });
  }
  let i = document.querySelector("#targetModal");
  function l(e) {
    let t = $(".modal-body"),
      n = $(".modal-title");
    n.empty(), t.empty();
    let o = document.createElement("button");
    o.classList.add("modal-close"),
      (o.innerText = "Close"),
      o.addEventListener("click", a);
    let i = $("<h1>" + e.name + "</h1>"),
      l = $("<p>height : " + e.height + "</p>"),
      s = [];
    Object.keys(e.types).forEach(t => {
      s.push(e.types[t].type.name);
    });
    let r = $("<p>types : " + s + "</p>"),
      c = $("<img class='modal-img' style='width:50%'>");
    c.attr("src", e.imageUrl),
      n.append(i),
      t.append(l),
      t.append(r),
      t.append(c);
  }
  function a() {
    i.classList.remove("is-visible");
  }
  window.addEventListener("keydown", e => {
    "Escape" === e.key && i.classList.contains("is-visible") && a();
  }),
    i.addEventListener("click", e => {
      e.target === i && a();
    });
  let s = document.querySelector("#filter");
  return (
    s.addEventListener("input", function() {
      let e = document.querySelectorAll("li"),
        t = s.value.toUpperCase();
      e.forEach(function(e) {
        0 === e.innerText.toUpperCase().indexOf(t)
          ? (e.style.display = "block")
          : (e.style.display = "none");
      });
    }),
    {
      add: n,
      getAll: function() {
        return e;
      },
      addListItem: function(e) {
        let t = document.querySelector(".pokemon-list"),
          n = document.createElement("li"),
          i = document.createElement("button");
        (i.innerText = e.name),
          i.classList.add(
            "btn",
            "btn-dark",
            "btn-block",
            "button",
            "border",
            "border-secondary"
          ),
          n.classList.add("group-list-item"),
          i.setAttribute("data-toggle", "modal"),
          i.setAttribute("data-target", "#targetModal"),
          n.appendChild(i),
          t.appendChild(n),
          i.addEventListener("click", function() {
            o(e);
          });
      },
      loadList: function() {
        return fetch(t)
          .then(function(e) {
            return e.json();
          })
          .then(function(e) {
            e.results.forEach(function(e) {
              let t = { name: e.name, detailsUrl: e.url };
              n(t);
            });
          })
          .catch(function(e) {
            console.error(e);
          });
      },
      loadDetails: function(e) {
        let t = e.detailsUrl;
        return fetch(t)
          .then(function(e) {
            return e.json();
          })
          .then(function(t) {
            (e.imageUrl = t.sprites.front_default),
              (e.height = t.height),
              (e.types = t.types);
          })
          .catch(function(e) {
            console.error(e);
          });
      },
      showDetails: o,
      showModal: l
    }
  );
})();
pokemonRepository.loadList().then(function() {
  pokemonRepository.getAll().forEach(function(e) {
    pokemonRepository.addListItem(e);
  });
});
