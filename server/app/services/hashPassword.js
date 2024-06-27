const argon2 = require("argon2");

const hashPassword = async (req, res, next) => {
  const { password } = req.body;

  const hashedPassword = await argon2.hash(password);

  req.body.password = hashedPassword;

  next();
};

module.exports = hashPassword;
