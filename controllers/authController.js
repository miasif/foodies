const login = (req, res, next) => {
  res.render("auth/login");
};
const register = (req, res, next) => {
  res.render("auth/register");
};

module.exports = {
  login,
  register,
};
