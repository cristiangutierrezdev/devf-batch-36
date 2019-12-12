const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController");
const {validateToken} = require('../middleware/validations')

router.use(validateToken)
router.get("/get/user/:userid",validateToken, userController.getUser);
router.post("/create/user", userController.createUser);
router.post('/login/user', userController.loginUser)

module.exports = { router }
