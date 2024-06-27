const tables = require("../../database/tables");

const argon2 = require("argon2");
const { encodeJWT } = require("../helpers/jwtHelper");

const login = async (req, res) => {
  const { email, password } = req.body;

  const [user] = await tables.user.findUserByEmail(email);

  //   if (!user) {
  //     return res.status(404).json({
  //       message: "Le couple email/mot de passe est incorrect",
  //     });
  //   }

  const isAllowed = await argon2.verify(user.password, password);

  //   if (!isAllowed) {
  //     return res.status(404).json({
  //       message: "Le couple email/mot de passe est incorrect",
  //     });
  //   }

  delete user.password;

  const token = encodeJWT(user);

  res.cookie("auth_token", token, { httpOnly: true, secure: false });

  //   res.status(200).message({
  //     message: "Vous êtes connecté",
  //   });
  res.send("Vous êtes connecté");
};

const logout = (req, res) => {
  res.clearCookie("auth").sendStatus(200);
};

module.exports = { login, logout };
