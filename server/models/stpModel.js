const mongoose = require("mongoose");

const stpSchema = mongoose.Schema(
	{
		stpName: { type: String, required: true },
		location: { type: String, required: true },
		latitude: { type: Number, required: true },
		longitude: { type: Number, required: true },
		inchargeName: { type: String, required: true },
		inchargeNumber: { type: Number, required: true },
		stationNumber: { type: Number, required: true },
		openTime: { type: String, required: true },
		closeTime: { type: String, required: true },
	},
	{ timestamps: true }
);

const Stp = mongoose.model("Stp", stpSchema);

const stpFillingSchema = mongoose.Schema(
	{
		tankerNumber: { type: String, required: true },
		quantity: { type: Number, required: true },
		receiptNumber: { type: String, required: true },
		driverName: { type: String, required: true },
		driverNumber: { type: Number, required: true },
		stationNumber: { type: Number, required: true },
		stpName: { type: String, required: true },
		date: { type: Date, default: new Date() },
	},
	{ timestamps: true }
);

const Tankerfill = mongoose.model("Tankerfill", stpFillingSchema);

module.exports = { Stp, Tankerfill };
