const express = require("express");

const router = express.Router();

const { login, logout } = require("../../../controllers/authController");
const validateAuth = require("../../../services/validation/authValidation");

router.post("/login", validateAuth, login);

router.get("/logout", logout);

module.exports = router;
