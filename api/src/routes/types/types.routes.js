const { Router } = require("express");
const router = Router();
const { getTypes } = require("./controllers.js");

router.get("/", async (req, res) => {
  try {
    res.send(await getTypes());
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
