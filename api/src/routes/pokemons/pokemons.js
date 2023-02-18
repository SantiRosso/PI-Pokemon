const { Router } = require("express");
const router = Router();
const { getPokemonsApi, getPokemonsByName } = require("./controllers.js");

router.get("/", async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      res.send(await getPokemonsByName(name));
    } else {
      res.send(await getPokemonsApi());
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
