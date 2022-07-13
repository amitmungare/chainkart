const express = require("express");

const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

module.exports = router;
