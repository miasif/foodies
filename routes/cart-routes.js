const express = require("express");
const session = require("express-session");

const { index, update } = require("../controllers/cartController");
const router = express.Router();

router.get("/cart", index);
router.post("/update-cart", update);

module.exports = {
  routes: router,
};
