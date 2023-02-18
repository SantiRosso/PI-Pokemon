const axios = require("axios");

const getPokemons = async () => {
  try {
    const apiResponse = await axios.get("https://pokeapi.co/api/v2/pokemon");
    const allPokemons = apiResponse.data.results;
    const pokemonsDetails = await Promise.all(
      allPokemons.map(async (e) => {
        const result = await axios.get(e.url);
        return {
          name: result.data.name,
          id: result.data.id,
          types: result.data.types.map((e) => e.type.name),
          image: result.data.sprites.other.home,
        };
      })
    );
    return pokemonsDetails;
  } catch (error) {
    throw new Error(error);
  }
};

const getPokemonsByName = () => {};

module.exports = { getPokemons, getPokemonsByName };
