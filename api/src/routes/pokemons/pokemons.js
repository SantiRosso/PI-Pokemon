const { Router } = require("express");
const router = Router();
const {
  getAllPokemons,
  getPokemonsByName,
  getPokemonsByIdDb,
  getPokemonsByIdApi,
} = require("./controllers.js");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      res.send(await getPokemonsByName(name));
    } else {
      res.send(await getAllPokemons());
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    if (id.includes("-")) {
      res.send(await getPokemonsByIdDb(id));
    } else {
      res.send(await getPokemonsByIdApi(id));
    }
  } catch (error) {
    res.status(404).send(error.message);
  }
});

module.exports = router;
