const indexView = (req, res, next) => {
  res.render("home");
};

const cart = (req, res, next) => {
  res.render("cart");
};

module.exports = {
  indexView,
  cart,
};
