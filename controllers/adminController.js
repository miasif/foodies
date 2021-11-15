const index = (req, res, next) => {
  res.render("admin/admin_home");
};

module.exports = {
  index,
};
