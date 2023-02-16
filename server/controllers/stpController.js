const asyncHandler = require("express-async-handler");
const { Stp, Tankerfill } = require("../models/stpModel");

const registerStp = asyncHandler(async (req, res) => {
	const {
		stpName,
		location,
		latitude,
		longitude,
		inchargeName,
		inchargeNumber,
		stationNumber,
		openTime,
		closeTime,
	} = req.body;

	if (
		!stpName ||
		!location ||
		!latitude ||
		!longitude ||
		!inchargeName ||
		!inchargeNumber ||
		!stationNumber ||
		!openTime ||
		!closeTime
	) {
		res.status(400);
		throw new Error("Please Enter all the Feilds");
	}

	const stpExists = await Stp.findOne({ stpName });

	if (stpExists) {
		res.status(400);
		throw new Error("Stp already exists");
	}
	const stp = await Stp.create({
		stpName,
		location,
		latitude,
		longitude,
		inchargeName,
		inchargeNumber,
		stationNumber,
		openTime,
		closeTime,
	});

	if (stp) {
		res.status(201).json({
			_id: stp._id,
			stpName: stp.stpName,
			location: stp.location,
			latitude: stp.latitude,
			longitude: stp.longitude,
			inchargeName: stp.inchargeName,
			inchargeNumber: stp.inchargeNumber,
			stationNumber: stp.stationNumber,
			openTime: stp.openTime,
			closeTime: stp.closeTime,
		});
	} else {
		res.status(400);
		throw new Error("Stp not found");
	}
});

const fillTanker = asyncHandler(async (req, res) => {
	const {
		tankerNumber,
		quantity,
		receiptNumber,
		driverName,
		driverNumber,
		stationNumber,
		stpName,
	} = req.body;

	if (
		!tankerNumber ||
		!quantity ||
		!receiptNumber ||
		!driverName ||
		!driverNumber ||
		!stationNumber ||
		!stpName
	) {
		res.status(400);
		throw new Error("Please Enter all the Feilds");
	}

	const receiptExists = await Tankerfill.findOne({ receiptNumber });

	if (receiptExists) {
		res.status(400);
		throw new Error("Receipt already exists");
	}
	const stpfilling = await Tankerfill.create({
		tankerNumber,
		quantity,
		receiptNumber,
		driverName,
		driverNumber,
		stationNumber,
		stpName,
	});

	if (stpfilling) {
		res.status(201).json({
			_id: stpfilling._id,
			tankerNumber: stpfilling.tankerNumber,
			quantity: stpfilling.quantity,
			receiptNumber: stpfilling.receiptNumber,
			driverName: stpfilling.driverName,
			driverNumber: stpfilling.driverNumber,
			stationNumber: stpfilling.stationNumber,
			stpName: stpfilling.stpName,
			date: stpfilling.date,
		});
	} else {
		res.status(400);
		throw new Error("Receipt not found");
	}
});
module.exports = { registerStp, fillTanker };
