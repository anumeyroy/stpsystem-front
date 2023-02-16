const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const registerUser = asyncHandler(async (req, res) => {
	const { firstName, lastName, email, phone, stpName } = req.body;

	if (!firstName || !lastName || !email || !phone || !stpName) {
		res.status(400);
		throw new Error("Please Enter all the Feilds");
	}

	const userExists = await User.findOne({ phone });
	const emailExists = await User.findOne({ email });

	if (userExists) {
		res.status(400);
		throw new Error("UserId already exists");
	} else if (emailExists) {
		res.status(400);
		throw new Error("Email already exists");
	}

	const user = await User.create({
		firstName,
		lastName,
		email,
		phone,
		stpName,
	});

	if (user) {
		res.status(201).json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			phone: user.phone,
			stpName: user.stpName,
		});
	} else {
		res.status(400);
		throw new Error("User not found");
	}
});

const authUser = asyncHandler(async (req, res) => {
	const { phone, password } = req.body;

	const user = await User.findOne({ phone });

	if (user && user.password === password) {
		res.json({
			_id: user._id,
			firstName: user.firstName,
			lastName: user.lastName,
			email: user.email,
			phone: user.phone,
			stpName: user.stpName,
			isAdmin: user.isAdmin,
		});
	} else {
		res.status(401);
		throw new Error("Invalid UserId or Password");
	}
});

const changePass = asyncHandler(async (req, res) => {
	const { user, password } = req.body;

	const updatedUser = await User.findByIdAndUpdate(
		user,
		{
			password: password,
		},
		{ new: true }
	);
	if (!updateUser) {
		res.status(404);
		throw new Error(error.message);
	} else {
		res.json(updatedUser);
	}
});

module.exports = { registerUser, authUser, changePass };
