import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Logo from "../assets/PMC-Logo.png";
import Background from "../assets/background.jpg";
import { useStateContext } from "../contexts/ContextProvider";

const OrderTanker = () => {
	const navigate = useNavigate();
	const { challan, setChallan } = useStateContext();
	// -----------date-------------
	const today = new Date().getDate();
	const month = new Date().getMonth() + 1;
	const year = new Date().getFullYear();

	const todayDate = `${today}/${month}/${year}`;

	// ======================================

	const [receipt, setReceipt] = useState({
		firstName: "",
		lastName: "",
		phone: "",
		project: "",
		projectAddress: "",
		quantity: "",
		stpName: "",
	});

	const {
		firstName,
		lastName,
		phone,
		project,
		projectAddress,
		quantity,
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
			!firstName ||
			!lastName ||
			!phone ||
			!project ||
			!projectAddress ||
			!quantity ||
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
				"http://localhost:5000/api/receipt/register",
				{
					firstName,
					lastName,
					phone,
					project,
					projectAddress,
					quantity,
					stpName,
				},
				config
			);
			if (data) {
				toast.success("Order Done");
				setChallan(data);
				navigate("/order-tanker/receipt");
				setReceipt({
					firstName: "",
					lastName: "",
					phone: "",
					project: "",
					projectAddress: "",
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
						<p className="text-xl font-bold text-white">Order STP Tanker</p>
						<form className="md:flex md:justify-center gap-4 flex-wrap">
							<div className="label-theme">
								<label htmlFor="firstName">First Name:</label>
								<input
									type="text"
									name="firstName"
									id="firstName"
									className="input-theme"
									value={receipt.firstName}
									onChange={handleChange}
								/>
							</div>
							<div className="label-theme">
								<label htmlFor="lastName">Last Name:</label>
								<input
									type="text"
									name="lastName"
									id="lastName"
									className="input-theme"
									value={receipt.lastName}
									onChange={handleChange}
								/>
							</div>
							<div className="label-theme">
								<label htmlFor="phone">Mobile Number:</label>
								<input
									type="text"
									name="phone"
									id="phone"
									className="input-theme"
									value={receipt.phone}
									onChange={handleChange}
								/>
							</div>

							<div className="label-theme">
								<label htmlFor="project">Project Name:</label>
								<input
									type="text"
									name="project"
									id="project"
									className="input-theme"
									value={receipt.project}
									onChange={handleChange}
								/>
							</div>
							<div className="label-theme">
								<label htmlFor="projectAddress">Project Address:</label>
								<input
									type="text"
									name="projectAddress"
									id="projectAddress"
									className="input-theme"
									value={receipt.projectAddress}
									onChange={handleChange}
								/>
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
						<button onClick={handleSubmit} type="submit" className="btn-theme">
							Submit
						</button>
					</div>
				</div>
			</div>
		</>
	);
};

export default OrderTanker;
