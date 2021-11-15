const express = require("express");

const { index } = require("../controllers/adminController");
const router = express.Router();

router.get("/admin", index);

module.exports = {
  routes: router,
};
