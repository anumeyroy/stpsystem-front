const express = require("express");
const { registerStp, fillTanker } = require("../controllers/stpController");
const router = express.Router();

router.route("/register").post(registerStp);
router.route("/fill").post(fillTanker);

module.exports = router;
