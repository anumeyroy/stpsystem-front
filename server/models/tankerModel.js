const mongoose = require("mongoose");

const tankerSchema = mongoose.Schema(
	{
		tankerNumber: { type: String, required: true, unique: true },
		quantity: { type: Number, required: true },
		ownerName: { type: String, required: true },
		phone: { type: Number, required: true },
		tankerCompony: { type: String, required: true },
		stpName: { type: String, required: true },
		password: { type: String, default: "Admin@123" },
	},
	{ timestamps: true }
);

const Tanker = mongoose.model("Tanker", tankerSchema);

module.exports = Tanker;
