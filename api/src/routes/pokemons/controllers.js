const axios = require("axios");
const { Pokemon } = require("../../db.js");

//api
const getPokemonsApi = async () => {
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

//db
const getPokemonsDb = () => {};

//all pokemons
const getAllPokemons = async () => {
  const api = await getPokemonsApi();
  const db = await getPokemonsDb();
  return [...api, ...db];
};

const getPokemonsByName = async (name) => {
  try {
    //db
    const pokemonDb = await Pokemon.findOne({
      where: {
        name: name,
      },
    });

    if (pokemonDb) {
      return pokemonDb;
    } else {
      //api
      const result = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const pokemonApi = result.data;
      return {
        name: pokemonApi.name,
        id: pokemonApi.id,
        types: pokemonApi.types.map((e) => e.type.name),
        image: pokemonApi.sprites.other.home,
      };
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getAllPokemons, getPokemonsByName };
