const express = require("express");

const router = express.Router();

const { add } = require("../../../controllers/userActions");
const validateUser = require("../../../services/validation/userValidation");
const hashPassword = require("../../../services/hashPassword");

router.post("/", validateUser, hashPassword, add);

module.exports = router;
