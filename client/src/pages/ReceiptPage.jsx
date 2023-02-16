import React from "react";
import moment from "moment/moment";
import Logo from "../assets/logo 2.png";
import { useStateContext } from "../contexts/ContextProvider";

const ReceiptPage = () => {
	const { challan } = useStateContext();
	const fullName = `${challan.firstName} ${challan.lastName}`;
	// =======================date to local ================

	const date = moment(challan.date).subtract(10, "days").calendar();

	return (
		<>
			<div className="h-screen w-screen">
				<div className="h-full w-full flex justify-center items-center">
					<div className="h-[90%] w-[90%] md:w-96 bg-slate-100 rounded">
						<div className="flex my-8 justify-center items-center">
							<img className="h-16 w-auto" src={Logo} alt="" />
						</div>
						<div className="m-4 flex flex-col gap-4">
							<p>
								<span className="font-bold">Receipt Number:</span>
								{challan.receiptNumber}
							</p>
							<p>
								<span className="font-bold">Booking Date:</span> {date}
							</p>
							<p>
								<span className="font-bold">Customer Name:</span>
								{fullName}
							</p>
							<p>
								<span className="font-bold">Mobile Number:</span>
								{challan.phone}
							</p>
							<p>
								<span className="font-bold">Project Name:</span>
								{challan.project}
							</p>
							<p>
								<span className="font-bold">Project Address:</span>
								{challan.projectAddress}
							</p>
							<p>
								<span className="font-bold">Required Water Quantity:</span>
								{challan.quantity} liters
							</p>
							<p>
								<span className="font-bold">Nearest S.T.P.:</span>
								{challan.stpName}
							</p>
							<div className="flex my-8 justify-center items-center">
								<button className="btn-theme">Call tanker</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default ReceiptPage;
