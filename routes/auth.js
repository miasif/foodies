const express = require("express");

const authController = require("../controllers/authController");
const router = express.Router();

router.get("/login", authController.login);
router.post("/login", authController.postLogin);

router.get("/register", authController.register);
router.post("/register", authController.postRegister);

module.exports = {
  routes: router,
};
