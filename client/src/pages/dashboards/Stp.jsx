import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/PMC-Logo.png";
import Background from "../../assets/background.jpg";
import { FaPowerOff } from "react-icons/fa";
import FillTanker from "../../components/stp/FillTanker";
import StpReport from "../../components/stp/StpReport";
import { useStateContext } from "../../contexts/ContextProvider";
import PassChangeModel from "../../components/models/PassChangeModel";

const Stp = () => {
	const { user, logOut } = useStateContext();
	const [modelOn, setModelOn] = useState(false);
	const [window, setWindow] = useState("fillTanker");
	const navigate = useNavigate();

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
					className="h-screen flex flex-col w-screen"
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
							<p className="">Hi, {user.firstName}</p>
							<button onClick={() => setModelOn(true)} className="text-xs">
								Change Password
							</button>
						</div>
					</div>
					<div className="h-10 text-white font-semibold flex gap-4 px-2 items-center justify-between bg-theme">
						<div className="flex gap-3">
							<button onClick={() => setWindow("fillTanker")}>
								Fill Tanker
							</button>
							<button onClick={() => setWindow("report")}>Reports</button>
						</div>
						<button onClick={logOut}>
							<FaPowerOff title="LogOut" className="cursor-pointer" />
						</button>
					</div>
					{window == "fillTanker" && <FillTanker />}
					{window == "report" && <StpReport />}
					{modelOn && <PassChangeModel onClose={ModelClose} />}
				</div>
			)}
		</>
	);
};

export default Stp;
