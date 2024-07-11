const express = require("express");
const { userController } = require("../controller");
const route = express.Router();

route.post("/userRegister", userController.userRegister)

module.exports = route;