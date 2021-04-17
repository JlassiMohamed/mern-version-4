const express = require("express");
const router = express.Router();

const { SignUp, SignIn } = require("../controllers/user");
const isAuth = require("../middlewares/auth_jwt");
const { registerValidation, validation, signinValidation } = require("../middlewares/user");


router.post("/signup", registerValidation(), validation, SignUp);

router.post("/signin", signinValidation(), validation, SignIn);

router.get("/current", isAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
