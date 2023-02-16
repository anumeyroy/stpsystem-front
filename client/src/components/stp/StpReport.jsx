import React from "react";

const StpReport = () => {
	return (
		<>
			<div className="h-full w-full overflow-hidden bg-slate-200">
				<div className="p-4 w-full bg-theme flex flex-col gap-4 items-center justify-center">
					<p className="text-xl font-bold text-white">Filter Report</p>
					<form className="md:flex md:justify-center gap-4 flex-wrap">
						<div className="label-theme">
							<label htmlFor="password">Receipt Number</label>
							<input
								type="receiptNumber"
								name="receiptNumber"
								id="receiptNumber"
								className="input-theme"
								// value={receiptNumber}
								// onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="fromDate">From Date:</label>
							<input
								type="date"
								name="fromDate"
								id="fromDate"
								className="input-theme"
								// value={fromDate}
								// onChange={(e) => setPassword(e.target.value)}
							/>
						</div>
						<div className="label-theme">
							<label htmlFor="toDate">To Date:</label>
							<input
								type="date"
								name="toDate"
								id="toDate"
								className="input-theme"
								// value={toDate}
								// onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button
							type="submit"
							className="py-1 px-2 bg-cyan-900 text-white rounded mt-4 text-xl"
						>
							Search
						</button>
					</form>
				</div>
				<div className="h-full w-full">No report</div>
			</div>
		</>
	);
};

export default StpReport;
