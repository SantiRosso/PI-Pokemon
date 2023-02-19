const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const getPokemons = require("./pokemons/pokemons.js");
const getTypes = require("./types/types.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", getPokemons);
router.use("/types", getTypes);
module.exports = router;
