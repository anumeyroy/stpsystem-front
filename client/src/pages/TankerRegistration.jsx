import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Logo from "../assets/PMC-Logo.png";
import Background from "../assets/background.jpg";

const TankerRegistration = () => {
	// -----------date-------------
	const today = new Date().getDate();
	const month = new Date().getMonth() + 1;
	const year = new Date().getFullYear();

	const todayDate = `${today}/${month}/${year}`;

	// ======================================

	const [tankerNumber, setTankerNumber] = useState("");

	const [tanker, setTanker] = useState({
		quantity: "",
		ownerName: "",
		phone: "",
		tankerCompony: "",
		stpName: "",
	});

	const { quantity, ownerName, phone, tankerCompony, stpName } = tanker;
	const handleChange = (event) => {
		setTanker({
			...tanker,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (
			!tankerNumber ||
			!quantity ||
			!ownerName ||
			!phone ||
			!tankerCompony ||
			!stpName
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
				"http://localhost:5000/api/tanker/register",
				{
					tankerNumber,
					quantity,
					ownerName,
					phone,
					tankerCompony,
					stpName,
				},
				config
			);
			if (data) {
				toast.success("Tanker registered successfully");
				setTankerNumber("");
				setTanker({
					quantity: "",
					ownerName: "",
					phone: "",
					tankerCompony: "",
					stpName: "",
				});
			}
		} catch (error) {
			toast.error("Having some issue");
		}
	};
	return (
		<>
			<div
				style={{
					background: `url(${Background})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
				className="h-screen flex flex-col w-screen"
			>
				<ToastContainer position="top-center" />
				<div className="h-20 w-full text-white px-2 flex justify-between items-center ">
					<div className="flex items-center gap-1">
						<div>
							<img className="h-12" src={Logo} alt="logo" />
						</div>
						<div>
							<p>Pune Muncipal Corporation</p>
							<p className="text-xs">STP Tanker System</p>
						</div>
					</div>
					<div>
						<p>Date: {todayDate}</p>
					</div>
				</div>
				<div className="h-10 bg-theme"></div>
				<div className="h-full w-full bg-slate-200 flex justify-center items-center">
					<div className="p-4 md:w-[60%] box-theme flex flex-col gap-4 items-center justify-center">
						<p className="text-xl font-bold text-white">Register Tanker</p>
						<form className="md:flex md:justify-center gap-4 flex-wrap">
							<div className="label-theme">
								<label htmlFor="tankerNumber">Tanker Number:</label>
								<input
									type="text"
									name="tankerNumber"
									id="tankerNumber"
									className="input-theme"
									maxLength={10}
									minLength={10}
									value={tankerNumber}
									onChange={(e) =>
										setTankerNumber(e.target.value.toUpperCase())
									}
								/>
							</div>
							<div className="label-theme">
								<label htmlFor="quantity">Tanker Capacity:</label>
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
								<label htmlFor="ownerName">Owner Name:</label>
								<input
									type="text"
									name="ownerName"
									id="ownerName"
									className="input-theme"
									value={tanker.ownerName}
									onChange={handleChange}
								/>
							</div>
							<div className="label-theme">
								<label htmlFor="phone">Owner Mobile Number:</label>
								<input
									type="text"
									name="phone"
									id="phone"
									className="input-theme"
									value={tanker.phone}
									onChange={handleChange}
								/>
							</div>

							<div className="label-theme">
								<label htmlFor="tankerCompony">Tanker Manufacturer:</label>
								<input
									type="text"
									name="tankerCompony"
									id="tankerCompony"
									className="input-theme"
									value={tanker.tankerCompony}
									onChange={handleChange}
								/>
							</div>
							<div className="label-theme">
								<label htmlFor="stpName">Nearest S.T.P:</label>
								<select
									className="input-theme"
									onChange={handleChange}
									name="stpName"
									id="stpName"
								>
									<option value="">Select S.T.P.</option>
									<option value="	Bhairoba"> Bhairoba</option>
									<option value="Erandwane"> Erandwane</option>
									<option value="Tanajiwadi"> Tanajiwadi</option>
									<option value="	Bopodi"> Bopodi</option>
									<option value="Naidu (old)"> Naidu (old)</option>
									<option value="Naidu (new)"> Naidu (new)</option>
									<option value="Mundhwa">Mundhwa</option>
									<option value="	Vitthalwadi"> Vitthalwadi</option>
									<option value="Baner"> Baner</option>
									<option value="	Kharadi"> Kharadi</option>
								</select>
							</div>
						</form>
						<button type="submit" onClick={handleSubmit} className="btn-theme">
							Register
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default TankerRegistration;
