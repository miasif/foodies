const express = require("express");

const adminController = require("../controllers/adminController");
const router = express.Router();

router.get("/admin", adminController.index);

module.exports = {
  routes: router,
};
