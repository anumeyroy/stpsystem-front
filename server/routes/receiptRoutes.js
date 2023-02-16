const express = require("express");
const { createReceipt } = require("../controllers/receiptController");
const router = express.Router();

router.route("/register").post(createReceipt);

module.exports = router;
