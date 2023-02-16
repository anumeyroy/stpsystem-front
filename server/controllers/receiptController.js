const asyncHandler = require("express-async-handler");
const Receipt = require("../models/receiptModel");

const createReceipt = asyncHandler(async (req, res) => {
	const {
		firstName,
		lastName,
		phone,
		project,
		projectAddress,
		quantity,
		stpName,
	} = req.body;

	if (
		!firstName ||
		!lastName ||
		!phone ||
		!project ||
		!projectAddress ||
		!quantity ||
		!stpName
	) {
		res.status(400);
		throw new Error("Please Enter all the Feilds");
	}
	// ===============RECEIPT NUMBER ==============
	const data = await Receipt.find();
	const year = new Date().getFullYear();
	const number = data.length + 1;
	const receiptNumber = `STP/${year}/${number}`;
	// =======================================================
	const receipt = await Receipt.create({
		receiptNumber,
		firstName,
		lastName,
		phone,
		project,
		projectAddress,
		quantity,
		stpName,
	});

	if (receipt) {
		res.status(201).json({
			_id: receipt._id,
			receiptNumber: receipt.receiptNumber,
			date: receipt.date,
			firstName: receipt.firstName,
			lastName: receipt.lastName,
			phone: receipt.phone,
			project: receipt.project,
			projectAddress: receipt.projectAddress,
			quantity: receipt.quantity,
			stpName: receipt.stpName,
		});
	} else {
		res.status(400);
		throw new Error("Stp not found");
	}
});

module.exports = { createReceipt };
