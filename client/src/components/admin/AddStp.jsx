import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddStp = () => {
	const [stp, setStp] = useState({
		stpName: "",
		location: "",
		latitude: "",
		longitude: "",
		inchargeName: "",
		inchargeNumber: "",
		stationNumber: "",
		openTime: "",
		closeTime: "",
	});

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
	} = stp;

	const handleChange = (event) => {
		setStp({
			...stp,
			[event.target.name]: event.target.value,
		});
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
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
				"http://localhost:5000/api/stp/register",
				{
					stpName,
					location,
					latitude,
					longitude,
					inchargeName,
					inchargeNumber,
					stationNumber,
					openTime,
					closeTime,
				},
				config
			);
			if (data) {
				toast.success("New S.T.P. Added");
				setStp({
					stpName: "",
					location: "",
					latitude: "",
					longitude: "",
					inchargeName: "",
					inchargeNumber: "",
					stationNumber: "",
					openTime: "",
					closeTime: "",
				});
			}
		} catch (error) {
			toast.warning("S.T.P. already Exist ");
		}
	};
	return (
		<>
			<div className="h-full w-full overflow-auto bg-slate-200 flex justify-center items-center">
				<ToastContainer position="top-center" />
				<div className="p-4 mt-28 md:mt-0 mb-4 md:w-[60%] box-theme flex flex-col gap-4 items-center justify-center  ">
					<p className="text-xl font-bold text-white">Add S.T.P</p>
					<form className="md:flex md:justify-center gap-4 flex-wrap">
						<div className="label-theme">
							<label htmlFor="firstName">S.T.P. Name:</label>
							<input
								type="text"
								name="stpName"
								id="stpName"
								className="input-theme"
								value={stp.stpName}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="firstName">S.T.P. Location:</label>
							<input
								type="text"
								name="location"
								id="location"
								className="input-theme"
								value={stp.location}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="firstName">Latitude:</label>
							<input
								type="text"
								name="latitude"
								id="latitude"
								className="input-theme"
								value={stp.latitude}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="firstName">Longitude:</label>
							<input
								type="text"
								name="longitude"
								id="longitude"
								className="input-theme"
								value={stp.longitude}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="firstName">S.T.P. Incharge Name:</label>
							<input
								type="text"
								name="inchargeName"
								id="inchargeName"
								className="input-theme"
								value={stp.inchargeName}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="firstName">Incharge Contact Number:</label>
							<input
								type="text"
								name="inchargeNumber"
								id="inchargeNumber"
								className="input-theme"
								value={stp.inchargeNumber}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="firstName">Number of Filling Station:</label>
							<input
								type="text"
								name="stationNumber"
								id="stationNumber"
								className="input-theme"
								value={stp.stationNumber}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="firstName">S.T.P. Opening Time:</label>
							<input
								type="text"
								name="openTime"
								id="openTime"
								className="input-theme"
								value={stp.openTime}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="firstName">S.T.P. Closing Time:</label>
							<input
								type="text"
								name="closeTime"
								id="closeTime"
								className="input-theme"
								value={stp.closeTime}
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

export default AddStp;
