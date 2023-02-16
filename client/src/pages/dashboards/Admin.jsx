import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/PMC-Logo.png";
import Background from "../../assets/background.jpg";
import { FaPowerOff } from "react-icons/fa";
import AddStp from "../../components/admin/AddStp";
import AdminReport from "../../components/admin/AdminReport";
import PassChangeModel from "../../components/models/PassChangeModel";
import AddUser from "../../components/admin/AddUser";
import { useStateContext } from "../../contexts/ContextProvider";

const Admin = () => {
	const { user, logOut } = useStateContext();
	const navigate = useNavigate();

	const [modelOn, setModelOn] = useState(false);

	const [model, setModel] = useState("stp");

	const ModelClose = () => {
		setModelOn(false);
	};

	useEffect(() => {
		if (!user) {
			navigate("/");
		}
	}, [logOut]);

	return (
		<>
			{user && (
				<div
					style={{
						background: `url(${Background})`,
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						backgroundSize: "cover",
					}}
					className="h-screen flex flex-col w-screen overflow-hidden"
				>
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
						<div className="min-w-[40%] text-end">
							<p className="">{user.firstName}</p>
							<button className="text-xs" onClick={() => setModelOn(true)}>
								Change Password
							</button>
						</div>
					</div>
					<div className="h-10 text-white font-semibold flex gap-4 px-2 items-center justify-between bg-theme">
						<div className="flex gap-3">
							<button onClick={() => setModel("stp")}>Add S.T.P.</button>
							<button onClick={() => setModel("user")}>Add User</button>
							<button onClick={() => setModel("report")}>Reports</button>
						</div>
						<button onClick={logOut}>
							<FaPowerOff title="LogOut" className="cursor-pointer" />
						</button>
					</div>
					{model == "stp" && <AddStp />}
					{model == "user" && <AddUser />}
					{model == "report" && <AdminReport />}

					{modelOn && <PassChangeModel onClose={ModelClose} />}
				</div>
			)}
		</>
	);
};

export default Admin;
