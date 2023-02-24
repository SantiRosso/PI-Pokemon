const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require("./pokemons/pokemons.js");
const typesRouter = require("./types/types.js");
const usersRouter = require("./users/users.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);
router.use("/users", usersRouter);

module.exports = router;
