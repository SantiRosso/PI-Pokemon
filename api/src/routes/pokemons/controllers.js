const axios = require("axios");
const { response } = require("../../app.js");
const { Pokemon, Type } = require("../../db.js");

//api
const getPokemonsApi = async () => {
  try {
    const apiResponse = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=251"
    );
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
const getPokemonsDb = async () => {
  try {
    const pokemonsDb = await Pokemon.findAll();
    return pokemonsDb;
  } catch (error) {
    throw new Error(error);
  }
};

//all pokemons
const getAllPokemons = async () => {
  try {
    const api = await getPokemonsApi();
    const db = await getPokemonsDb();
    return [...api, ...db];
  } catch (error) {
    throw new Error(error);
  }
};

const getPokemonsByName = async (name) => {
  try {
    //db
    const pokemonDb = await Pokemon.findOne({
      where: {
        name: name,
      },
      include: {
        model: Type,
        attributes: ["name"],
        through: {
          attributes: [],
        },
      },
    });
    //api
    if (pokemonDb) {
      return pokemonDb;
    } else {
      const responseApi = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const pokemonApi = responseApi.data;
      return {
        name: pokemonApi.name,
        id: pokemonApi.id,
        types: pokemonApi.types.map((e) => e.type.name),
        image: pokemonApi.sprites.other.home,
      };
    }
  } catch (error) {
    throw new Error("Pokemon not found!");
  }
};

const getPokemonsByIdApi = async (id) => {
  try {
    const responseApi = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${id}`
    );
    const pokemon = responseApi.data;
    return {
      name: pokemon.name,
      id: pokemon.id,
      types: pokemon.types.map((e) => e.type.name),
      image: pokemon.sprites.other.home,
    };
  } catch (error) {
    throw new Error("Pokemon not found!");
  }
};

const getPokemonsByIdDb = async (id) => {
  try {
    const pokemon = await Pokemon.findOne({
      where: {
        id,
      },
    });
    return pokemon;
  } catch (error) {
    throw new Error("Pokemon not found!");
  }
};

const createPokemon = async (
  name,
  hp,
  attack,
  defense,
  speed,
  height,
  weight,
  imgUrl,
  types
) => {
  try {
    if (
      !name ||
      !hp ||
      !attack ||
      !defense ||
      !speed ||
      !height ||
      !weight ||
      !types
    )
      throw new Error("Missing parameters");
    if (!imgUrl)
      imgUrl =
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngwing.com%2Fes%2Fsearch%3Fq%3Dpokeball&psig=AOvVaw1d7X1dHMtjnB2HoQo5Atve&ust=1676919037255000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCJi6l66gov0CFQAAAAAdAAAAABAJ";

    const [pokemon, created] = await Pokemon.findOrCreate({
      where: {
        name: {
          [Op.iLike]: `%${name}%`,
        },
      },
      defaults: {
        name,
        hp,
        attack,
        defense,
        speed,
        height,
        weight,
        imgUrl,
      },
    });

    const typeOrTypes = await Type.findAll({
      where: {
        name: types,
      },
    });

    if (created) {
      throw new Error("This name is already used.");
    } else {
      await pokemon.addType(typeOrTypes);
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  createPokemon,
  getAllPokemons,
  getPokemonsByName,
  getPokemonsByIdApi,
  getPokemonsByIdDb,
};
