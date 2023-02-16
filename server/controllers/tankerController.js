const asyncHandler = require("express-async-handler");
const Tanker = require("../models/tankerModel");

const registerTanker = asyncHandler(async (req, res) => {
	const { tankerNumber, quantity, ownerName, phone, tankerCompony, stpName } =
		req.body;

	if (
		!tankerNumber ||
		!quantity ||
		!ownerName ||
		!phone ||
		!tankerCompony ||
		!stpName
	) {
		res.status(400);
		throw new Error("Please Enter all the Feilds");
	}

	const tankerExists = await Tanker.findOne({ tankerNumber });

	if (tankerExists) {
		res.status(400);
		throw new Error("Tanker already exists");
	}
	const tanker = await Tanker.create({
		tankerNumber,
		quantity,
		ownerName,
		phone,
		tankerCompony,
		stpName,
	});

	if (tanker) {
		res.status(201).json({
			_id: tanker._id,
			tankerNumber: tanker.tankerNumber,
			quantity: tanker.quantity,
			ownerName: tanker.ownerName,
			phone: tanker.phone,
			tankerCompony: tanker.tankerCompony,
			stpName: tanker.stpName,
		});
	} else {
		res.status(400);
		throw new Error("Stp not found");
	}
});

const authUser = asyncHandler(async (req, res) => {
	const { tankerNumber, password } = req.body;

	const tanker = await Tanker.findOne({ tankerNumber });

	if (tanker && tanker.password === password) {
		res.json({
			_id: tanker._id,
			tankerNumber: tanker.tankerNumber,
			quantity: tanker.quantity,
			ownerName: tanker.ownerName,
			phone: tanker.phone,
			tankerCompony: tanker.tankerCompony,
			stpName: tanker.stpName,
		});
	} else {
		res.status(401);
		throw new Error("Invalid UserId or Password");
	}
});
module.exports = { registerTanker, authUser };
