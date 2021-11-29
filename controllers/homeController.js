const Menu = require("../models/menu");

//   res.render("home");
// };

// module.exports = {
//   indexView,
// };

// Get view
module.exports.indexView = async (req, res) => {
  try {
    let message = req.flash("error");
    if (message.length > 0) {
      message = message[0];
    } else {
      message = null;
    }
    const foods = await Menu.find();
    res.render("home", {
      editing: false,
      hasError: false,
      errorMessage: message,
      createSuccess: req.flash("success", ""),
      foods,
      user: req?.session?.customer,
    });
  } catch (error) {
    req.flash("error", "Something went wrong");
    return res.redirect("home");
  }
};
