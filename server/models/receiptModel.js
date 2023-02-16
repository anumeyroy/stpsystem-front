const mongoose = require("mongoose");

const receiptSchema = mongoose.Schema(
	{
		receiptNumber: { type: String },
		date: { type: Date, default: new Date() },
		firstName: { type: String, required: true },
		lastName: { type: String, required: true },
		phone: { type: Number, required: true },
		project: { type: String, required: true },
		projectAddress: { type: String, required: true },
		quantity: { type: Number, required: true },
		stpName: { type: String, required: true },
		isUsed: {
			type: Boolean,
			required: true,
			default: false,
		},
	},
	{ timestamps: true }
);

const Receipt = mongoose.model("Receipt", receiptSchema);

module.exports = Receipt;
