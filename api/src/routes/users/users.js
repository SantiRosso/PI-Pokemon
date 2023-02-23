const { Router } = require("express");
const router = Router();
const { getUser } = require("./controllers.js");

router.get("/:id", async (req, res) => {
  try {
    res.send(await getUser(id));
  } catch (error) {
    res.status(500).send(error.message);
  }
});
