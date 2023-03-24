const { Router } = require("express");
const router = Router();
const {
  getComments,
  deleteComment,
  createComment,
  updateComment,
} = require("./controllers.js");

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

router.post("/", async (req, res) => {
  try {
    const { text, userId } = req.body;
    await createComment(text, userId);
    res.sendStatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { text } = req.body;
    await updateComment(id, text);
    res.sendSatatus(204);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
