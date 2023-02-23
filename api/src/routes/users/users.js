const { Router } = require("express");
const router = Router();
const { getUser, deleteUser } = require("./controllers.js");

router.get("/:id", async (req, res) => {
  const { id } = req.body;
  try {
    res.send(await getUser(id));
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.body;
  try {
    await deleteUser(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
