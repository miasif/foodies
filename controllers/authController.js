const User = require("../models/Users");
const bcrypt = require("bcrypt");
const passport = require("passport");

module.exports.login = async (req, res, next) => {
  try {
    res.render("auth/login", {
      editing: false,
      hasError: false,
      createSuccess: req.flash("success", ""),
    });
  } catch (error) {
    req.flash("error", "Something went wrong");
    return res.redirect("auth/login");
  }
};

module.exports.register = async (req, res, next) => {
  try {
    res.render("auth/register", {
      editing: false,
      hasError: false,
      createSuccess: req.flash("success", ""),
    });
  } catch (error) {
    req.flash("error", "Something went wrong");
    return res.redirect("auth/register");
  }
};

module.exports.postRegister = async (req, res, next) => {
  const { name, email, password } = req.body;
  // Validate request
  if (!name || !email || !password) {
    req.flash("error", "All fields are required");
    req.flash("name", name);
    req.flash("email", email);
    return res.redirect("/register");
  }
  // Check if email exists
  User.exists({ email: email }, (err, result) => {
    if (result) {
      req.flash("error", "Email already taken");
      req.flash("name", name);
      req.flash("email", email);

      return res.redirect("/register");
    }
  });
  // Hash password
  const hashedPassword = await bcrypt.hash(password, 10);
  // Create a user
  const user = new User({
    name,
    email,
    password: hashedPassword,
  });
  await user.save();
  return res.redirect("/");
  //login
};

module.exports.postLogin = async (req, res, next) => {
  const user = await User.find().select("role");

  // if (user === "customer") {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      req.flash("error", info.message);
      return next(err);
    }
    if (!user) {
      req.flash("error", info.message);
      return res.redirect("/login");
    }
    req.login(user, (err) => {
      if (err) {
        req.flash("error", info.message);
        return next(err);
      }

      return res.redirect("/admin");
    });
  })(req, res, next);
};
