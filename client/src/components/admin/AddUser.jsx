import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const AddUser = () => {
	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		stpName: "",
	});

	const { firstName, lastName, email, phone, stpName } = user;
	const handleChange = (event) => {
		setUser({
			...user,
			[event.target.name]: event.target.value,
		});
	};
	const handleSubmit = async (event) => {
		event.preventDefault();
		if (!firstName || !lastName || !email || !phone || !stpName) {
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
				"http://localhost:5000/api/user/register",
				{ firstName, lastName, email, phone, stpName },
				config
			);
			if (data) {
				toast.success("New User Added");
				setUser({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					stpName: "",
				});
			}
		} catch (error) {
			toast.warning("user already Exist ");
		}
	};
	return (
		<>
			<div className="h-full w-full overflow-auto bg-slate-200 flex justify-center items-center">
				<ToastContainer position="top-center" />
				<div className="p-4 md:w-[60%] box-theme flex flex-col gap-4 items-center justify-center">
					<p className="text-xl font-bold text-white">Add User</p>
					<form className="md:flex md:justify-center gap-4 flex-wrap">
						<div className="label-theme">
							<label htmlFor="firstName">First Name:</label>
							<input
								type="text"
								name="firstName"
								id="firstName"
								className="input-theme"
								value={user.firstName}
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
								value={user.lastName}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="email">Email:</label>
							<input
								type="email"
								name="email"
								id="email"
								className="input-theme"
								value={user.email}
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
								value={user.phone}
								onChange={handleChange}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="stpName">S.T.P. Name:</label>
							<select
								className="input-theme"
								onChange={handleChange}
								name="stpName"
								id="stpName"
							>
								<option value="">Choose S.T.P.</option>
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
					<button className="btn-theme" onClick={handleSubmit} type="submit">
						Submit
					</button>
				</div>
			</div>
		</>
	);
};

export default AddUser;
