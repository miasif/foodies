// Get view
module.exports.index = async (req, res) => {
  try {
    let message = req.flash("error");
    if (message.length > 0) {
      message = message[0];
    } else {
      message = null;
    }
    res.render("admin/admin_home", {
      editing: false,
      hasError: false,
      errorMessage: message,
      validationErrors: [],
      createSuccess: req.flash("success", ""),
      adminInfo: req.session.admin,
    });
  } catch (error) {
    req.flash("error", "Something went wrong");
    return res.redirect("admin/admin_home");
  }
};
