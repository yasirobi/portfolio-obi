const expressJwt = require("express-jwt");
require("dotenv").config({ path: "./config/.env" });

//protecting the route
exports.requireSignin = expressJwt({
    secret: process.env.JWT_TOKEN,
    algorithms: ['HS256'], // added later
    userProperty: "auth",
  });