const express = require("express");
const session = require("express-session");
const cartController = require("../controllers/cartController");
const router = express.Router();

router.get("/cart", cartController.index);
router.post("/update-cart", cartController.update);

module.exports = {
  routes: router,
};
