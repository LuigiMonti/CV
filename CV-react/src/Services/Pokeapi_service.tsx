// services/pokeService.ts

const FAVORITE_POKEMONS = ['slaking', 'blaziken', 'toucannon', 'garchomp'];

const pokeService = {
  getFavorites: async () => {
    const promises = FAVORITE_POKEMONS.map((name) =>
      fetch(`https://pokeapi.co/api/v2/pokemon/${name}`).then((res) =>
        res.json()
      )
    );
    return Promise.all(promises);
  },
};

export default pokeService;


