import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import Background from "../assets/stp-pic.jpg";
import Logo from "../assets/PMC-Logo.png";
import { useNavigate } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";

const Homepage = () => {
	const { user, setUser } = useStateContext();
	const [stpLogin, setStpLogin] = useState(true);

	const navigate = useNavigate();

	const [phone, setPhone] = useState("");
	const [tankerNumber, setTankerNumber] = useState("");
	const [password, setPassword] = useState("");

	// ====================== stp login ==============================

	const stpSubmit = async (event) => {
		event.preventDefault();
		if (!phone || !password) {
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
				"http://localhost:5000/api/user/login",
				{
					phone,
					password,
				},
				config
			);
			if (data) {
				setUser(data);
				setPhone("");
				setPassword("");

				if (data.isAdmin) {
					navigate("/admin");
				} else {
					navigate("/stp");
				}
			}
		} catch (error) {
			toast.error("Invailid User");
		}
	};

	// ==================tanker login =============================

	const tankerSubmit = async (event) => {
		event.preventDefault();
		if (!tankerNumber || !password) {
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
				"http://localhost:5000/api/tanker/login",
				{
					tankerNumber,
					password,
				},
				config
			);
			if (data) {
				setUser(data);
				setTankerNumber("");
				setPassword("");
				navigate("/tanker");
			}
		} catch (error) {
			toast.error("Invailid User");
		}
	};
	// ========================================================================

	const OrderTanker = () => {
		navigate("/order-tanker");
	};

	const registerTanker = () => {
		navigate("/tanker-registration");
	};
	return (
		<div className="h-screen w-screen overflow-hidden">
			<ToastContainer position="top-center" />
			<div className="h-20 w-full bg-gradient-to-r from-sky-500 to-indigo-500 flex justify-between items-center px-4">
				<div className="flex items-center justify-center ">
					<img className="h-16" src={Logo} alt="logo" />
				</div>
				<div className="hidden md:block">
					<p className="font-bold text-2xl text-white">STP Tanker System</p>
				</div>
				<div>
					<button
						onClick={OrderTanker}
						className="py-1 px-2 bg-orange-400 text-xl text-white rounded"
					>
						Order Tanker
					</button>
				</div>
			</div>
			<div
				style={{
					background: `url(${Background})`,
					backgroundRepeat: "no-repeat",
					backgroundPosition: "center",
					backgroundSize: "cover",
				}}
				className="h-full w-full flex justify-center items-center"
			>
				<div className="box-theme h-80 w-80 rounded">
					<div className="flex gap-2 my-2 justify-center items-center ">
						<button
							onClick={() => setStpLogin(true)}
							className="py-1 px-2 bg-lime-600 rounded text-white"
						>
							S.T.P. Login
						</button>
						<button
							onClick={() => setStpLogin(false)}
							className="py-1 px-2 bg-lime-600 rounded text-white"
						>
							Tanker Login
						</button>
					</div>
					<div className="h-full w-full b-black">
						{stpLogin && (
							<div className="flex flex-col mt-8 items-center gap-2">
								<p className="text-white font-bold text-xl text-center">
									S.T.P. Login
								</p>
								<form action="">
									<div className="label-theme">
										<label htmlFor="phone">User ID:</label>
										<input
											type="text"
											name="phone"
											id="phone"
											className="input-theme"
											value={phone}
											onChange={(e) => setPhone(e.target.value)}
										/>
									</div>
									<div className="label-theme">
										<label htmlFor="password">Password:</label>
										<input
											type="password"
											name="password"
											id="password"
											className="input-theme"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
								</form>
								<button onClick={stpSubmit} className="btn-theme">
									Login
								</button>
							</div>
						)}
						{!stpLogin && (
							<div className="flex flex-col mt-8 items-center gap-2">
								<p className="text-white font-bold text-xl text-center">
									Tanker Login
								</p>
								<form action="">
									<div className="label-theme">
										<label htmlFor="tankerNumber">User ID:</label>
										<input
											type="text"
											name="tankerNumber"
											id="tankerNumber"
											className="input-theme"
											value={tankerNumber}
											maxLength={10}
											minLength={10}
											onChange={(e) =>
												setTankerNumber(e.target.value.toUpperCase())
											}
										/>
									</div>
									<div className="label-theme">
										<label htmlFor="password">Password:</label>
										<input
											type="password"
											name="password"
											id="password"
											className="input-theme"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
										/>
									</div>
								</form>
								<button onClick={tankerSubmit} className="btn-theme">
									Login
								</button>
								<div>
									<button onClick={registerTanker} className="underline">
										Register Tanker
									</button>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
