const jwt = require("jsonwebtoken");

// encore JWT to respect the format seen on jwt.io
const encodeJWT = async (payload) =>
  jwt.sign(payload, process.env.APP_SECRET, { expiresIn: "24h" });

// verify if token is valid and is not corrupted
const decodeJWT = async (token) => jwt.verify(token, process.env.APP_SECRET);

module.exports = { encodeJWT, decodeJWT };
