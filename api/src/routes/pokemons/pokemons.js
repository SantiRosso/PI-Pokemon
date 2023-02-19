const { Router } = require("express");
const router = Router();
const { getAllPokemons, getPokemonsByName } = require("./controllers.js");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      res.send(await getPokemonsByName(name));
    } else {
      res.send(await getAllPokemons());
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
