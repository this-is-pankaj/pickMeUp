const express = require("express");
const { loginController } = require("../controllers/login");
const authRouter = express.Router();

authRouter.post('/login', loginController);
module.exports = authRouter;