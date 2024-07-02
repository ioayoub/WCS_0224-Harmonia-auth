const express = require("express");

const router = express.Router();

const {
  login,
  logout,
  checkAuth,
} = require("../../../controllers/authActions");
const validateAuth = require("../../../services/validation/authValidation");

router.post("/login", validateAuth, login);

router.get("/checkauth", checkAuth);

router.get("/logout", logout);

module.exports = router;
