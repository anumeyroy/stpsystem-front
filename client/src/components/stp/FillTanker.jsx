import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const FillTanker = () => {
	const [receipt, setReceipt] = useState({
		tankerNumber: "",
		quantity: "",
		receiptNumber: "",
		driverName: "",
		driverNumber: "",
		stationNumber: "",
		stpName: "test",
	});

	const {
		tankerNumber,
		quantity,
		receiptNumber,
		driverName,
		driverNumber,
		stationNumber,
		stpName,
	} = receipt;
	const handleChange = (event) => {
		setReceipt({
			...receipt,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (
			!tankerNumber ||
			!quantity ||
			!receiptNumber ||
			!driverName ||
			!driverNumber ||
			!stationNumber
		) {
			toast.warning("Please Fill all details");
			return;
		}
		try {
			const config = {
				headers: {
					"Content-type": "application/json",
				},
			};
			const { data } = await axios.post(
				"http://localhost:5000/api/stp/fill",
				{
					tankerNumber,
					quantity,
					receiptNumber,
					driverName,
					driverNumber,
					stationNumber,
					stpName,
				},
				config
			);
			if (data) {
				toast.success("Approved");
				setReceipt({
					receiptNumber: "",
					driverName: "",
					driverNumber: "",
					stationNumber: "",
					stpName: "",
				});
			}
		} catch (error) {
			toast.error("No Receipt Found");
		}
	};
	return (
		<>
			<div className="h-full w-full bg-slate-200 flex justify-center items-center">
				<ToastContainer position="top-center" />
				<div className="p-4 md:w-[60%] box-theme flex flex-col gap-4 items-center justify-center">
					<p className="text-xl font-bold text-white">Fill Tanker</p>
					<form className="md:flex md:justify-center gap-4 flex-wrap">
						<div className="label-theme">
							<label htmlFor="receiptNumber">Receipt Number:</label>
							<input
								type="text"
								name="receiptNumber"
								id="receiptNumber"
								className="input-theme"
								value={receipt.receiptNumber}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="tankerNumber">Select Tanker:</label>
							<select
								className="input-theme"
								onChange={handleChange}
								name="tankerNumber"
								id="tankerNumber"
							>
								<option value="">Select Tanker</option>
								<option value="MH12PQ1234">MH12PQ1234</option>
							</select>
						</div>
						<div className="label-theme">
							<label htmlFor="quantity">Required Water:</label>
							<select
								className="input-theme"
								onChange={handleChange}
								name="quantity"
								id="quantity"
							>
								<option value="">Select Quantity</option>
								<option value="10000"> 10,000</option>
								<option value="7000"> 7,000</option>
								<option value="5000"> 5,000</option>
							</select>
						</div>

						<div className="label-theme">
							<label htmlFor="driverName">Driver Name:</label>
							<input
								type="text"
								name="driverName"
								id="driverName"
								className="input-theme"
								value={receipt.driverName}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="driverNumber">Driver Mobile Number:</label>
							<input
								type="text"
								name="driverNumber"
								id="driverNumber"
								className="input-theme"
								value={receipt.driverNumber}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="Station Number">Filling Station Number:</label>
							<input
								type="text"
								name="stationNumber"
								id="stationNumber"
								className="input-theme"
								value={receipt.stationNumber}
								onChange={handleChange}
							/>
						</div>
					</form>
					<button type="submit" onClick={handleSubmit} className="btn-theme">
						Submit
					</button>
				</div>
			</div>
		</>
	);
};

export default FillTanker;
