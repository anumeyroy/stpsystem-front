const express = require("express");
const { registerTanker, authUser } = require("../controllers/tankerController");
const router = express.Router();

router.route("/register").post(registerTanker);
router.post("/login", authUser);

module.exports = router;
