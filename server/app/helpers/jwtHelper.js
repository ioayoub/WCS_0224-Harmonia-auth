const jwt = require("jsonwebtoken");

const encodeJWT = (payload) =>
  jwt.sign(payload, process.env.APP_SECRET, { expiresIn: "24h" });

const decodeJWT = (token) => jwt.verify(token, process.env.APP_SECRET);

module.exports = { encodeJWT, decodeJWT };
