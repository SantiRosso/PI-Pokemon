const { Router } = require("express");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemonsRouter = require("./pokemons/pokemons.routes.js");
const typesRouter = require("./types/types.routes.js");
const usersRouter = require("./users/users.routes.js");
const commentsRouter = require("./comments/comments.routes.js");

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use("/pokemons", pokemonsRouter);
router.use("/types", typesRouter);
router.use("/users", usersRouter);
router.use("/comments", commentsRouter);

module.exports = router;
