const express = require("express");

const { login, register } = require("../controllers/authController");
const router = express.Router();

router.get("/login", login);
router.get("/register", register);

module.exports = {
  routes: router,
};
