require("dotenv").config();
const express = require("express");
const app = express();
const path = require("path");
const homeRoutes = require("./routes/home-routes");
const auth = require("./routes/auth");
const adminHome = require("./routes/admin-home");
const cartRoutes = require("./routes/cart-routes");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require("express-flash");
const MongoSessionStore = require("connect-mongodb-session")(session);
const passport = require("passport");

// Database connection
mongoose.connect("mongodb://localhost/foodies", function (err, db) {
  if (err) {
    console.log(
      "Unable to connect to the server. Please start the server. Error:",
      err
    );
  } else {
    console.log("Connected to Server successfully!");
  }
});

//session store
const MongoDBStore = new MongoSessionStore({
  uri: "mongodb://localhost/foodies",
  collection: "sessions",
});

app.use(
  session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    store: MongoDBStore,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
  })
);

// Passport config
const passportInit = require("./config/passport");
passportInit(passport);
app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
//Assets
app.use(express.json());

// set Template engine
app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, "public")));
app.use(homeRoutes.routes);
app.use(auth.routes);
app.use(adminHome.routes);
app.use(cartRoutes.routes);

app.listen(5000, () =>
  console.log("App is listening on url http://localhost:5000")
);
