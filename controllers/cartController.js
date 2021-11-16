const { json } = require("express");

// Get view
module.exports.index = async (req, res) => {
  try {
    let message = req.flash("error");
    if (message.length > 0) {
      message = message[0];
    } else {
      message = null;
    }
    res.render("cart", {
      editing: false,
      hasError: false,
      errorMessage: message,
      validationErrors: [],
      createSuccess: req.flash("success", ""),
      adminInfo: req.session.admin,
    });
  } catch (error) {
    req.flash("error", "Something went wrong");
    return res.redirect("cart");
  }
};

module.exports.update = async (req, res) => {
  if (!req.session.cart) {
    req.session.cart = {
      items: {},
      totalQty: 0,
      totalPrice: 0,
    };
  }

  let cart = req.session.cart;
  console.log(req.body);
  return res.json({ data: "All ok" });
};

// // Get view
// module.exports.update = async (req, res) => {
//   try {
//     let message = req.flash("error");
//     if (message.length > 0) {
//       message = message[0];
//     } else {
//       message = null;
//     }
//     if (!req.session.cart) {
//       req.session.cart = {
//         items: {},
//         totalQty: 0,
//         totalPrice: 0,
//       };
//     }
//     let cart = req.session.cart;
//     if (!cart.items[req.body._id]) {
//       cart.items[req.body._id] = {
//         item: req.body,
//         qty: 1,
//       };
//       cart.totalQty = cart.totalQty + 1;
//       cart.totalPrice = parseInt(cart.totalPrice) + parseInt(req.body.price);
//     } else {
//       cart.items[req.body._id].qty = cart.items[req.body._id].qty + 1;
//       cart.totalQty = cart.totalQty + 1;
//       cart.totalPrice = cart.totalPrice + parseInt(req.body.price);
//     }
//     return res.json({ totalQty: req.session.cart.totalQty });

//     // res.render("cart", {
//     //   editing: false,
//     //   hasError: false,
//     //   errorMessage: message,
//     //   validationErrors: [],
//     //   createSuccess: req.flash("success", ""),
//     //   adminInfo: req.session.admin,
//     // });
//   } catch (error) {
//     req.flash("error", "Something went wrong");
//     return res.redirect("cart");
//   }
// };
