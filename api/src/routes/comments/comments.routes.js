const { Router } = require("express");
const router = Router();
const { getComments, deleteComment } = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    res.send(await getComments());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.body;
    await deleteComment(id);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
