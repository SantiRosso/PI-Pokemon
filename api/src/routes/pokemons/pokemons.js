const { Router } = require("express");
const router = Router();
const { getPokemons, getPokemonsByName } = require("./controllers.js");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      res.send(await getPokemonsByName());
    } else {
      res.send(await getPokemons());
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
