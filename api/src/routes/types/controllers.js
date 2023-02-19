const { Type } = require("../../db.js");
const axios = require("axios");

const getTypes = async () => {
  try {
    const typesDb = await Type.findAll();

    if (typesDb.length) {
      return typesDb;
    } else {
      const apiResponse = await axios.get("https://pokeapi.co/api/v2/type");
      const allTypes = apiResponse.data.results;
      allTypes.forEach(async (e) => {
        await Type.findOrCreate({
          where: {
            name: e.name,
          },
        });
      });
      const types = await Type.findAll();
      return types;
    }
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = { getTypes };
